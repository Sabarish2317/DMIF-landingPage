'use client'

import { Suspense, useMemo, useRef, useEffect } from 'react'
import { Canvas, useFrame, useThree, extend } from '@react-three/fiber'
import { Center, Environment, OrbitControls, useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js'
import { EffectComposer as ThreeEffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js'

const HalftoneShader = {
  uniforms: {
    tDiffuse: { value: null },
    u_gridSize: { value: 18.0 },
    u_dotRadius: { value: 11.0 },
    u_dotColor: { value: new THREE.Color(0.996, 0.278, 0.035) },
    u_bgColor: { value: new THREE.Color(1.0, 1.0, 1.0) },
    u_resolution: { value: new THREE.Vector2(1, 1) },
  },
  vertexShader: /* glsl */ `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: /* glsl */ `
    uniform sampler2D tDiffuse;
    uniform float u_gridSize;
    uniform float u_dotRadius;
    uniform vec3 u_dotColor;
    uniform vec3 u_bgColor;
    uniform vec2 u_resolution;
    varying vec2 vUv;

    void main() {
      vec2 coord = vUv * u_resolution;

      vec2 cell = floor(coord / u_gridSize) * u_gridSize + u_gridSize * 0.5;
      vec2 cellUV = cell / u_resolution;

      vec4 sampled = texture2D(tDiffuse, cellUV);
      float luminance = dot(sampled.rgb, vec3(0.299, 0.587, 0.114));

      float dotSize = u_dotRadius * (1.0 - luminance);
      float dist = length(coord - cell);

      float edge = smoothstep(dotSize - 0.5, dotSize + 0.5, dist);
      vec3 color = mix(u_dotColor, u_bgColor, edge);
      gl_FragColor = vec4(color, 1.0);
    }
  `,
}

function HalftonePostProcessing({
  gridSize = 6,
  gridSpacing = -1.2,
  dotColor = [0.996, 0.278, 0.035] as [number, number, number],
  bgColor = [1.0, 1.0, 1.0] as [number, number, number],
}) {
  // dotRadius derived from gridSize and gridSpacing
  // gridSpacing < 0 means dots overlap, > 0 means gap between dots
  const dotRadius = (gridSize - gridSpacing) / 2

  const { gl, scene, camera, size } = useThree()
  const composerRef = useRef<ThreeEffectComposer | null>(null)

  useEffect(() => {
    const composer = new ThreeEffectComposer(gl)
    const renderPass = new RenderPass(scene, camera)
    composer.addPass(renderPass)

    const halftonePass = new ShaderPass(HalftoneShader)
    halftonePass.uniforms.u_gridSize.value = gridSize
    halftonePass.uniforms.u_dotRadius.value = dotRadius
    halftonePass.uniforms.u_dotColor.value = new THREE.Color(...dotColor)
    halftonePass.uniforms.u_bgColor.value = new THREE.Color(...bgColor)
    const drawingBufferSize = gl.getDrawingBufferSize(new THREE.Vector2())
    halftonePass.uniforms.u_resolution.value = drawingBufferSize
    composer.addPass(halftonePass)

    composerRef.current = composer

    return () => {
      composer.dispose()
    }
  }, [gl, scene, camera, gridSize, dotRadius, dotColor, bgColor, size])

  useEffect(() => {
    if (composerRef.current) {
      composerRef.current.setSize(size.width, size.height)
      const drawingBufferSize = gl.getDrawingBufferSize(new THREE.Vector2())
      const passes = composerRef.current.passes
      for (const pass of passes) {
        if (pass instanceof ShaderPass && pass.uniforms.u_resolution) {
          pass.uniforms.u_resolution.value.copy(drawingBufferSize)
        }
      }
    }
  }, [size])

  useFrame(() => {
    if (composerRef.current) {
      composerRef.current.render()
    }
  }, 1)

  return null
}

function BrainModel({
  rotationSpeed = 0.3,
  scale = 0.45,
}: {
  rotationSpeed?: number
  scale?: number
}) {
  const { scene } = useGLTF('/3dModels/brain.glb')
  const brainScene = useMemo(() => scene.clone(), [scene])

  useFrame((_, delta) => {
    brainScene.rotation.y += rotationSpeed * delta
  })

  return <primitive object={brainScene} dispose={null} scale={scale} />
}

export default function BrainCanvas({
  rotationSpeed = 0.3,
  modelScale = 0.8,
  className = 'h-full w-full',
}: {
  rotationSpeed?: number
  modelScale?: number
  className?: string
}) {
  return (
    <Canvas className={className} camera={{ position: [0, 0, 3], fov: 45 }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} />
      <Suspense fallback={null}>
        <group position={[0.4, 0.2, 0]}>
          <Center>
            <BrainModel rotationSpeed={rotationSpeed} scale={modelScale} />
          </Center>
        </group>
        <Environment preset="city" />
      </Suspense>
      <HalftonePostProcessing />
      <OrbitControls enablePan={false} enableZoom={false} autoRotate={false} />
    </Canvas>
  )
}

useGLTF.preload('/3dModels/brain.glb')
