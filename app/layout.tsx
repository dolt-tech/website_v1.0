import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Suspense } from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "DOLT - Redefining Maintenance with Smart Technology",
  description: "Professional maintenance services powered by IoT and expert technicians for Latin America",
  generator: "Professional Web Development",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-black text-orange-500">
        <Suspense fallback={<div>Loading...</div>}>
          <div className="scroll-container">{children}</div>
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
