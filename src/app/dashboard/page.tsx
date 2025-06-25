import { ManagerDashboard } from "@/components/dashboard/manager-dashboard"

export const metadata = {
  title: "Manager Dashboard - Artistly.com",
  description: "Manage your artists and booking requests from your dashboard.",
}

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Header */}
      <div className="bg-white border-b">
        <div className="container py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Manager Dashboard</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Manage your artists, track booking requests, and monitor your business performance.
            </p>
          </div>
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="container py-8">
        <ManagerDashboard />
      </div>
    </div>
  )
}
