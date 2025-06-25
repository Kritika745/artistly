"use client"

import { useState } from "react"
import {
  Users,
  Calendar,
  DollarSign,
  TrendingUp,
  Search,
  Eye,
  MessageSquare,
  CheckCircle,
  XCircle,
  Star,
} from "lucide-react"
import artistsData from "@/data/artists.json"

// Mock booking requests data
const mockBookingRequests = [
  {
    id: 1,
    artistName: "Sarah Johnson",
    eventType: "Wedding",
    clientName: "Rahul Sharma",
    eventDate: "2024-07-15",
    location: "Mumbai, Maharashtra",
    status: "pending",
    budget: "₹75,000",
    requestDate: "2024-06-20",
  },
  {
    id: 2,
    artistName: "Rajesh Kumar",
    eventType: "Corporate Event",
    clientName: "Tech Solutions Pvt Ltd",
    eventDate: "2024-07-22",
    location: "Delhi, NCR",
    status: "confirmed",
    budget: "₹50,000",
    requestDate: "2024-06-18",
  },
  {
    id: 3,
    artistName: "Priya Sharma",
    eventType: "Cultural Festival",
    clientName: "City Cultural Committee",
    eventDate: "2024-08-05",
    location: "Bangalore, Karnataka",
    status: "rejected",
    budget: "₹60,000",
    requestDate: "2024-06-15",
  },
]

export function ManagerDashboard() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  const filteredRequests = mockBookingRequests.filter((request) => {
    const matchesSearch =
      request.artistName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.clientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.eventType.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || request.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const stats = {
    totalArtists: artistsData.artists.length,
    totalBookings: mockBookingRequests.length,
    pendingRequests: mockBookingRequests.filter((r) => r.status === "pending").length,
    confirmedBookings: mockBookingRequests.filter((r) => r.status === "confirmed").length,
    totalRevenue: "₹3,05,000",
  }

  const getStatusBadge = (status: string) => {
    const colors = {
      pending: "bg-yellow-100 text-yellow-800",
      confirmed: "bg-green-100 text-green-800",
      rejected: "bg-red-100 text-red-800",
    }
    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${colors[status as keyof typeof colors]}`}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    )
  }

  return (
    <div className="space-y-8">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        <div className="card p-6">
          <div className="flex items-center">
            <Users className="h-8 w-8 text-blue-600" />
            <div className="ml-4">
              <p className="text-2xl font-bold">{stats.totalArtists}</p>
              <p className="text-sm text-gray-600">Total Artists</p>
            </div>
          </div>
        </div>

        <div className="card p-6">
          <div className="flex items-center">
            <Calendar className="h-8 w-8 text-purple-600" />
            <div className="ml-4">
              <p className="text-2xl font-bold">{stats.totalBookings}</p>
              <p className="text-sm text-gray-600">Total Requests</p>
            </div>
          </div>
        </div>

        <div className="card p-6">
          <div className="flex items-center">
            <TrendingUp className="h-8 w-8 text-yellow-600" />
            <div className="ml-4">
              <p className="text-2xl font-bold">{stats.pendingRequests}</p>
              <p className="text-sm text-gray-600">Pending</p>
            </div>
          </div>
        </div>

        <div className="card p-6">
          <div className="flex items-center">
            <CheckCircle className="h-8 w-8 text-green-600" />
            <div className="ml-4">
              <p className="text-2xl font-bold">{stats.confirmedBookings}</p>
              <p className="text-sm text-gray-600">Confirmed</p>
            </div>
          </div>
        </div>

        <div className="card p-6">
          <div className="flex items-center">
            <DollarSign className="h-8 w-8 text-emerald-600" />
            <div className="ml-4">
              <p className="text-2xl font-bold">{stats.totalRevenue}</p>
              <p className="text-sm text-gray-600">Revenue</p>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Requests */}
      <div className="card">
        <div className="p-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <h2 className="text-xl font-semibold">Recent Booking Requests</h2>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  type="text"
                  placeholder="Search requests..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="input-field pl-10 w-full sm:w-64"
                />
              </div>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="input-field w-full sm:w-40"
              >
                <option value="all">All Status</option>
                <option value="pending">Pending</option>
                <option value="confirmed">Confirmed</option>
                <option value="rejected">Rejected</option>
              </select>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Artist</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Client</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Event</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Date</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Budget</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Status</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredRequests.map((request) => (
                  <tr key={request.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm font-medium">{request.artistName}</td>
                    <td className="px-4 py-3 text-sm">{request.clientName}</td>
                    <td className="px-4 py-3 text-sm">{request.eventType}</td>
                    <td className="px-4 py-3 text-sm">{new Date(request.eventDate).toLocaleDateString("en-IN")}</td>
                    <td className="px-4 py-3 text-sm font-semibold text-blue-600">{request.budget}</td>
                    <td className="px-4 py-3 text-sm">{getStatusBadge(request.status)}</td>
                    <td className="px-4 py-3 text-sm">
                      <div className="flex items-center space-x-2">
                        <button className="btn btn-secondary text-sm px-3 py-1">
                          <Eye className="h-4 w-4" />
                        </button>
                        <button className="btn btn-secondary text-sm px-3 py-1">
                          <MessageSquare className="h-4 w-4" />
                        </button>
                        {request.status === "pending" && (
                          <>
                            <button className="text-green-600 border border-green-600 hover:bg-green-50 px-3 py-1 rounded text-sm">
                              <CheckCircle className="h-4 w-4" />
                            </button>
                            <button className="text-red-600 border border-red-600 hover:bg-red-50 px-3 py-1 rounded text-sm">
                              <XCircle className="h-4 w-4" />
                            </button>
                          </>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Artists Overview */}
      <div className="card">
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-6">Your Artists</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {artistsData.artists.slice(0, 6).map((artist) => (
              <div key={artist.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-3 mb-3">
                  <img
                    src={artist.image || "/placeholder.svg"}
                    alt={artist.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-medium">{artist.name}</h3>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm">{artist.rating}</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1 mb-2">
                  {artist.category.map((cat) => (
                    <span key={cat} className="badge text-xs">
                      {cat}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-gray-600 mb-2">{artist.location}</p>
                <p className="text-sm font-semibold text-blue-600">{artist.priceRange}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
