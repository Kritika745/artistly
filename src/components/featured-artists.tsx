import Link from "next/link"
import { Star, MapPin } from "lucide-react"
import artistsData from "@/data/artists.json"

export function FeaturedArtists() {
  const featuredArtists = artistsData.artists.slice(0, 3)

  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Featured Artists</h2>
          <p className="text-xl text-gray-600" style={{ maxWidth: "768px", margin: "0 auto" }}>
            Meet some of our top-rated performers who have made countless events memorable
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {featuredArtists.map((artist) => (
            <div key={artist.id} className="card transition-all">
              <div className="aspect-square overflow-hidden">
                <img
                  src={artist.image || "/placeholder.svg"}
                  alt={artist.name}
                  className="w-full h-full object-cover hover:scale-105 transition-all"
                />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold text-gray-900">{artist.name}</h3>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4" style={{ color: "#fbbf24", fill: "#fbbf24" }} />
                    <span className="text-sm font-medium">{artist.rating}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-3">
                  {artist.category.map((cat) => (
                    <span key={cat} className="badge">
                      {cat}
                    </span>
                  ))}
                </div>

                <div className="flex items-center text-gray-600 mb-3">
                  <MapPin className="h-4 w-4" style={{ marginRight: "4px" }} />
                  <span className="text-sm">{artist.location}</span>
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{artist.bio}</p>

                <div className="flex items-center justify-between">
                  <span className="font-semibold" style={{ color: "#3b82f6" }}>
                    {artist.priceRange}
                  </span>
                  <button className="btn btn-primary text-sm" style={{ padding: "8px 16px" }}>
                    Ask for Quote
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/artists" style={{ textDecoration: "none" }}>
            <button className="btn btn-primary text-lg" style={{ padding: "16px 32px" }}>
              View All Artists
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
