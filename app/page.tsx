"use client"

import { useEffect } from "react"
import Lenis from "@studio-freight/lenis"
import Hero from "@/components/hero"
import WhoAreWe from "@/components/whowarewe"
import SearchServices from "@/components/search-services"
import Features from "@/components/features"
import Testimonials from "@/components/testimonials"
import About from "@/components/about"
import FAQ from "@/components/faq"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      wheelMultiplier: 1,
      touchMultiplier: 2,
      orientation: "vertical",
      gestureOrientation: "vertical",
      infinite: false,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <main className="relative">
      <Hero />
      <div className="relative z-10 bg-black">
        <WhoAreWe />
        <SearchServices />
        <Features />
        <Testimonials />
        <About />
        <FAQ />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}
