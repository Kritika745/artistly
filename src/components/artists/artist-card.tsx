import { Star, MapPin, Clock, MessageSquare } from "lucide-react"

interface Artist {
  id: number
  name: string
  category: string[]
  priceRange: string
  location: string
  bio: string
  languages: string[]
  image: string
  rating: number
  experience: string
}

interface ArtistCardProps {
  artist: Artist
  viewMode: "grid" | "list"
}

export function ArtistCard({ artist, viewMode }: ArtistCardProps) {
  if (viewMode === "list") {
    return (
      <div className="card hover:shadow-lg transition-all duration-300">
        <div className="p-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-48 aspect-square md:aspect-auto md:h-32 overflow-hidden rounded-lg">
              <img src={artist.image || "/placeholder.svg"} alt={artist.name} className="w-full h-full object-cover" />
            </div>

            <div className="flex-1 space-y-3">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{artist.name}</h3>
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span>{artist.rating}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{artist.experience}</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-semibold text-blue-600">{artist.priceRange}</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {artist.category.map((cat) => (
                  <span key={cat} className="badge">
                    {cat}
                  </span>
                ))}
              </div>

              <div className="flex items-center text-gray-600">
                <MapPin className="h-4 w-4 mr-1" />
                <span className="text-sm">{artist.location}</span>
              </div>

              <p className="text-gray-600 text-sm line-clamp-2">{artist.bio}</p>

              <div className="flex items-center justify-between pt-2">
                <div className="text-xs text-gray-500">
                  Languages: {artist.languages.slice(0, 3).join(", ")}
                  {artist.languages.length > 3 && ` +${artist.languages.length - 3} more`}
                </div>
                <button className="btn btn-primary text-sm px-4 py-2 flex items-center">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Get Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="card group hover:shadow-xl transition-all duration-300 overflow-hidden">
      <div className="aspect-square overflow-hidden">
        <img
          src={artist.image || "/placeholder.svg"}
          alt={artist.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-semibold text-gray-900">{artist.name}</h3>
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
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

        <div className="flex items-center text-gray-600 mb-2">
          <MapPin className="h-4 w-4 mr-1" />
          <span className="text-sm">{artist.location}</span>
        </div>

        <div className="flex items-center text-gray-600 mb-3">
          <Clock className="h-4 w-4 mr-1" />
          <span className="text-sm">{artist.experience}</span>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{artist.bio}</p>

        <div className="flex items-center justify-between">
          <span className="font-semibold text-blue-600">{artist.priceRange}</span>
          <button className="btn btn-primary text-sm px-4 py-2 flex items-center">
            <MessageSquare className="h-4 w-4 mr-2" />
            Get Quote
          </button>
        </div>
      </div>
    </div>
  )
}
