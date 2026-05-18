# DMIF Landing Page - UI Style Guide

A comprehensive documentation of the UI styling, branding, colors, CSS, and layout used in the DMIF Landing Page. Use this as a template when creating additional pages with consistent styling.

---

## Table of Contents

1. [Brand Colors](#brand-colors)
2. [Typography](#typography)
3. [CSS Architecture](#css-architecture)
4. [Components](#components)
5. [Layout System](#layout-system)
6. [Animation & Transitions](#animation--transitions)
7. [Responsive Design](#responsive-design)
8. [Color Palette Reference](#color-palette-reference)
9. [Usage Examples](#usage-examples)

---

## Brand Colors

### Primary Color Palette

| Color                 | Hex Value | Usage                                     | RGB                |
| --------------------- | --------- | ----------------------------------------- | ------------------ |
| **Primary Green**     | `#10442a` | Navigation, headings, primary UI elements | rgb(16, 68, 42)    |
| **Secondary Green**   | `#84d322` | Accent highlights, badges                 | rgb(132, 211, 34)  |
| **Primary Orange**    | `#FD4F0C` | Buttons (fill variant), CTAs              | rgb(253, 79, 12)   |
| **Secondary Orange**  | `#FA773A` | Icon buttons, hover states                | rgb(250, 119, 58)  |
| **White**             | `#ffffff` | Background, cards                         | rgb(255, 255, 255) |
| **Dark Gray**         | `#1e1e1e` | Text, dark elements                       | rgb(30, 30, 30)    |
| **Light Gray Border** | `#565452` | Borders (with 20% opacity)                | rgb(86, 84, 82)    |
| **Light Gray Bg**     | `#303231` | Dark mode background                      | rgb(48, 50, 49)    |

### CSS Custom Properties

Define these in your CSS:

```css
:root {
  --background: #ffffff;
  --primary: #10442a;
  --secondary: #84d322;
  --orange-primary: #fd4f0c;
  --orange-secondary: #fa773a;
  --text-primary: #1e1e1e;
  --text-light: #ededed;
  --border-gray: #565452;
}
```

### Usage in Tailwind

All colors are applied directly via inline Tailwind classes:

```jsx
// Example: Primary green background
<div className="bg-[#10442a] text-white">Primary Section</div>

// Example: Secondary green accent
<span className="text-[#84d322]">Accent Text</span>

// Example: Primary orange button
<button className="bg-[#FD4F0C] text-white">CTA Button</button>

// Example: Border with opacity
<div className="border border-[#565452]/20">Card</div>
```

---

## Typography

### Font Family Configuration

The project uses three font families, managed via Next.js local and Google fonts:

#### 1. **Inter** (Google Font)

- **Usage**: Body text, UI labels, navigation
- **CSS Variable**: `var(--font-inter)`
- **Weight Range**: 100-900
- **Applied**: Primary font across the site

```jsx
import { inter } from '@/lib/fonts'

// Auto-applied to html element
<html className={inter.className}>
```

#### 2. **Satoshi** (Local Font)

- **Usage**: Alternative UI text, secondary headings
- **CSS Variable**: `var(--font-satoshi)`
- **Weight Range**: 100-900
- **File Location**: `/public/fonts/Satoshi-Variable.ttf`

```jsx
import { satoshi } from '@/lib/fonts'

// Usage in components
;<div className="font-satoshi">Secondary Text</div>
```

#### 3. **Playfair Display** (Google Font)

- **Usage**: Large headings, hero sections, display text
- **CSS Variable**: `var(--font-playfair)`
- **Weight Range**: 400-900
- **Applied**: For elegant, serif headings

```jsx
import { playfair } from '@/lib/fonts'

// Usage in components
;<h1 className="font-playfair text-4xl md:text-6xl">Main Heading</h1>
```

### Font Sizes & Scales

Tailwind's default scale is used. Common sizes:

```jsx
// Text sizes
className = 'text-sm md:text-md' // Small to medium
className = 'text-base md:text-lg' // Base to large
className = 'text-xl md:text-2xl' // Extra large
className = 'text-2xl md:text-4xl' // Display
className = 'text-3xl md:text-5xl' // Hero
className = 'text-4xl md:text-6xl' // Major heading
```

### Font Application Pattern

```jsx
// Navigation
<nav className="font-inter text-sm font-medium">Navigation</nav>

// Hero heading
<h1 className="font-playfair text-5xl md:text-6xl font-bold">
  Hero Title
</h1>

// Body text
<p className="font-inter text-base md:text-lg leading-relaxed">
  Description paragraph
</p>

// Alternative UI
<div className="font-satoshi text-sm">UI Label</div>
```

---

## CSS Architecture

### Global CSS Setup

The project uses Tailwind CSS with custom theme extensions and CSS custom properties.

#### Files:

- `global.css` - Root CSS custom properties and global utilities
- `tailwind.config.ts` - Tailwind configuration and theme
- Component-specific CSS modules for complex styles

### Key CSS Utilities

#### Custom Properties Defined:

```css
:root {
  --background: #ffffff;
  --primary: #10442a;
  --secondary: #84d322;

  --shadow-apple:
    0 0 10px rgba(0, 0, 0, 0.06), 0 0 20px rgba(0, 0, 0, 0.04),
    0 0 20px rgba(0, 0, 0, 0.02);

  --transition-smooth: all 300ms ease-in-out;
}
```

#### Scrollbar Hiding (Global)

```css
html {
  scrollbar-width: none; /* Firefox */
}

html::-webkit-scrollbar {
  display: none; /* Chrome, Safari, Edge */
}
```

#### Grid Background Pattern

```jsx
// CSS class for grid background
<div className="bg-grid">Content</div>

// CSS definition
.bg-grid {
  background-image:
    linear-gradient(to right, #0000 1px, transparent 1px),
    linear-gradient(to bottom, #0000 1px, transparent 1px);
  background-size: 80px 80px;
}
```

#### Smooth Scrolling

```css
html {
  scroll-behavior: smooth;
}
```

### Smooth Transitions

For consistent animations, use:

```jsx
<div className="transition-all duration-200 ease-in-out">
  Smooth hover effect
</div>
```

---

## Components

### 1. Button Component

**Location**: `components/Button.tsx`

#### Variants:

```jsx
import Button from '@/app/components/Button'

// Fill variant (default) - Orange background
<Button variant="fill">Click Me</Button>

// Outline variant - White background with border
<Button variant="outline">Click Me</Button>

// Ghost variant - Transparent with text color change on hover
<Button variant="ghost">Click Me</Button>
```

#### Styling Details:

```jsx
const variants = {
  fill: 'bg-[#FD4F0C] text-white',
  outline:
    'border bg-white border-[#565452]/20 text-[#1e1e1e] hover:bg-black hover:text-white',
  ghost: 'text-black hover:text-orange-500',
}

const baseStyles =
  'px-6 py-3 w-max rounded-md font-medium text-sm md:text-md transition-all duration-200 ease-in-out cursor-pointer'
```

### 2. Icon Button Component

**Location**: `components/IconButton.tsx`

```jsx
import IconButton from '@/app/components/IconButton'

;<IconButton
  label="Click Here"
  icon={<SomeIcon />}
  iconPosition="left" // or "right"
  onClick={handleClick}
/>
```

#### Styling:

- **Background**: `#FA773A`
- **Text Color**: White
- **Hover**: 80% opacity of background
- **Padding**: `px-4 py-2`
- **Border Radius**: `rounded-md`

### 3. Navigation Component

**Location**: `components/TopNav.tsx`

#### Features:

- Sticky positioning with smooth animation
- Dropdown menu for programs
- Mobile-responsive hamburger menu
- Scroll-triggered styling changes
- Responsive padding based on screen size

#### Implementation Pattern:

```jsx
<motion.nav
  className="sticky top-2 right-0 left-0 z-50 w-full"
  initial={{ y: -100, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{
    y: { type: 'spring', stiffness: 100, damping: 20 },
    opacity: { duration: 0.3 },
  }}
>
  {/* Nav content */}
</motion.nav>
```

---

## Layout System

### Container Structure

#### Main Layout (`app/layout.tsx`):

```jsx
export default function RootLayout({ children }) {
  return (
    <html
      className={`${inter.className} ${satoshi.className} ${playfair.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  )
}
```

### Hero Section Layout

**Location**: `components/sections/HeroSection.tsx`

#### Container:

```jsx
<div className="relative z-0 flex h-max w-full flex-col items-center justify-center gap-10 px-4 py-6 pt-12 sm:px-8 sm:py-8 md:h-screen md:max-h-screen md:px-24">
  {/* Content */}
</div>
```

#### Key Layout Classes:

- **Full width**: `w-full`
- **Flex layout**: `flex flex-col md:flex-row`
- **Centering**: `items-center justify-center`
- **Gap spacing**: `gap-10`
- **Responsive padding**: `px-4 md:px-24 py-6 md:py-8`
- **Height management**: `h-max md:h-screen`

### Landing Page Main Structure

**Location**: `components/LandingPage.tsx`

```jsx
<main
  id="home"
  className="relative min-h-screen w-screen max-w-screen items-center overflow-clip bg-[linear-gradient(to_right,#FFAE8F33_0%,#C8D5FF33_40%,#A2D7FF33_99%)]"
>
  <TopNav />
  <HeroSection />
  <CreativeCapabilitiesSection />
  <KeyProgramFeatures />
  <DiscoverInstituteSection />
  <Activities />
  <Testimonial />
  <FounderSection />
  <CTASection />
  <FAQSection />
  <Footer />
</main>
```

### Responsive Breakpoints

Tailwind's default breakpoints are used:

```
sm: 640px
md: 768px
lg: 1024px
xl: 1280px
2xl: 1536px
```

#### Common Responsive Patterns:

```jsx
// Mobile first
<div className="px-4 sm:px-8 md:px-24">Mobile padding increases</div>

// Text sizing
<h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Responsive heading</h1>

// Layout changes
<div className="flex flex-col md:flex-row gap-4 md:gap-8">
  <div className="w-full md:w-1/2">Left</div>
  <div className="w-full md:w-1/2">Right</div>
</div>

// Display toggle
<div className="block md:hidden">Mobile only</div>
<div className="hidden md:block">Desktop only</div>
```

---

## Animation & Transitions

### Framer Motion Integration

The project uses Framer Motion for smooth animations.

#### Key Animation Patterns:

#### 1. Fade In Animation

```jsx
import { motion } from 'framer-motion'

const fadeVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
}

<motion.div
  initial={fadeVariants.initial}
  animate={fadeVariants.animate}
  transition={{ duration: 0.3 }}
>
  Fading in content
</motion.div>
```

#### 2. Bottom to Top Animation

```jsx
const bottomToTopVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
}

<motion.div
  initial={bottomToTopVariants.initial}
  animate={bottomToTopVariants.animate}
  transition={{ type: 'spring', stiffness: 100, damping: 20 }}
>
  Content slides up
</motion.div>
```

#### 3. Top to Bottom Animation

```jsx
const topToBottomVariants = {
  initial: { opacity: 0, y: -50 },
  animate: { opacity: 1, y: 0 },
}

<motion.div
  initial={topToBottomVariants.initial}
  animate={topToBottomVariants.animate}
  transition={{ delay: 0.2 }}
>
  Content slides down
</motion.div>
```

#### 4. Scale Animation

```jsx
const headingVariants = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
}

<motion.h1
  initial={headingVariants.initial}
  animate={headingVariants.animate}
>
  Heading grows
</motion.h1>
```

### Marquee Animation

```jsx
// CSS for marquee effect
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

.animate-marquee {
  display: flex;
  min-width: 200%;
  animation: marquee 20s linear infinite;
}

// JSX usage
<div className="animate-marquee">
  <div>Scrolling content</div>
  <div>Scrolling content</div>
</div>
```

### Transition Configuration

Standard spring transition for consistent feel:

```jsx
const transitionConfig = {
  type: 'spring',
  stiffness: 100,
  damping: 20,
} as const
```

---

## Responsive Design

### Mobile-First Approach

The design uses mobile-first responsive methodology with breakpoints:

#### Common Responsive Patterns:

#### 1. Adaptive Font Sizes

```jsx
// Scales from mobile to desktop
<h1 className="font-playfair text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
  Responsive Title
</h1>
```

#### 2. Adaptive Spacing

```jsx
// Padding increases on larger screens
<section className="px-4 py-8 sm:px-8 md:px-16 md:py-16 lg:px-24">
  Content with responsive padding
</section>
```

#### 3. Layout Direction Change

```jsx
// Stacks vertically on mobile, horizontally on desktop
<div className="flex flex-col gap-4 md:flex-row md:gap-8">
  <div className="w-full md:w-1/2">Column 1</div>
  <div className="w-full md:w-1/2">Column 2</div>
</div>
```

#### 4. Image Responsive

```jsx
// Different images for mobile and desktop
const heroImageSrc =
  screenSize === 'mobile' ? '/hero-section-sm.svg' : '/hero-section.svg'
```

### Custom Hook for Screen Size

```jsx
import { useScreenSize } from '@/app/hooks/useScreenSize'

export default function Component() {
  const { screenSize, padding } = useScreenSize()

  return (
    <div style={{ padding }}>
      {screenSize === 'mobile' && <MobileLayout />}
      {screenSize === 'desktop' && <DesktopLayout />}
    </div>
  )
}
```

---

## Color Palette Reference

### Quick Copy Palette

```css
/* Primary Brand Colors */
--primary-green: #10442a;
--secondary-green: #84d322;
--primary-orange: #fd4f0c;
--secondary-orange: #fa773a;

/* Neutral Colors */
--white: #ffffff;
--dark: #1e1e1e;
--dark-bg: #303231;
--border-gray: #565452;

/* Gradient Background */
background: linear-gradient(
  to right,
  rgba(255, 174, 143, 0.2) 0%,
  rgba(200, 213, 255, 0.2) 40%,
  rgba(162, 215, 255, 0.2) 99%
);
```

### Opacity Utilities

```jsx
// Tailwind opacity syntax
<div className="bg-[#565452]/20">20% opacity border gray</div>
<div className="bg-[#FA773A]/80">80% opacity orange</div>
<div className="text-[#84d322]/50">50% opacity secondary green</div>
```

---

## Usage Examples

### Example 1: Creating a New Section Component

```jsx
// components/sections/ExampleSection.tsx
'use client'

import { motion } from 'framer-motion'

export default function ExampleSection() {
  const fadeVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  }

  return (
    <section className="w-full bg-white px-4 py-16 md:px-24 md:py-24">
      <div className="flex flex-col items-center justify-center gap-8">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-playfair text-center text-3xl font-bold text-[#10442a] md:text-5xl"
        >
          Section Heading
        </motion.h2>

        {/* Content Grid */}
        <div className="grid w-full max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
          {[1, 2, 3].map((item) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: item * 0.1 }}
              className="flex flex-col items-start justify-start rounded-md border border-[#565452]/20 bg-white p-6 transition-all duration-300 hover:shadow-lg"
            >
              <h3 className="font-satoshi mb-3 text-xl font-semibold text-[#10442a]">
                Card {item}
              </h3>
              <p className="font-inter text-sm leading-relaxed text-gray-600 md:text-base">
                Card description goes here
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <Button variant="fill" onClick={() => {}} className="mt-8">
          Learn More
        </Button>
      </div>
    </section>
  )
}
```

### Example 2: Using Colors and Typography

```jsx
<div className="bg-[linear-gradient(to_right,#FFAE8F33_0%,#C8D5FF33_40%,#A2D7FF33_99%)] px-4 py-12 md:px-24">
  {/* Primary heading */}
  <h1 className="font-playfair mb-4 text-4xl font-bold text-[#10442a] md:text-6xl">
    Main Title
  </h1>

  {/* Secondary text */}
  <p className="font-inter mb-8 text-base leading-relaxed text-gray-700 md:text-lg">
    Description paragraph with Inter font family.
  </p>

  {/* Accent element */}
  <span className="font-satoshi inline-block rounded-md bg-[#84d322] px-4 py-2 font-semibold text-[#10442a]">
    Accent Badge
  </span>

  {/* Button group */}
  <div className="mt-8 flex flex-col gap-4 sm:flex-row">
    <Button variant="fill">Primary Action</Button>
    <Button variant="outline">Secondary Action</Button>
  </div>
</div>
```

### Example 3: Responsive Layout Pattern

```jsx
<section className="w-full px-4 py-12 sm:px-8 md:px-16 md:py-24 lg:px-24">
  {/* Header */}
  <div className="mb-12 text-center md:mb-16">
    <h2 className="font-playfair mb-4 text-2xl font-bold text-[#10442a] sm:text-3xl md:text-4xl">
      Responsive Title
    </h2>
    <p className="font-inter mx-auto max-w-2xl text-sm text-gray-600 sm:text-base md:text-lg">
      Responsive description paragraph
    </p>
  </div>

  {/* Two column layout that stacks on mobile */}
  <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2">
    <div className="flex flex-col gap-4">
      <h3 className="font-satoshi text-xl font-semibold text-[#10442a] md:text-2xl">
        Column One
      </h3>
      <p className="font-inter text-base leading-relaxed text-gray-700">
        Content for column one
      </p>
    </div>

    <div className="flex flex-col gap-4">
      <h3 className="font-satoshi text-xl font-semibold text-[#10442a] md:text-2xl">
        Column Two
      </h3>
      <p className="font-inter text-base leading-relaxed text-gray-700">
        Content for column two
      </p>
    </div>
  </div>
</section>
```

---

## Additional Resources

### Files to Reference

- **Global Styles**: `app/global.css`
- **Tailwind Config**: `tailwind.config.ts`
- **Font Setup**: `lib/fonts.ts`
- **Layout**: `app/layout.tsx`
- **Main Component**: `components/LandingPage.tsx`
- **Navigation**: `components/TopNav.tsx`
- **Buttons**: `components/Button.tsx`, `components/IconButton.tsx`

### Key Sections

- **Hero Section**: `components/sections/HeroSection.tsx`
- **Features**: `components/sections/KeyProgramFeatures.tsx`
- **Testimonials**: `components/sections/Testimonial.tsx`
- **CTA**: `components/sections/CTASection.tsx`
- **Footer**: `components/Layout/Footer.tsx`

### Dependencies

```json
{
  "next": "latest",
  "react": "latest",
  "tailwindcss": "latest",
  "framer-motion": "^latest",
  "lucide-react": "latest"
}
```

---

## Best Practices

1. **Mobile First**: Always design mobile layouts first, then enhance for larger screens
2. **Consistency**: Use the defined color palette and typography throughout
3. **Spacing**: Use consistent gap values (`gap-4`, `gap-8`, `gap-12`)
4. **Animations**: Use Framer Motion with the standard transition config for smooth effects
5. **Accessibility**: Maintain proper contrast ratios and semantic HTML
6. **Performance**: Optimize images and lazy load components where needed
7. **Responsive**: Test on multiple screen sizes during development

---

## Notes for New Pages

When creating new pages following this style guide:

1. Import fonts in layout or component
2. Use the color palette hex values via Tailwind inline classes
3. Follow the responsive breakpoint patterns
4. Apply animations with Framer Motion for consistency
5. Use the Button and IconButton components
6. Maintain typography hierarchy with Playfair (headings), Inter (body), Satoshi (UI)
7. Keep padding and gap values consistent with existing sections
8. Test responsive behavior on sm, md, lg breakpoints

---

**Last Updated**: 2026-05-18  
**Version**: 1.0  
**Status**: Active
