"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Search } from "lucide-react"

const services = [
  { title: "Plumbing", description: "Repairs and maintenance", image: "/services/plumbing.jpg" },
  { title: "Electrical", description: "Installations and repairs", image: "/services/electrical.jpg" },
  { title: "Smart Home", description: "IoT automation", image: "/services/smarthome.jpg" },
  { title: "Vehicles", description: "Automotive maintenance", image: "/services/vehicles.jpg" },
  { title: "IT Support", description: "Technical assistance", image: "/services/it.jpg" },
  { title: "Renovation", description: "Remodeling services", image: "/services/renovation.jpg" },
]

export default function SearchServices() {
  const [searchQuery, setSearchQuery] = useState("")

  // Duplicate services array to create seamless repeat
  const repeatedServices = [...services, ...services]

  return (
    <section className="py-20 px-6 gradient-bg relative min-h-screen">
      <div className="max-w-6xl mx-auto">

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-orange-400">
            Now what would you like to choose
          </h2>
        </motion.div>

        {/* Search Bar */}
        <div className="relative max-w-2xl mx-auto mb-12">
          <Input
            placeholder="Search services..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-4 pr-12 py-4 text-lg glassmorphism text-orange-400 placeholder:text-orange-300/70"
          />
          <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-orange-300 w-5 h-5" />
        </div>

        {/* Horizontal Scrolling Big Cards */}
        <div className="overflow-hidden">
          <div className="flex gap-6 animate-marquee-slow">
            {repeatedServices.map((service, index) => (
              <Card
                key={index}
                className="flex-shrink-0 w-60 cursor-pointer bg-white/10 backdrop-blur-md border border-transparent hover:border-orange-300 hover:shadow-[0_0_30px_rgba(255,165,0,0.5)] transition-all duration-300"
              >
                <CardContent className="p-0 flex flex-col items-center">
                  {/* Square Image */}
                  <div className="w-48 h-48 mt-4 overflow-hidden rounded-lg">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Title and Description */}
                  <div className="p-4 text-center">
                    <h3 className="font-semibold text-orange-400 text-lg md:text-xl">{service.title}</h3>
                    <p className="text-sm md:text-base text-orange-300/80">{service.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Tape animation at the bottom */}
      <div className="absolute bottom-0 left-0 w-full h-16 overflow-hidden">
        <div className="relative w-[200%] h-full animate-tape bg-orange-800 skew-x-[-15deg] flex items-center justify-center shadow-lg">
          <span className="text-white font-bold text-xl uppercase tracking-wider">
            D0LT COMING SOON
          </span>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        .animate-marquee-slow {
          display: flex;
          animation: marquee 60s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes tape {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-tape {
          animation: tape 15s linear infinite;
        }

        /* Hide scrollbar for all browsers */
        .overflow-hidden::-webkit-scrollbar {
          display: none;
        }
        .overflow-hidden {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}</style>
    </section>
  )
}
