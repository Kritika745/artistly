import { ManagerDashboard } from "@/components/manager-dashboard"

export const metadata = {
  title: "Manager Dashboard - Artistly.com",
  description: "Manage your artists and booking requests from your dashboard.",
}

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Manager Dashboard</h1>
          <p className="text-gray-600">Manage your artists and track booking requests</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ManagerDashboard />
      </div>
    </div>
  )
}
