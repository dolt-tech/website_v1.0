"use client"

import { useState } from "react"
import { ChevronDownIcon } from "lucide-react"

const faqs = [
  {
    question: "What is DOLT and how does it work?",
    answer:
      "DOLT is an AI-powered maintenance platform that combines IoT sensors, predictive analytics, and expert technicians to provide proactive maintenance services across Latin America. Our smart technology monitors equipment 24/7 and predicts issues before they become costly problems.",
  },
  {
    question: "Which countries does DOLT serve?",
    answer:
      "DOLT currently operates across major Latin American markets including Argentina, Brazil, Mexico, Colombia, and Chile. We're rapidly expanding to serve the entire LATAM region with localized support and expertise.",
  },
  {
    question: "What types of equipment can DOLT maintain?",
    answer:
      "Our platform supports a wide range of industrial and commercial equipment including HVAC systems, manufacturing machinery, electrical systems, elevators, and facility infrastructure. Our IoT sensors adapt to virtually any equipment type.",
  },
  {
    question: "How does predictive maintenance save money?",
    answer:
      "Predictive maintenance reduces costs by preventing unexpected breakdowns, extending equipment lifespan, optimizing maintenance schedules, and minimizing downtime. Studies show businesses save 20-40% on maintenance costs while improving operational efficiency.",
  },
  {
    question: "What makes DOLT different from traditional maintenance?",
    answer:
      "Unlike reactive maintenance that waits for failures, DOLT uses AI and IoT to predict issues weeks in advance. Our platform provides real-time monitoring, automated alerts, detailed analytics, and connects you with certified local technicians when needed.",
  },
  {
    question: "How quickly can DOLT be implemented?",
    answer:
      "Implementation typically takes 2-4 weeks depending on facility size and equipment complexity. Our team handles sensor installation, system configuration, and staff training to ensure a smooth transition to smart maintenance.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-orange-500 mb-6">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get answers to common questions about DOLT's smart maintenance solutions
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-orange-500/20 rounded-lg overflow-hidden transition-all duration-300 hover:border-orange-500/40 hover:shadow-lg hover:shadow-orange-500/10"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center bg-black/50 hover:bg-orange-500/5 transition-colors duration-300"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-semibold text-orange-500 pr-4">{faq.question}</span>
                <ChevronDownIcon
                  className={`w-5 h-5 text-orange-500 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-black/30 border-t border-orange-500/20">
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">Still have questions?</p>
          <button className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-black font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25">
            Contact Our Team
          </button>
        </div>
      </div>
    </section>
  )
}
