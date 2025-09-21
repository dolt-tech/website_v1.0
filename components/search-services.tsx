"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Search, Wrench, Zap, Home, Car, Laptop, Paintbrush } from "lucide-react"

const services = [
  { icon: Wrench, title: "Plomería", description: "Reparaciones y mantenimiento" },
  { icon: Zap, title: "Eléctrico", description: "Instalaciones y reparaciones" },
  { icon: Home, title: "Hogar Inteligente", description: "Automatización IoT" },
  { icon: Car, title: "Vehículos", description: "Mantenimiento automotriz" },
  { icon: Laptop, title: "IT", description: "Soporte técnico" },
  { icon: Paintbrush, title: "Renovación", description: "Remodelaciones" },
]

export default function SearchServices() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <section className="py-20 px-6 gradient-bg">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-orange-400">¿Qué servicio necesitas hoy?</h2>
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-orange-300 w-5 h-5" />
            <Input
              placeholder="Buscar servicios de mantenimiento..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 py-4 text-lg glassmorphism text-orange-400 placeholder:text-orange-300/70"
            />
          </div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="glassmorphism hover-lift cursor-pointer">
                <CardContent className="p-6 text-center">
                  <service.icon className="w-8 h-8 mx-auto mb-3 text-orange-500" />
                  <h3 className="font-semibold text-orange-400 mb-1">{service.title}</h3>
                  <p className="text-sm text-orange-300/80">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
