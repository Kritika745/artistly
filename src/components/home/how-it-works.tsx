import { Search, MessageSquare, Calendar, Star } from "lucide-react"

const steps = [
  {
    icon: Search,
    title: "Browse & Filter",
    description: "Search through our curated list of verified artists by category, location, and budget.",
  },
  {
    icon: MessageSquare,
    title: "Connect & Discuss",
    description: "Reach out to artists directly to discuss your event requirements and get custom quotes.",
  },
  {
    icon: Calendar,
    title: "Book & Confirm",
    description: "Finalize the booking with secure payment and get confirmation for your event date.",
  },
  {
    icon: Star,
    title: "Enjoy & Review",
    description: "Experience amazing performances and share your feedback to help other event planners.",
  },
]

export function HowItWorks() {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-xl text-gray-600" style={{ maxWidth: "768px", margin: "0 auto" }}>
            Simple steps to book the perfect artist for your event
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div style={{ position: "relative", marginBottom: "24px" }}>
                <div
                  className="rounded-full flex items-center justify-center transition-all"
                  style={{
                    width: "64px",
                    height: "64px",
                    backgroundColor: "#3b82f6",
                    margin: "0 auto",
                  }}
                >
                  <step.icon className="h-8 w-8 text-white" />
                </div>
                <div
                  className="rounded-full flex items-center justify-center text-sm font-bold"
                  style={{
                    position: "absolute",
                    top: "-8px",
                    right: "-8px",
                    width: "32px",
                    height: "32px",
                    backgroundColor: "#f3f4f6",
                    color: "#3b82f6",
                  }}
                >
                  {index + 1}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
