"use client"

import type React from "react"

import { useState } from "react"
import { Upload, X, CheckCircle, User, FileText, Star } from "lucide-react"
import artistsData from "@/data/artists.json"

export function OnboardingForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([])
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    bio: "",
    location: "",
    feeRange: "",
    experience: "",
  })

  const totalSteps = 4

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setImagePreview(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const toggleCategory = (categoryId: string) => {
    const updated = selectedCategories.includes(categoryId)
      ? selectedCategories.filter((c) => c !== categoryId)
      : [...selectedCategories, categoryId]
    setSelectedCategories(updated)
  }

  const toggleLanguage = (language: string) => {
    const updated = selectedLanguages.includes(language)
      ? selectedLanguages.filter((l) => l !== language)
      : [...selectedLanguages, language]
    setSelectedLanguages(updated)
  }

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    console.log("Form submitted:", {
      ...formData,
      categories: selectedCategories,
      languages: selectedLanguages,
    })
    setIsSubmitted(true)
    setIsSubmitting(false)
  }

  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto">
        <div className="card p-12 text-center">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Application Submitted!</h2>
          <p className="text-gray-600 mb-6">
            Thank you for joining Artistly.com! We'll review your profile and get back to you within 24-48 hours.
          </p>
          <button onClick={() => (window.location.href = "/")} className="btn btn-primary">
            Return to Homepage
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Progress Bar */}
      <div className="card p-6 mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Application Progress</h2>
          <span className="text-sm text-gray-600">
            Step {currentStep} of {totalSteps}
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${(currentStep / totalSteps) * 100}%` }}
          ></div>
        </div>
      </div>

      <form onSubmit={onSubmit}>
        {/* Step 1: Personal Information */}
        {currentStep === 1 && (
          <div className="card p-8">
            <div className="flex items-center gap-3 mb-6">
              <User className="h-6 w-6 text-blue-600" />
              <h3 className="text-xl font-semibold">Personal Information</h3>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="input-field"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="input-field"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="input-field"
                    placeholder="+91 98765 43210"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Location *</label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    className="input-field"
                    placeholder="City, State"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Bio *</label>
                <textarea
                  name="bio"
                  value={formData.bio}
                  onChange={handleInputChange}
                  className="input-field"
                  rows={4}
                  placeholder="Tell us about yourself, your experience, and what makes you unique..."
                  required
                />
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Categories */}
        {currentStep === 2 && (
          <div className="card p-8">
            <div className="flex items-center gap-3 mb-6">
              <Star className="h-6 w-6 text-blue-600" />
              <h3 className="text-xl font-semibold">Categories</h3>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-4">
                Select your performance categories (choose all that apply)
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {artistsData.categories.map((category) => (
                  <div
                    key={category.id}
                    className={`p-4 border rounded-lg cursor-pointer transition-all ${
                      selectedCategories.includes(category.id)
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                    onClick={() => toggleCategory(category.id)}
                  >
                    <div className="text-center">
                      <div className="text-2xl mb-2">{category.icon}</div>
                      <div className="text-sm font-medium">{category.name}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Languages & Experience */}
        {currentStep === 3 && (
          <div className="card p-8">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="h-6 w-6 text-blue-600" />
              <h3 className="text-xl font-semibold">Languages & Experience</h3>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Languages Spoken (select all that apply)
                </label>
                <div className="flex flex-wrap gap-2">
                  {artistsData.languages.map((language) => (
                    <span
                      key={language}
                      className={`cursor-pointer transition-all px-3 py-1 rounded-full text-sm ${
                        selectedLanguages.includes(language)
                          ? "bg-blue-600 text-white"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                      onClick={() => toggleLanguage(language)}
                    >
                      {language}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Fee Range *</label>
                  <select
                    name="feeRange"
                    value={formData.feeRange}
                    onChange={handleInputChange}
                    className="input-field"
                    required
                  >
                    <option value="">Select your fee range</option>
                    {artistsData.priceRanges.map((range) => (
                      <option key={range} value={range}>
                        {range}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Years of Experience *</label>
                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    className="input-field"
                    required
                  >
                    <option value="">Select experience</option>
                    <option value="1-2 years">1-2 years</option>
                    <option value="3-5 years">3-5 years</option>
                    <option value="5-10 years">5-10 years</option>
                    <option value="10+ years">10+ years</option>
                    <option value="15+ years">15+ years</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Step 4: Profile Image */}
        {currentStep === 4 && (
          <div className="card p-8">
            <div className="flex items-center gap-3 mb-6">
              <Upload className="h-6 w-6 text-blue-600" />
              <h3 className="text-xl font-semibold">Profile Image (Optional)</h3>
            </div>

            <div className="flex items-center justify-center w-full">
              <label
                htmlFor="profile-image"
                className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
              >
                {imagePreview ? (
                  <div className="relative w-full h-full">
                    <img
                      src={imagePreview || "/placeholder.svg"}
                      alt="Profile preview"
                      className="w-full h-full object-cover rounded-lg"
                    />
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault()
                        setImagePreview(null)
                      }}
                      className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <Upload className="w-8 h-8 mb-4 text-gray-500" />
                    <p className="mb-2 text-sm text-gray-500">
                      <span className="font-semibold">Click to upload</span> or drag and drop
                    </p>
                    <p className="text-xs text-gray-500">PNG, JPG or JPEG (MAX. 5MB)</p>
                  </div>
                )}
                <input
                  id="profile-image"
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageUpload}
                />
              </label>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8">
          <button
            type="button"
            onClick={prevStep}
            className={`btn btn-secondary ${currentStep === 1 ? "invisible" : ""}`}
          >
            Previous
          </button>

          {currentStep < totalSteps ? (
            <button type="button" onClick={nextStep} className="btn btn-primary">
              Next
            </button>
          ) : (
            <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit Application"}
            </button>
          )}
        </div>
      </form>
    </div>
  )
}
