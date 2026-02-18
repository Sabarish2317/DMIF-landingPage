"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative w-full ">
      <div className="relative  overflow-hidden bg-linear-to-r from-[#FD4F0C] via-[#ff5a1f] to-[#FD4F0C] text-white">

        {/* Background watermark */}
     <div className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none">
  <h1 className="text-[90px] sm:text-[140px] md:text-[200px] font-bold opacity-5 select-none leading-none">
    DMIF
  </h1>
</div>


        <div className="relative z-10 py-14 px-6 md:px-14">

          {/* Top Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">

            {/* Logo Section */}
            <div>
              <div className="flex items-center gap-3">
                <Image
                  src="/icons/logs.webp"  // replace with your logo path
                  alt="DMIF Logo"
                  width={50}
                  height={50}
                />
                <h2 className="text-xl font-semibold">DMIF™</h2>
              </div>
            </div>

            {/* Product */}
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-sm opacity-90">
                <li>
                  <Link href="#">Changelog</Link>
                </li>
                <li>
                  <Link href="#">Documentation</Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm opacity-90">
                <li>
                  <Link href="#">About</Link>
                </li>
                <li>
                  <Link href="#">Careers</Link>
                </li>
                <li>
                  <Link href="#">Blog</Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-sm opacity-90">
                <li>
                  <Link href="#">Github</Link>
                </li>
                <li>
                  <Link href="#">Discord</Link>
                </li>
                <li>
                  <Link href="#">Twitter</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="mt-12 border-t border-white/30 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs opacity-80">

            <p>© 2026. All rights reserved.</p>

            <div className="flex gap-6">
              <Link href="#">Privacy Policy</Link>
              <Link href="#">Terms of service</Link>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}
