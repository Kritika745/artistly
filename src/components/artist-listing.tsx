"use client"

import { useState, useEffect, useMemo } from "react"
import { useSearchParams } from "next/navigation"
import { ArtistCard } from "./artist-card"
import { Grid, List, SlidersHorizontal } from "lucide-react"
import artistsData from "@/data/artists.json"

type ViewMode = "grid" | "list"
type SortOption = "name" | "rating" | "price"

export function ArtistListing() {
  const searchParams = useSearchParams()
  const [viewMode, setViewMode] = useState<ViewMode>("grid")
  const [sortBy, setSortBy] = useState<SortOption>("rating")
  const [filteredArtists, setFilteredArtists] = useState(artistsData.artists)

  // Get filter parameters from URL
  const categoryFilter = searchParams.get("category")
  const locationFilter = searchParams.get("location")
  const priceFilter = searchParams.get("price")

  // Filter and sort artists
  const processedArtists = useMemo(() => {
    let filtered = [...artistsData.artists]

    // Apply filters
    if (categoryFilter) {
      filtered = filtered.filter((artist) =>
        artist.category.some((cat) => cat.toLowerCase().includes(categoryFilter.toLowerCase())),
      )
    }

    if (locationFilter) {
      filtered = filtered.filter((artist) => artist.location.toLowerCase().includes(locationFilter.toLowerCase()))
    }

    if (priceFilter) {
      filtered = filtered.filter((artist) => artist.priceRange === priceFilter)
    }

    // Apply sorting
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "name":
          return a.name.localeCompare(b.name)
        case "rating":
          return b.rating - a.rating
        case "price":
          // Simple price comparison based on first number in range
          const aPrice = Number.parseInt(a.priceRange.replace(/[^\d]/g, ""))
          const bPrice = Number.parseInt(b.priceRange.replace(/[^\d]/g, ""))
          return aPrice - bPrice
        default:
          return 0
      }
    })

    return filtered
  }, [categoryFilter, locationFilter, priceFilter, sortBy])

  useEffect(() => {
    setFilteredArtists(processedArtists)
  }, [processedArtists])

  return (
    <div className="space-y-6">
      {/* Header with controls */}
      <div className="card p-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <p className="text-gray-600">
              Showing {filteredArtists.length} of {artistsData.artists.length} artists
            </p>
          </div>

          <div className="flex items-center gap-4">
            <select
              className="input-field w-40"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
            >
              <option value="rating">Sort by Rating</option>
              <option value="name">Sort by Name</option>
              <option value="price">Sort by Price</option>
            </select>

            <div className="flex border rounded-lg">
              <button
                className={`px-3 py-2 rounded-l-lg ${viewMode === "grid" ? "btn-primary" : "btn-secondary"}`}
                onClick={() => setViewMode("grid")}
              >
                <Grid className="h-4 w-4" />
              </button>
              <button
                className={`px-3 py-2 rounded-r-lg ${viewMode === "list" ? "btn-primary" : "btn-secondary"}`}
                onClick={() => setViewMode("list")}
              >
                <List className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Artists grid/list */}
      {filteredArtists.length === 0 ? (
        <div className="text-center py-12 card">
          <SlidersHorizontal className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No artists found</h3>
          <p className="text-gray-600">Try adjusting your filters to see more results.</p>
        </div>
      ) : (
        <div className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" : "space-y-4"}>
          {filteredArtists.map((artist) => (
            <ArtistCard key={artist.id} artist={artist} viewMode={viewMode} />
          ))}
        </div>
      )}
    </div>
  )
}
