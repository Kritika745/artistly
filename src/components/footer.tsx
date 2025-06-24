import Link from "next/link"
import { Music, Mail, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div style={{ gridColumn: "1 / span 2" }}>
            <div className="flex items-center space-x-2 mb-4">
              <Music className="h-8 w-8" style={{ color: "#3b82f6" }} />
              <span className="text-xl font-bold">Artistly.com</span>
            </div>
            <p className="text-gray-400 mb-4" style={{ maxWidth: "400px" }}>
              India's premier platform connecting event planners with talented performing artists. Book the perfect
              entertainment for your special occasions.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Mail className="h-4 w-4" />
                <span>hello@artistly.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Phone className="h-4 w-4" />
                <span>+91 98765 43210</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/artists"
                  className="text-gray-400 hover:text-white transition-all"
                  style={{ textDecoration: "none" }}
                >
                  Browse Artists
                </Link>
              </li>
              <li>
                <Link
                  href="/onboarding"
                  className="text-gray-400 hover:text-white transition-all"
                  style={{ textDecoration: "none" }}
                >
                  Join as Artist
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard"
                  className="text-gray-400 hover:text-white transition-all"
                  style={{ textDecoration: "none" }}
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-all"
                  style={{ textDecoration: "none" }}
                >
                  How it Works
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/artists?category=singer"
                  className="text-gray-400 hover:text-white transition-all"
                  style={{ textDecoration: "none" }}
                >
                  Singers
                </Link>
              </li>
              <li>
                <Link
                  href="/artists?category=dancer"
                  className="text-gray-400 hover:text-white transition-all"
                  style={{ textDecoration: "none" }}
                >
                  Dancers
                </Link>
              </li>
              <li>
                <Link
                  href="/artists?category=dj"
                  className="text-gray-400 hover:text-white transition-all"
                  style={{ textDecoration: "none" }}
                >
                  DJs
                </Link>
              </li>
              <li>
                <Link
                  href="/artists?category=speaker"
                  className="text-gray-400 hover:text-white transition-all"
                  style={{ textDecoration: "none" }}
                >
                  Speakers
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Artistly.com. All rights reserved. Built for demonstration purposes.</p>
        </div>
      </div>
    </footer>
  )
}
