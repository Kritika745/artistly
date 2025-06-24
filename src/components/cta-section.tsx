import Link from "next/link"
import { ArrowRight, Users, Shield } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 cta-gradient">
      <div className="container">
        <div className="text-center text-white">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Make Your Event Unforgettable?</h2>
          <p className="text-xl mb-8" style={{ maxWidth: "768px", margin: "0 auto 32px", opacity: "0.9" }}>
            Join thousands of satisfied event planners who trust Artistly.com for their entertainment needs
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/artists" style={{ textDecoration: "none" }}>
              <button
                className="flex items-center justify-center font-medium rounded-lg text-lg transition-all"
                style={{
                  backgroundColor: "white",
                  color: "#2563eb",
                  padding: "16px 32px",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Start Browsing Artists
                <ArrowRight className="w-5 h-5" style={{ marginLeft: "8px" }} />
              </button>
            </Link>
            <Link href="/onboarding" style={{ textDecoration: "none" }}>
              <button
                className="font-medium rounded-lg text-lg transition-all"
                style={{
                  backgroundColor: "transparent",
                  color: "white",
                  padding: "16px 32px",
                  border: "2px solid white",
                  cursor: "pointer",
                }}
              >
                Join as Artist
              </button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8" style={{ maxWidth: "512px", margin: "0 auto" }}>
            <div className="flex items-center justify-center space-x-2">
              <Users className="h-6 w-6" />
              <span>Verified Professional Artists</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Shield className="h-6 w-6" />
              <span>Secure Booking Process</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
