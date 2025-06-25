import { Suspense } from "react"
import { ArtistListing } from "@/components/artists/artist-listing"
import { ArtistFilters } from "@/components/artists/artist-filters"

export const metadata = {
  title: "Browse Artists - Artistly.com",
  description:
    "Discover talented performing artists for your events. Filter by category, location, and budget to find the perfect match.",
}

function ArtistListingSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="card p-6 space-y-4">
          <div className="aspect-square bg-gray-200 rounded-lg"></div>
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
        </div>
      ))}
    </div>
  )
}

export default function ArtistsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Header */}
      <div className="bg-white border-b">
        <div className="container py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Browse Artists</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover talented performers for your next event. Filter by category, location, and budget to find your
              perfect match.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <ArtistFilters />
          </div>
          <div className="lg:col-span-3">
            <Suspense fallback={<ArtistListingSkeleton />}>
              <ArtistListing />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  )
}
