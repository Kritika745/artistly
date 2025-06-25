import { OnboardingForm } from "@/components/onboarding/onboarding-form"

export const metadata = {
  title: "Join as Artist - Artistly.com",
  description:
    "Join our platform as a performing artist. Create your profile and start receiving booking requests from event planners.",
}

export default function OnboardingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Header */}
      <div className="bg-white border-b">
        <div className="container py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Join as Artist</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Create your profile and start receiving booking requests from event planners across India.
            </p>
          </div>
        </div>
      </div>

      {/* Form Content */}
      <div className="container py-8">
        <OnboardingForm />
      </div>
    </div>
  )
}
