"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, Clock } from "lucide-react"

// Mock expert data
const expertData = {
  id: "sarah-johnson",
  name: "Sarah Johnson",
  avatar: "/placeholder.svg?height=96&width=96",
  hourlyRate: 150,
}

export default function BookingPage({ params }: { params: { expertId: string } }) {
  // Get the current date and timezone
  const [currentDate] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | null>(null)
  const [dates, setDates] = useState<Date[]>([])
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone
  const timezoneAbbr =
    new Intl.DateTimeFormat("en", { timeZoneName: "short" })
      .formatToParts(new Date())
      .find((part) => part.type === "timeZoneName")?.value || ""

  // Generate the next 7 days
  useEffect(() => {
    const nextSevenDays = Array.from({ length: 7 }, (_, i) => {
      const date = new Date(currentDate)
      date.setDate(currentDate.getDate() + i)
      return date
    })
    setDates(nextSevenDays)
  }, [currentDate])

  // Generate time slots from 8am to 8pm
  const timeSlots = Array.from({ length: 12 }, (_, i) => {
    const hour = i + 8 // Start from 8am
    return `${hour % 12 === 0 ? 12 : hour % 12}${hour < 12 ? "am" : "pm"}`
  })

  // Check if a time slot is in the past
  const isTimeSlotPast = (date: Date, timeSlot: string) => {
    const today = new Date()
    const slotHour =
      Number.parseInt(timeSlot.replace(/[^\d]/g, "")) + (timeSlot.includes("pm") && !timeSlot.startsWith("12") ? 12 : 0)

    // If the date is today, check if the hour has passed
    if (date.toDateString() === today.toDateString()) {
      return slotHour <= today.getHours()
    }

    // If the date is in the past, all slots are past
    return date < today
  }

  // Format date for display
  const formatDate = (date: Date) => {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    return `${days[date.getDay()]} ${months[date.getMonth()]} ${date.getDate()}`
  }

  // Handle time slot selection
  const handleTimeSlotSelect = (timeSlot: string) => {
    setSelectedTimeSlot(timeSlot)
  }

  // Get the formatted selected time for summary
  const getFormattedSelectedTime = () => {
    if (!selectedTimeSlot) return null

    const hour = Number.parseInt(selectedTimeSlot.replace(/[^\d]/g, ""))
    const isPm = selectedTimeSlot.includes("pm")
    const startHour = hour + (isPm && hour !== 12 ? 12 : 0)
    const endHour = startHour + 1

    const formatHour = (h: number) => {
      const hour12 = h % 12 === 0 ? 12 : h % 12
      const amPm = h < 12 ? "a.m." : "p.m."
      return `${hour12} ${amPm}`
    }

    return `${formatHour(startHour)}–${formatHour(endHour)}`
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="w-full bg-[#E6E1FF] py-4 px-6 md:px-10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl md:text-3xl font-bold">
            ExpertConnect
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 py-12 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6 md:p-8">
              <div className="flex items-center mb-6">
                <Link href={`/experts/${params.expertId}`} className="mr-4">
                  <ChevronLeft className="h-5 w-5" />
                </Link>
                <h1 className="text-2xl font-bold">Book a Session</h1>
              </div>

              {/* Expert Info */}
              <div className="flex items-center mb-8 p-4 bg-gray-50 rounded-lg">
                <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                  <Image
                    src={expertData.avatar || "/placeholder.svg"}
                    alt={`Profile photo of ${expertData.name}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h2 className="text-lg font-semibold">{expertData.name}</h2>
                  <p className="text-gray-600">${expertData.hourlyRate}/hr</p>
                </div>
              </div>

              {/* Date Picker */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold">Select a Date</h3>
                  <div className="text-sm text-gray-500 flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>Your timezone: {timezoneAbbr}</span>
                  </div>
                </div>

                <div className="relative">
                  <div className="flex overflow-x-auto pb-2 space-x-2 scrollbar-hide">
                    {dates.map((date, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedDate(date)}
                        className={`flex-shrink-0 p-3 rounded-lg border ${
                          selectedDate.toDateString() === date.toDateString()
                            ? "bg-[#A693FF] text-white border-[#A693FF]"
                            : "bg-white border-gray-200 hover:border-[#A693FF] hover:bg-[#F5F3FF]"
                        } ${date < currentDate && date.toDateString() !== currentDate.toDateString() ? "opacity-50" : ""}`}
                        disabled={date < currentDate && date.toDateString() !== currentDate.toDateString()}
                      >
                        <div className="text-center min-w-[80px]">
                          <p className="text-xs font-medium mb-1">
                            {date.toLocaleDateString("en-US", { weekday: "short" })}
                          </p>
                          <p className="font-bold">
                            {date.toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                          </p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Time Slots */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4">Select a Time</h3>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                  {timeSlots.map((timeSlot) => {
                    const isPast = isTimeSlotPast(selectedDate, timeSlot)
                    return (
                      <button
                        key={timeSlot}
                        onClick={() => !isPast && handleTimeSlotSelect(timeSlot)}
                        disabled={isPast}
                        className={`py-2 px-4 rounded-full text-center transition-all ${
                          selectedTimeSlot === timeSlot
                            ? "bg-[#A693FF] text-white"
                            : isPast
                              ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                              : "bg-gray-100 text-gray-700 hover:bg-[#F5F3FF] hover:shadow"
                        }`}
                      >
                        {timeSlot}
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Summary and Action */}
              <div className="border-t pt-6">
                {selectedTimeSlot ? (
                  <div className="text-center mb-6">
                    <p className="text-lg">
                      You'll meet <span className="font-bold">{expertData.name}</span> on{" "}
                      <span className="font-bold">{formatDate(selectedDate)}</span>,{" "}
                      <span className="font-bold">{getFormattedSelectedTime()}</span>
                    </p>
                  </div>
                ) : (
                  <div className="text-center mb-6 text-gray-500">
                    <p>Please select a date and time to continue</p>
                  </div>
                )}

                <button
                  disabled={!selectedTimeSlot}
                  className={`w-full py-3 px-4 rounded-lg font-medium text-white transition-colors ${
                    selectedTimeSlot ? "bg-[#A693FF] hover:bg-[#8A7AE0]" : "bg-gray-400 cursor-not-allowed"
                  }`}
                >
                  Proceed to Payment
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
