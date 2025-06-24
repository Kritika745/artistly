"use client"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { X } from "lucide-react"
import artistsData from "@/data/artists.json"

export function ArtistFilters() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedLocations, setSelectedLocations] = useState<string[]>([])
  const [selectedPriceRanges, setSelectedPriceRanges] = useState<string[]>([])

  // Initialize filters from URL params
  useEffect(() => {
    const category = searchParams.get("category")
    const location = searchParams.get("location")
    const price = searchParams.get("price")

    if (category) setSelectedCategories([category])
    if (location) setSelectedLocations([location])
    if (price) setSelectedPriceRanges([price])
  }, [searchParams])

  // Update URL when filters change
  useEffect(() => {
    const params = new URLSearchParams()

    if (selectedCategories.length > 0) {
      params.set("category", selectedCategories[0])
    }
    if (selectedLocations.length > 0) {
      params.set("location", selectedLocations[0])
    }
    if (selectedPriceRanges.length > 0) {
      params.set("price", selectedPriceRanges[0])
    }

    const queryString = params.toString()
    const newUrl = queryString ? `/artists?${queryString}` : "/artists"
    router.push(newUrl, { scroll: false })
  }, [selectedCategories, selectedLocations, selectedPriceRanges, router])

  const clearAllFilters = () => {
    setSelectedCategories([])
    setSelectedLocations([])
    setSelectedPriceRanges([])
  }

  const hasActiveFilters =
    selectedCategories.length > 0 || selectedLocations.length > 0 || selectedPriceRanges.length > 0

  return (
    <div className="card sticky top-24">
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold">Filters</h2>
          {hasActiveFilters && (
            <button onClick={clearAllFilters} className="text-sm text-gray-500 hover:text-gray-700 flex items-center">
              <X className="h-4 w-4 mr-1" />
              Clear All
            </button>
          )}
        </div>

        <div className="space-y-6">
          {/* Categories */}
          <div>
            <h3 className="font-medium text-gray-900 mb-3">Category</h3>
            <div className="space-y-2">
              {artistsData.categories.map((category) => (
                <div key={category.id} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id={category.id}
                    checked={selectedCategories.includes(category.id)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelectedCategories([...selectedCategories, category.id])
                      } else {
                        setSelectedCategories(selectedCategories.filter((c) => c !== category.id))
                      }
                    }}
                    className="rounded border-gray-300"
                  />
                  <label htmlFor={category.id} className="text-sm cursor-pointer">
                    {category.icon} {category.name}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <hr className="border-gray-200" />

          {/* Locations */}
          <div>
            <h3 className="font-medium text-gray-900 mb-3">Location</h3>
            <div className="space-y-2 max-h-48 overflow-y-auto">
              {artistsData.locations.map((location) => (
                <div key={location} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id={location}
                    checked={selectedLocations.includes(location)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelectedLocations([...selectedLocations, location])
                      } else {
                        setSelectedLocations(selectedLocations.filter((l) => l !== location))
                      }
                    }}
                    className="rounded border-gray-300"
                  />
                  <label htmlFor={location} className="text-sm cursor-pointer">
                    {location}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <hr className="border-gray-200" />

          {/* Price Range */}
          <div>
            <h3 className="font-medium text-gray-900 mb-3">Price Range</h3>
            <div className="space-y-2">
              {artistsData.priceRanges.map((range) => (
                <div key={range} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id={range}
                    checked={selectedPriceRanges.includes(range)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelectedPriceRanges([...selectedPriceRanges, range])
                      } else {
                        setSelectedPriceRanges(selectedPriceRanges.filter((p) => p !== range))
                      }
                    }}
                    className="rounded border-gray-300"
                  />
                  <label htmlFor={range} className="text-sm cursor-pointer">
                    {range}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
