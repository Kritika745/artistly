import { OnboardingForm } from "@/components/onboarding-form"

export const metadata = {
  title: "Join as Artist - Artistly.com",
  description:
    "Join our platform as a performing artist. Create your profile and start receiving booking requests from event planners.",
}

export default function OnboardingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Join as Artist</h1>
          <p className="text-gray-600">Create your profile and start receiving booking requests</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <OnboardingForm />
      </div>
    </div>
  )
}
