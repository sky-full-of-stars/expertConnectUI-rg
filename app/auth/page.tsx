"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Upload } from "lucide-react"

export default function AuthPage() {
  // State for form mode and expert toggle
  const [isLogin, setIsLogin] = useState(false)
  const [isExpert, setIsExpert] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)

  // Form state
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [domain, setDomain] = useState("")
  const [intro, setIntro] = useState("")
  const [experience, setExperience] = useState(0)
  const [hourlyRate, setHourlyRate] = useState(50) // Default hourly rate
  const [certificate, setCertificate] = useState<File | null>(null)

  // Validation state
  const [isFormValid, setIsFormValid] = useState(false)
  const [errors, setErrors] = useState<{ [key: string]: string }>({})

  // Validate form on input change
  useEffect(() => {
    const newErrors: { [key: string]: string } = {}

    if (!email) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid"
    }

    if (!password) {
      newErrors.password = "Password is required"
    } else if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters"
    }

    if (!isLogin && password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match"
    }

    if (isExpert) {
      if (!domain) {
        newErrors.domain = "Please select a domain"
      }

      if (!intro) {
        newErrors.intro = "Please provide a brief introduction"
      }

      if (experience < 0 || experience > 50) {
        newErrors.experience = "Experience must be between 0 and 50 years"
      }

      if (hourlyRate < 10) {
        newErrors.hourlyRate = "Hourly rate must be at least $10"
      }
    }

    setErrors(newErrors)
    setIsFormValid(Object.keys(newErrors).length === 0)
  }, [email, password, confirmPassword, domain, intro, experience, hourlyRate, isExpert, isLogin])

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormSubmitted(true)

    if (!isFormValid) return

    // In a real app, this would call an API endpoint
    console.log("Form submitted:", {
      isLogin,
      isExpert,
      email,
      password,
      domain: isExpert ? domain : undefined,
      intro: isExpert ? intro : undefined,
      experience: isExpert ? experience : undefined,
      hourlyRate: isExpert ? hourlyRate : undefined,
      hasCertificate: isExpert ? !!certificate : undefined,
    })

    // Redirect to landing page after successful authentication
    window.location.href = "/"
  }

  // Handle Google Sign In
  const handleGoogleSignIn = () => {
    // In a real app, this would initiate OAuth flow
    console.log("Google Sign In clicked")
    // Example OAuth URL with required scopes
    const oauthUrl =
      "https://accounts.google.com/o/oauth2/v2/auth" +
      "?client_id=YOUR_CLIENT_ID" +
      "&redirect_uri=YOUR_REDIRECT_URI" +
      "&response_type=code" +
      "&scope=email https://www.googleapis.com/auth/calendar.events" +
      "&access_type=offline"

    // window.location.href = oauthUrl
    console.log("Would redirect to:", oauthUrl)
  }

  // Handle file selection
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setCertificate(e.target.files[0])
    }
  }

  // Helper function to determine if we should show an error
  const shouldShowError = (fieldName: string) => {
    return formSubmitted && errors[fieldName]
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="w-full bg-[#E6E1FF] py-4 px-6 md:px-10 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto">
          <h1 className="inline-flex items-center text-2xl font-bold">ExpertConnect</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-[500px] bg-white rounded-xl shadow-md overflow-hidden">
          {/* Tabs */}
          <div className="flex border-b">
            <button
              className={`flex-1 py-4 text-center font-medium transition-colors ${
                !isLogin ? "text-[#A693FF] border-b-2 border-[#A693FF]" : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setIsLogin(false)}
            >
              Sign Up
            </button>
            <button
              className={`flex-1 py-4 text-center font-medium transition-colors ${
                isLogin ? "text-[#A693FF] border-b-2 border-[#A693FF]" : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setIsLogin(true)}
            >
              Log In
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            <h1 className="text-2xl font-bold text-center mb-6">{isLogin ? "Welcome Back" : "Create Your Account"}</h1>

            {/* Email Field */}
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full px-4 py-2 rounded-lg border ${
                  shouldShowError("email") ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:ring-2 focus:ring-[#E6E1FF] focus:border-transparent transition-colors`}
                placeholder="your@email.com"
              />
              {shouldShowError("email") && <p className="text-red-500 text-xs">{errors.email}</p>}
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`w-full px-4 py-2 rounded-lg border ${
                  shouldShowError("password") ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:ring-2 focus:ring-[#E6E1FF] focus:border-transparent transition-colors`}
                placeholder="••••••••"
              />
              {shouldShowError("password") && <p className="text-red-500 text-xs">{errors.password}</p>}
            </div>

            {/* Confirm Password Field (only for Sign Up) */}
            {!isLogin && (
              <div className="space-y-2">
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                  Confirm Password
                </label>
                <input
                  id="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className={`w-full px-4 py-2 rounded-lg border ${
                    shouldShowError("confirmPassword") ? "border-red-500" : "border-gray-300"
                  } focus:outline-none focus:ring-2 focus:ring-[#E6E1FF] focus:border-transparent transition-colors`}
                  placeholder="••••••••"
                />
                {shouldShowError("confirmPassword") && <p className="text-red-500 text-xs">{errors.confirmPassword}</p>}
              </div>
            )}

            {/* Google Sign In Button */}
            <button
              type="button"
              onClick={handleGoogleSignIn}
              className="w-full flex items-center justify-center gap-2 py-2 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Image src="/placeholder.svg?height=24&width=24" alt="Google logo" width={24} height={24} />
              <span>Sign {isLogin ? "in" : "up"} with Google</span>
            </button>

            {/* Expert Toggle (only for Sign Up) */}
            {!isLogin && (
              <div className="pt-4">
                <button
                  type="button"
                  onClick={() => setIsExpert(!isExpert)}
                  className={`w-full py-2 px-4 rounded-lg border border-[#A693FF] transition-all duration-200 ${
                    isExpert ? "bg-[#A693FF] text-white font-bold" : "bg-transparent text-[#A693FF]"
                  }`}
                  aria-expanded={isExpert}
                >
                  {isExpert ? "Register as normal user" : "Join as expert"}
                </button>
              </div>
            )}

            {/* Expert Fields (conditionally rendered) */}
            <div
              className={`space-y-4 overflow-hidden transition-all duration-300 ease-in ${
                isExpert && !isLogin ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              {/* Domain Dropdown */}
              <div className="space-y-2">
                <label htmlFor="domain" className="block text-sm font-medium text-gray-700">
                  Domain
                </label>
                <select
                  id="domain"
                  value={domain}
                  onChange={(e) => setDomain(e.target.value)}
                  className={`w-full px-4 py-2 rounded-lg border ${
                    shouldShowError("domain") ? "border-red-500" : "border-gray-300"
                  } focus:outline-none focus:ring-2 focus:ring-[#E6E1FF] focus:border-transparent transition-colors`}
                >
                  <option value="">Select your domain</option>
                  <option value="finance">Finance</option>
                  <option value="law">Law</option>
                  <option value="career">Career</option>
                  <option value="real-estate">Real Estate</option>
                  <option value="health">Health</option>
                  <option value="education">Education</option>
                </select>
                {shouldShowError("domain") && <p className="text-red-500 text-xs">{errors.domain}</p>}
              </div>

              {/* Brief Intro Textarea */}
              <div className="space-y-2">
                <label htmlFor="intro" className="block text-sm font-medium text-gray-700">
                  Brief Introduction
                </label>
                <textarea
                  id="intro"
                  value={intro}
                  onChange={(e) => setIntro(e.target.value)}
                  rows={4}
                  className={`w-full px-4 py-2 rounded-lg border ${
                    shouldShowError("intro") ? "border-red-500" : "border-gray-300"
                  } focus:outline-none focus:ring-2 focus:ring-[#E6E1FF] focus:border-transparent transition-colors`}
                  placeholder="Describe your expertise, projects, and years of experience…"
                />
                {shouldShowError("intro") && <p className="text-red-500 text-xs">{errors.intro}</p>}
              </div>

              {/* Years of Experience */}
              <div className="space-y-2">
                <label htmlFor="experience" className="block text-sm font-medium text-gray-700">
                  Years of Experience
                </label>
                <input
                  id="experience"
                  type="number"
                  min="0"
                  max="50"
                  value={experience}
                  onChange={(e) => setExperience(Number.parseInt(e.target.value) || 0)}
                  className={`w-full px-4 py-2 rounded-lg border ${
                    shouldShowError("experience") ? "border-red-500" : "border-gray-300"
                  } focus:outline-none focus:ring-2 focus:ring-[#E6E1FF] focus:border-transparent transition-colors`}
                />
                {shouldShowError("experience") && <p className="text-red-500 text-xs">{errors.experience}</p>}
              </div>

              {/* Hourly Rate */}
              <div className="space-y-2">
                <label htmlFor="hourlyRate" className="block text-sm font-medium text-gray-700">
                  Hourly Rate ($/hr)
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                  <input
                    id="hourlyRate"
                    type="number"
                    min="10"
                    step="5"
                    value={hourlyRate}
                    onChange={(e) => setHourlyRate(Number.parseInt(e.target.value) || 10)}
                    className={`w-full pl-8 pr-4 py-2 rounded-lg border ${
                      shouldShowError("hourlyRate") ? "border-red-500" : "border-gray-300"
                    } focus:outline-none focus:ring-2 focus:ring-[#E6E1FF] focus:border-transparent transition-colors`}
                  />
                </div>
                {shouldShowError("hourlyRate") && <p className="text-red-500 text-xs">{errors.hourlyRate}</p>}
              </div>

              {/* Certificate Upload */}
              <div className="space-y-2">
                <label htmlFor="certificate" className="block text-sm font-medium text-gray-700">
                  Upload Certificate
                </label>
                <div className="relative">
                  <input
                    id="certificate"
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={handleFileChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    aria-label="Upload degree or experience certificate"
                  />
                  <div className="w-full px-4 py-2 rounded-lg border border-gray-300 flex items-center justify-between">
                    <span className="text-gray-500 truncate">
                      {certificate ? certificate.name : "Upload degree or experience certificate"}
                    </span>
                    <Upload className="h-5 w-5 text-gray-400" />
                  </div>
                </div>
                <p className="text-xs text-gray-500">Accepted formats: PDF, JPG, PNG</p>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className={`w-full py-3 px-4 rounded-lg font-medium text-white transition-colors ${
                isFormValid || !formSubmitted ? "bg-[#A693FF] hover:bg-[#8A7AE0]" : "bg-gray-400 cursor-not-allowed"
              }`}
            >
              {isLogin ? "Log In" : "Create Account"}
            </button>
          </form>
        </div>
      </main>
    </div>
  )
}
