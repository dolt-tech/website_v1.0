"use client"

import Link from "next/link"
import { useEffect, useRef } from "react"

export default function Footer() {
  const footerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!footerRef.current) return

      const scrolled = window.scrollY
      const rate = scrolled * -0.5

      footerRef.current.style.transform = `translate3d(0, ${rate}px, 0)`
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="relative h-screen overflow-hidden">
      <div
        ref={footerRef}
        className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-gray-900"
        style={{ willChange: "transform" }}
      />

      <div className="sticky top-0 h-screen flex flex-col relative z-10">
        {/* Top section with links */}
        <div className="flex-1 flex justify-between items-start p-8 lg:p-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16">
            <div className="space-y-4">
              <h3 className="text-gray-400 text-sm font-semibold uppercase tracking-wider">Services</h3>
              <div className="space-y-2">
                <Link
                  href="#services"
                  className="block text-gray-300 hover:text-white transition-colors duration-300 text-sm"
                >
                  Maintenance
                </Link>
                <Link
                  href="#services"
                  className="block text-gray-300 hover:text-white transition-colors duration-300 text-sm"
                >
                  IoT Monitoring
                </Link>
                <Link
                  href="#services"
                  className="block text-gray-300 hover:text-white transition-colors duration-300 text-sm"
                >
                  Predictive AI
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-gray-400 text-sm font-semibold uppercase tracking-wider">Company</h3>
              <div className="space-y-2">
                <Link
                  href="#about"
                  className="block text-gray-300 hover:text-white transition-colors duration-300 text-sm"
                >
                  About
                </Link>
                <Link
                  href="#contact"
                  className="block text-gray-300 hover:text-white transition-colors duration-300 text-sm"
                >
                  Contact
                </Link>
                <Link
                  href="/careers"
                  className="block text-gray-300 hover:text-white transition-colors duration-300 text-sm"
                >
                  Careers
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-gray-400 text-sm font-semibold uppercase tracking-wider">Legal</h3>
              <div className="space-y-2">
                <Link
                  href="/privacy"
                  className="block text-gray-300 hover:text-white transition-colors duration-300 text-sm"
                >
                  Privacy
                </Link>
                <Link
                  href="/terms"
                  className="block text-gray-300 hover:text-white transition-colors duration-300 text-sm"
                >
                  Terms
                </Link>
              </div>
            </div>
          </div>

          <div className="text-right">
            <p className="text-gray-300 text-sm mb-2">contact@dolt.com</p>
            <p className="text-gray-500 text-xs">©2025 DOLT. All rights reserved.</p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 flex flex-col items-start justify-end pb-4 pl-8 lg:pl-16">
          <div className="text-left">
            <h1 className="text-[20vw] md:text-[15vw] lg:text-[12vw] leading-none text-white font-bold tracking-tighter mb-2">
              DOLT
            </h1>
            <h4 className="text-gray-400 text-lg md:text-xl lg:text-2xl font-medium tracking-wide mb-0">DO IT DONE</h4>
          </div>
        </div>
      </div>
    </div>
  )
}
