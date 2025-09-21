"use client"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Brain, Wifi, MessageCircle, DollarSign } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "Predictive AI",
    description:
      "Advanced algorithms that predict failures before they occur, optimizing preventive maintenance and reducing costs.",
  },
  {
    icon: Wifi,
    title: "IoT Monitoring",
    description:
      "Smart sensors that monitor equipment 24/7 and send real-time alerts to prevent unexpected breakdowns.",
  },
  {
    icon: MessageCircle,
    title: "24/7 Support",
    description: "AI-powered chatbot and human experts available 24 hours to resolve any query or emergency.",
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    description: "Clear rates with no surprises. Know the exact cost before confirming any service or maintenance.",
  },
]

export default function Features() {
  return (
    <section className="py-20 px-6 gradient-bg">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-orange-500">
            Technology that <span className="text-orange-400">revolutionizes</span> maintenance
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We combine artificial intelligence, Internet of Things and human expertise to offer the best maintenance
            service in LATAM.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="glassmorphism border-orange-500/20 hover:border-orange-500/50 transition-all duration-300 h-full hover:shadow-lg hover:shadow-orange-500/10 group">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-orange-600 to-orange-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="text-xl font-semibold text-orange-500 mb-3 group-hover:text-orange-400 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
