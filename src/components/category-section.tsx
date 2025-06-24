import Link from "next/link"

const categories = [
  {
    id: "singer",
    name: "Singers",
    icon: "🎤",
    description: "Professional vocalists for all genres",
    count: "150+ Artists",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "dancer",
    name: "Dancers",
    icon: "💃",
    description: "Classical, contemporary & folk dancers",
    count: "120+ Artists",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "dj",
    name: "DJs",
    icon: "🎧",
    description: "Wedding & party DJs with latest equipment",
    count: "80+ Artists",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "speaker",
    name: "Speakers",
    icon: "🎙️",
    description: "Motivational & corporate speakers",
    count: "60+ Artists",
    image: "/placeholder.svg?height=300&width=400",
  },
]

export function CategorySection() {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Explore Artist Categories</h2>
          <p className="text-xl text-gray-600" style={{ maxWidth: "768px", margin: "0 auto" }}>
            Find the perfect entertainment for your event from our diverse range of talented performers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <div key={category.id} className="card transition-all">
              <div className="aspect-video overflow-hidden">
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  className="w-full h-full object-cover hover:scale-105 transition-all"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <span style={{ fontSize: "24px" }}>{category.icon}</span>
                  <h3 className="text-xl font-semibold text-gray-900">{category.name}</h3>
                </div>
                <p className="text-gray-600 mb-3">{category.description}</p>
                <p className="text-sm font-medium mb-4" style={{ color: "#3b82f6" }}>
                  {category.count}
                </p>
                <Link href={`/artists?category=${category.id}`} style={{ textDecoration: "none" }}>
                  <button className="btn btn-secondary w-full">Browse {category.name}</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
