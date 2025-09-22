"use client"
import Image from "next/image"
import { useScroll, useTransform, motion, useSpring } from "framer-motion"
import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import Header from "./header"

type Locale = "en" | "es" | "fr" | "de" | "pt"

interface Translation {
  title: string
  titleHighlight1: string
  titleHighlight2: string
  subtitle: string
  bookService: string
  requestDemo: string
  learnMore: string
}

export default function Hero() {
  const container = useRef<HTMLDivElement>(null)
  const [language, setLanguage] = useState<Locale>("en")

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  })

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  const y = useTransform(smoothProgress, [0, 1], ["0vh", "30vh"])
  const opacity = useTransform(smoothProgress, [0, 0.5, 1], [1, 0.8, 0.3])
  const scale = useTransform(smoothProgress, [0, 1], [1, 1.1])

  const content: Record<Locale, Translation> = {
    en: {
      title: "Redefining maintenance with smart",
      titleHighlight1: "Technology",
      titleHighlight2: "IoT",
      subtitle:
        "Professional maintenance services for homes and businesses in Latin America. Predictive technology, IoT monitoring and 24/7 support by expert technicians.",
      bookService: "Book a Service",
      requestDemo: "Request Demo",
      learnMore: "Learn More",
    },
    es: {
      title: "Redefiniendo el mantenimiento con",
      titleHighlight1: "Tecnología",
      titleHighlight2: "IoT",
      subtitle:
        "Servicios de mantenimiento profesional para hogares y empresas en LATAM. Tecnología predictiva, monitoreo IoT y soporte 24/7 con técnicos expertos.",
      bookService: "Reservar Servicio",
      requestDemo: "Solicitar Demo",
      learnMore: "Saber Más",
    },
    fr: {
      title: "Redéfinir la maintenance avec la",
      titleHighlight1: "Technologie",
      titleHighlight2: "IoT",
      subtitle:
        "Services de maintenance professionnelle pour maisons et entreprises en Amérique latine. Technologie prédictive, surveillance IoT et assistance 24/7 par des techniciens experts.",
      bookService: "Réserver un Service",
      requestDemo: "Demander Démo",
      learnMore: "En savoir plus",
    },
    de: {
      title: "Wartung neu definieren mit",
      titleHighlight1: "Technologie",
      titleHighlight2: "IoT",
      subtitle:
        "Professionelle Wartungsdienste für Häuser und Unternehmen in Lateinamerika. Predictive Technologie, IoT-Überwachung und 24/7 Unterstützung durch Experten.",
      bookService: "Service Buchen",
      requestDemo: "Demo Anfordern",
      learnMore: "Mehr Erfahren",
    },
    pt: {
      title: "Redefinindo manutenção com",
      titleHighlight1: "Tecnologia",
      titleHighlight2: "IoT",
      subtitle:
        "Serviços profissionais de manutenção para residências e empresas na América Latina. Tecnologia preditiva, monitoramento IoT e suporte 24/7 com técnicos especializados.",
      bookService: "Agendar Serviço",
      requestDemo: "Solicitar Demo",
      learnMore: "Saiba Mais",
    },
  }

  const t = content[language]

  return (
    <div ref={container} className="relative h-screen overflow-hidden">
      

      {/* Top-left Logo */}
      <div className="absolute top-6 left-6 z-50">
        <Image src="/logo/C8_Logo.png" alt="Logo" width={48} height={48} />
      </div>

      {/* Top-right controls */}
      <div className="absolute top-6 right-6 z-50 flex items-center gap-4">
        {/* Language dropdown styled like the image */}
        <div className="relative">
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value as Locale)}
            className="appearance-none bg-transparent text-white px-3 py-1 font-medium cursor-pointer focus:outline-none border-r border-white/30 pr-6"
          >
            <option value="en">EN</option>
            <option value="es">ES</option>
            <option value="fr">FR</option>
            <option value="de">DE</option>
            <option value="pt">PT</option>
          </select>
          <div className="pointer-events-none absolute top-1/2 right-1 transform -translate-y-1/2 text-white text-xs">
            ▼
          </div>
        </div>

        {/* Login and Signup buttons styled like the image */}
        <button className="text-white font-medium hover:text-orange-300 transition-colors text-sm">
          Login
        </button>

        <Button
          size="sm"
          className="bg-white hover:bg-gray-100 text-black px-4 py-1 font-medium rounded-full text-sm"
        >
          Sign Up
        </Button>
      </div>

      <motion.div style={{ y, opacity, scale }} className="relative h-full will-change-transform">
        <Image
          src="/images/argentina-mountains.jpg"
          fill
          alt="Argentina mountain landscape"
          style={{ objectFit: "cover" }}
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-orange-900/20" />

        {/* Centered Glassmorphism Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="absolute inset-0 flex items-center justify-center z-10"
        >
          <div className="text-center max-w-4xl px-6 md:px-12 
                          bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 p-8 md:p-12
                          shadow-lg">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-orange-500"
            >
              {t.title} <span className="text-orange-300">{t.titleHighlight1}</span>,{" "}
              <span className="text-orange-400">{t.titleHighlight2}</span> and expert technicians
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-lg md:text-xl leading-relaxed mb-8 text-orange-200"
            >
              {t.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                size="lg"
                className="bg-orange-600 hover:bg-orange-700 text-black px-8 py-3 font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25"
              >
                {t.bookService}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black px-8 py-3 bg-transparent font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25"
              >
                {t.requestDemo}
              </Button>
              <Button
                size="lg"
                variant="secondary"
                className="bg-black border-2 border-orange-500 hover:bg-orange-500 hover:text-black text-orange-500 px-8 py-3 font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25"
              >
                {t.learnMore}
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
      <Header startAtBottom />
    </div>
  )
}