"use client"
import { motion } from "framer-motion"
import { Brain, Wifi, MessageCircle, DollarSign } from "lucide-react"
import CardSwap, { Card } from '@/components/CardSwap';

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
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side: Header */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-left"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-orange-500">
              The Technology   <span className="text-orange-400">BEHIND</span><br></br> Our Service
            </h2>
            <p className="text-xl text-gray-300 max-w-md">
              By integrating artificial intelligence, IoT enabled monitoring, and skilled technicians, we deliver predictive, efficient, 
              and cost-saving maintenance solutions tailored for LATAM
            </p>
          </motion.div>

          {/* Right side: CardSwap Animation */}
          <div style={{ height: '350px', position: 'relative' }}>
            <CardSwap
              width={600}
              height={500}
              cardDistance={200}
              verticalDistance={100}
              delay={5000}
              pauseOnHover={false}
              skewAmount={6}
              easing="elastic"
            >
              {features.map((feature, index) => (
                <Card key={feature.title} className="glassmorphism border-orange-500/20">
                  <div className="p-6 text-center h-full flex flex-col justify-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-orange-600 to-orange-500 rounded-full flex items-center justify-center">
                      <feature.icon className="w-8 h-8 text-black" />
                    </div>
                    <h3 className="text-xl font-semibold text-orange-500 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </Card>
              ))}
            </CardSwap>
          </div>
        </div>
      </div>
    </section>
  )
}