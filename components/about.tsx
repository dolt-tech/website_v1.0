"use client"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

const founders = [
  {
    name: "María González",
    role: "CEO & Co-fundadora",
    bio: "Ex-directora de operaciones en TechCorp LATAM. MBA en Stanford.",
    image: "/professional-woman-ceo.png",
  },
  {
    name: "Carlos Rodríguez",
    role: "CTO & Co-fundador",
    bio: "Ingeniero en IA con 10+ años en Google y Microsoft. PhD en Machine Learning.",
    image: "/professional-cto-headshot.png",
  },
]

const roadmap = [
  { year: "2025", milestone: "Lanzamiento en Buenos Aires", status: "current" },
  { year: "2026", milestone: "Expansión a 5 ciudades LATAM", status: "future" },
  { year: "2027", milestone: "10,000+ usuarios activos", status: "future" },
]

export default function About() {
  return (
    <section id="nosotros" className="py-20 px-6 gradient-bg">
      <div className="max-w-6xl mx-auto">
        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-orange-400">
              Nuestra <span className="text-orange-500">Misión</span>
            </h2>
            <p className="text-lg text-orange-300/90 leading-relaxed mb-6">
              Democratizar el acceso a servicios de mantenimiento de calidad en LATAM, utilizando tecnología de
              vanguardia para conectar hogares y empresas con los mejores profesionales.
            </p>
            <h3 className="text-2xl font-bold mb-4 text-orange-500">Visión 2027</h3>
            <p className="text-lg text-orange-300/90 leading-relaxed">
              Ser la plataforma líder de mantenimiento inteligente en América Latina, transformando la industria con IA
              predictiva y creando miles de empleos dignos.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center"
          >
            <div className="w-full h-80 orange-gradient rounded-2xl flex items-center justify-center glassmorphism hover-lift">
              <div className="text-center">
                <div className="text-6xl font-bold text-black mb-2">10K+</div>
                <div className="text-xl text-black font-semibold">Servicios completados</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Founders */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-orange-400">
            Nuestros <span className="text-orange-500">Fundadores</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {founders.map((founder, index) => (
              <motion.div
                key={founder.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="glassmorphism hover-lift">
                  <CardContent className="p-6 text-center">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-2 border-orange-500/50">
                      <img
                        src={founder.image || "/placeholder.svg"}
                        alt={founder.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-orange-400 mb-2">{founder.name}</h3>
                    <p className="text-orange-500 font-semibold mb-3">{founder.role}</p>
                    <p className="text-orange-300/90 leading-relaxed">{founder.bio}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Roadmap */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-orange-400">
            Nuestro <span className="text-orange-500">Roadmap</span>
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            {roadmap.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                <Card
                  className={`glassmorphism hover-lift ${item.status === "current" ? "border-orange-500/70 orange-glow" : ""}`}
                >
                  <CardContent className="p-6 text-center min-w-[200px]">
                    <div
                      className={`text-3xl font-bold mb-2 ${item.status === "current" ? "text-orange-500" : "text-orange-400"}`}
                    >
                      {item.year}
                    </div>
                    <p className="text-orange-300 font-semibold">{item.milestone}</p>
                    {item.status === "current" && (
                      <div className="absolute -top-2 -right-2 w-4 h-4 bg-orange-500 rounded-full animate-pulse" />
                    )}
                  </CardContent>
                </Card>
                {index < roadmap.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-orange-500 to-orange-400" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
