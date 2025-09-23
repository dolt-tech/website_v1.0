"use client"

import Image from "next/image"
import { useScroll, useTransform, motion, useSpring } from "framer-motion"
import { useRef } from "react"

export default function Section() {
  const container = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  })

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001,
  })

  const y = useTransform(smoothProgress, [0, 1], ["-5vh", "5vh"])
  const scale = useTransform(smoothProgress, [0, 0.5, 1], [1.05, 1, 1.05])
  const opacity = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0.7, 1, 1, 0.7])

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-full">
        <motion.div style={{ y, scale, opacity }} className="relative w-full h-full will-change-transform">
          <Image
            src="/images/spiral-circles.jpg"
            fill
            alt=""
            priority
            style={{ objectFit: "cover" }}
          />
        </motion.div>
      </div>

      {/* Title */}
      <motion.h3
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="absolute top-12 right-6 text-white uppercase z-10 text-sm md:text-base lg:text-lg"
      >
        Anatomy of Possibility
      </motion.h3>

      {/* Paragraph */}
      <motion.p
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="absolute bottom-12 right-6 text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-5xl z-10"
      >
        Every section is a frame for your story. Shape it, remix it, and let your content spill into unexpected patterns
        that keep people scrolling.
      </motion.p>
    </div>
  )
}
