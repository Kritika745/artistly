import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Artistly.com - Premier Performing Artist Booking Platform",
  description:
    "Connect with talented performing artists for your events. Browse singers, dancers, DJs, and speakers. Book the perfect artist for your celebration.",
  keywords: "artist booking, event planning, performers, singers, dancers, DJs, speakers, entertainment",
  authors: [{ name: "Artistly Team" }],
  openGraph: {
    title: "Artistly.com - Premier Performing Artist Booking Platform",
    description: "Connect with talented performing artists for your events.",
    type: "website",
    locale: "en_IN",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen ">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
