"use client"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Ana Martínez",
    role: "Propietaria de hogar",
    content: "DOLT predijo la falla de mi calentador antes de que se rompiera. El servicio fue rápido y profesional.",
    rating: 5,
    image: "/happy-woman-customer.png",
  },
  {
    name: "Roberto Silva",
    role: "Gerente de Oficina",
    content: "Desde que usamos DOLT, nuestros costos de mantenimiento se redujeron 40%. La IA realmente funciona.",
    rating: 5,
    image: "/professional-man-manager.jpg",
  },
  {
    name: "Carmen López",
    role: "Dueña de restaurante",
    content: "El monitoreo IoT de nuestros equipos de cocina nos ha ahorrado miles de dólares en reparaciones.",
    rating: 5,
    image: "/restaurant-owner-woman.png",
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 px-6 gradient-bg">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Lo que dicen nuestros <span className="text-emerald-400">clientes</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Miles de hogares y empresas ya confían en DOLT para sus necesidades de mantenimiento.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="glassmorphism border-white/20 hover:border-blue-400/50 transition-all duration-300 h-full">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-white">{testimonial.name}</h4>
                      <p className="text-sm text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
