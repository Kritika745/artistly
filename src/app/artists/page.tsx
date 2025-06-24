import { Suspense } from "react"
import { ArtistListing } from "@/components/artist-listing"
import { ArtistFilters } from "@/components/artist-filters"
import { Skeleton } from "@/components/ui/skeleton"

export const metadata = {
  title: "Browse Artists - Artistly.com",
  description:
    "Discover talented performing artists for your events. Filter by category, location, and budget to find the perfect match.",
}

function ArtistListingSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="space-y-4">
          <Skeleton className="aspect-square w-full" />
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
        </div>
      ))}
    </div>
  )
}

export default function ArtistsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Browse Artists</h1>
          <p className="text-gray-600">Discover talented performers for your next event</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
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
