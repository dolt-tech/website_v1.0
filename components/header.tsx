"use client"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

interface HeaderProps {
  startAtBottom?: boolean
}

export default function Header({ startAtBottom = false }: HeaderProps) 
 {
  const [language, setLanguage] = useState("en")
  const [isScrolled, setIsScrolled] = useState(false)

  const content = {
    en: {
      services: "Services",
      about: "About",
      contact: "Contact",
    },
    es: {
      services: "Servicios",
      about: "Nosotros",
      contact: "Contacto",
    },
  }

const t = content[language as "en" | "es"];

 const shouldAnimate = !startAtBottom;

useEffect(() => {
  if (!shouldAnimate) return;

  let ticking = false;

  const handleScroll = () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const scrollPosition = window.scrollY;
        const heroHeight = window.innerHeight;
        setIsScrolled(scrollPosition > heroHeight * 0.1);
        ticking = false;
      });
      ticking = true;
    }
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  return () => window.removeEventListener("scroll", handleScroll);
}, [shouldAnimate]);

  return (
 <header
  className={`fixed left-1/2 transform -translate-x-1/2 z-50 transition-all duration-700 ease-out ${
    startAtBottom ? "bottom-6 opacity-100 translate-y-0" : `${isScrolled ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8 pointer-events-none"} top-6`
  }`}
  style={{ willChange: "transform, opacity" }}
>


      <div className="bg-black/20 backdrop-blur-md border border-orange-500/20 rounded-full px-8 py-4 shadow-2xl shadow-orange-500/10">
        <div className="flex justify-between items-center gap-8">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/dolt-logo.png"
              alt="DOLT Logo"
              width={80}
              height={30}
              className="h-8 w-auto rounded-lg"
              priority
            />
          </Link>
          <nav className="flex gap-6 items-center">
            <Link
              href="#servicios"
              className="text-orange-400 hover:text-orange-300 transition-all duration-300 hover:scale-105 text-sm font-medium"
            >
              {t.services}
            </Link>
            <Link
              href="#nosotros"
              className="text-orange-400 hover:text-orange-300 transition-all duration-300 hover:scale-105 text-sm font-medium"
            >
              {t.about}
            </Link>
            <Link
              href="#contacto"
              className="text-orange-400 hover:text-orange-300 transition-all duration-300 hover:scale-105 text-sm font-medium"
            >
              {t.contact}
            </Link>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setLanguage(language === "es" ? "en" : "es")}
              className="border-orange-500/50 text-orange-400 hover:bg-orange-500 hover:text-black transition-all duration-300 rounded-full px-4 py-1 text-xs"
            >
              {language === "en" ? "ES" : "EN"}
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}
