"use client"

import { useState, useMemo } from "react"
import { useSearchParams } from "next/navigation"
import { ArtistCard } from "./artist-card"
import { Grid, List, Search, SlidersHorizontal } from "lucide-react"
import artistsData from "@/data/artists.json"

type ViewMode = "grid" | "list"
type SortOption = "name" | "rating" | "price"

export function ArtistListing() {
  const searchParams = useSearchParams()
  const [viewMode, setViewMode] = useState<ViewMode>("grid")
  const [sortBy, setSortBy] = useState<SortOption>("rating")
  const [searchTerm, setSearchTerm] = useState("")

  // Get filter parameters from URL
  const categoryFilter = searchParams.get("category")
  const locationFilter = searchParams.get("location")
  const priceFilter = searchParams.get("price")

  // Filter and sort artists
  const processedArtists = useMemo(() => {
    let filtered = [...artistsData.artists]

    // Apply search
    if (searchTerm) {
      filtered = filtered.filter(
        (artist) =>
          artist.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          artist.bio.toLowerCase().includes(searchTerm.toLowerCase()) ||
          artist.category.some((cat) => cat.toLowerCase().includes(searchTerm.toLowerCase())),
      )
    }

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
          const aPrice = Number.parseInt(a.priceRange.replace(/[^\d]/g, ""))
          const bPrice = Number.parseInt(b.priceRange.replace(/[^\d]/g, ""))
          return aPrice - bPrice
        default:
          return 0
      }
    })

    return filtered
  }, [categoryFilter, locationFilter, priceFilter, sortBy, searchTerm])

  return (
    <div className="space-y-6">
      {/* Search and Controls */}
      <div className="card p-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center  mb-4">
          <div className="flex-1 max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search artists..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="input-field ml-10 w-full"
              />
            </div>
          </div>

          <div className="flex items-center gap-2 ">
            <select className="input-field" value={sortBy} onChange={(e) => setSortBy(e.target.value as SortOption)}>
              <option value="rating">Sort by Rating</option>
              <option value="name">Sort by Name</option>
              <option value="price">Sort by Price</option>
            </select>

            <div className="flex border ">
              <button
                className={`px-1 py-1 ${viewMode === "grid" ? "bg-blue-600 text-white" : "bg-white text-gray-600"}`}
                onClick={() => setViewMode("grid")}
              >
                <Grid className="h-6 w-6" />
              </button>
              <button
                className={`px-1 py-1 ${viewMode === "list" ? "bg-blue-600 text-white" : "bg-white text-gray-600"}`}
                onClick={() => setViewMode("list")}
              >
                <List className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>

        <div className="text-sm text-gray-600">
          Showing {processedArtists.length} of {artistsData.artists.length} artists
        </div>
      </div>

      {/* Artists Grid/List */}
      {processedArtists.length === 0 ? (
        <div className="card p-12 text-center">
          <SlidersHorizontal className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No artists found</h3>
          <p className="text-gray-600">Try adjusting your search or filters.</p>
        </div>
      ) : (
        <div className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" : "space-y-4"}>
          {processedArtists.map((artist) => (
            <ArtistCard key={artist.id} artist={artist} viewMode={viewMode} />
          ))}
        </div>
      )}
    </div>
  )
}
