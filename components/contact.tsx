"use client"
import { useState } from "react"
import type React from "react"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Contact form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section id="contacto" className="py-20 px-6 bg-slate-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Listo para <span className="text-blue-400">comenzar</span>?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Contáctanos hoy y descubre cómo DOLT puede transformar el mantenimiento de tu hogar o empresa.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="glassmorphism border-white/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Envíanos un mensaje</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="contact-name" className="text-white">
                      Nombre
                    </Label>
                    <Input
                      id="contact-name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                      placeholder="Tu nombre completo"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="contact-email" className="text-white">
                      Email
                    </Label>
                    <Input
                      id="contact-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                      placeholder="tu@email.com"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="contact-message" className="text-white">
                      Mensaje
                    </Label>
                    <Textarea
                      id="contact-message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                      placeholder="Cuéntanos cómo podemos ayudarte..."
                      rows={4}
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white font-semibold py-3"
                  >
                    Enviar mensaje
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <Card className="glassmorphism border-white/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Información de contacto</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="w-6 h-6 text-blue-400 mr-4" />
                    <div>
                      <p className="text-white font-semibold">Email</p>
                      <p className="text-gray-300">contact@dolt.com</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-6 h-6 text-emerald-400 mr-4" />
                    <div>
                      <p className="text-white font-semibold">Teléfono</p>
                      <p className="text-gray-300">+54 11 1234-5678</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-6 h-6 text-blue-400 mr-4" />
                    <div>
                      <p className="text-white font-semibold">Oficina</p>
                      <p className="text-gray-300">Buenos Aires, Argentina</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <Card className="glassmorphism border-white/20">
              <CardContent className="p-0">
                <div className="h-64 bg-gradient-to-br from-blue-500/20 to-emerald-500/20 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                    <p className="text-white font-semibold">Buenos Aires HQ</p>
                    <p className="text-gray-300">Mapa interactivo próximamente</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
