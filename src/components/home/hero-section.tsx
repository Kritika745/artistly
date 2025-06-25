import Link from "next/link"
import { Search, Star, Users, Calendar } from "lucide-react"

export function HeroSection() {
  return (
    <section className="hero-gradient py-20 ">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">

              <h1 className="text-5xl lg:text-5xl font-bold text-gray-900" style={{ lineHeight: "1.2" }}>
                Book Amazing
                <span className="block text-blue-600 ">Performing Artists</span>
                for Your Events
              </h1>
              <p className="text-md text-gray-600" style={{ lineHeight: "1.6" }}>
                Connect with India's most talented singers, dancers, DJs, and speakers. Make your celebrations
                unforgettable with professional entertainment.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/artists" style={{ textDecoration: "none" }}>
                <button className="btn btn-primary text-md flex items-center p-4 " >
                  <Search className="w-4 h-4" style={{ marginRight: "8px" }} />
                  Browse Artists
                </button>
              </Link>
              <Link href="/onboarding" style={{ textDecoration: "none" }}>
                <button className="btn btn-secondary text-md " >
                  Join as Artist
                </button>
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Users className="h-8 w-8" style={{ color: "#3b82f6" }} />
                </div>
                <div className="text-2xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600">Verified Artists</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Calendar className="h-8 w-8" style={{ color: "#3b82f6" }} />
                </div>
                <div className="text-2xl font-bold text-gray-900">1000+</div>
                <div className="text-sm text-gray-600">Events Booked</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Star className="h-8 w-8" style={{ color: "#3b82f6" }} />
                </div>
                <div className="text-2xl font-bold text-gray-900">4.8/5</div>
                <div className="text-sm text-gray-600">Average Rating</div>
              </div>
            </div>
          </div>

          <div style={{ position: "relative" }}>
            <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/home.jpg"
                alt="Performing artists on stage"
                className="w-full h-full object-cover"
              />
            </div>
            <div
              className="bg-white rounded-xl shadow-lg p-4 "
              style={{
                position: "absolute",
                bottom: "-24px",
                left: "-24px",
                maxWidth: "300px",
              }}
            >
              <div className="flex items-center space-x-4">
                <div
                  className="w-12 h-8 rounded-full flex items-center justify-center "
                  style={{ backgroundColor: "#3b82f6", height: "48px", width: "48px" }}
                >
                  <Star className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Trusted Platform</div>
                  <div className="text-sm text-gray-600">Verified artists & secure bookings</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
