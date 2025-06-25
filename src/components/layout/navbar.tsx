"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Music } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Browse Artists", href: "/artists" },
    { name: "Join as Artist", href: "/onboarding" },
    { name: "Dashboard", href: "/dashboard" },
  ]

  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="container">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Music className="h-8 w-8" style={{ color: "#3b82f6" }} />
              <span className="text-xl font-bold text-gray-900">Artistly.com</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-blue-600 transition-all px-3 py-2"
                style={{ textDecoration: "none" }}
              >
                {item.name}
              </Link>
            ))}
            <button className="btn btn-primary">Get Started</button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-gray-900">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white border-b">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-gray-600 hover:text-blue-600 transition-all"
                  onClick={() => setIsOpen(false)}
                  style={{ textDecoration: "none" }}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2">
                <button className="btn btn-primary w-full">Get Started</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
