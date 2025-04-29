"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Edit2, Check, X } from "lucide-react"

// Mock data for the expert profile
const expertData = {
  id: "sarah-johnson",
  name: "Sarah Johnson",
  avatar: "/placeholder.svg?height=250&width=250",
  rating: 4.9,
  bio: "Family law attorney with over 15 years of experience specializing in divorce cases, child custody arrangements, and property settlements. Known for compassionate client service and strategic negotiation skills.",
  hourlyRate: 150,
  highlights: [
    "Successfully represented 300+ clients in family court proceedings",
    "Former partner at Wilson & Associates Law Firm",
    "Certified mediator for family disputes",
    "Published author on modern approaches to family law",
  ],
  bookings: [
    { id: 1, date: "2023-05-01", clientName: "John Smith", status: "Completed", earnings: 150 },
    { id: 2, date: "2023-05-03", clientName: "Emily Johnson", status: "Completed", earnings: 150 },
    { id: 3, date: "2023-05-10", clientName: "Michael Brown", status: "Upcoming", earnings: 150 },
    { id: 4, date: "2023-05-15", clientName: "Sarah Davis", status: "Upcoming", earnings: 150 },
    { id: 5, date: "2023-04-25", clientName: "Robert Wilson", status: "Completed", earnings: 150 },
    { id: 6, date: "2023-04-20", clientName: "Jennifer Lee", status: "Completed", earnings: 150 },
    { id: 7, date: "2023-04-15", clientName: "David Martinez", status: "Completed", earnings: 150 },
    { id: 8, date: "2023-04-10", clientName: "Lisa Thompson", status: "Completed", earnings: 150 },
    { id: 9, date: "2023-04-05", clientName: "James Wilson", status: "Completed", earnings: 150 },
    { id: 10, date: "2023-04-01", clientName: "Patricia Garcia", status: "Completed", earnings: 150 },
    { id: 11, date: "2023-03-28", clientName: "Thomas Anderson", status: "Completed", earnings: 150 },
    { id: 12, date: "2023-03-25", clientName: "Jessica White", status: "Completed", earnings: 150 },
  ],
}

export default function ExpertProfilePage() {
  // State for editable fields
  const [hourlyRate, setHourlyRate] = useState(expertData.hourlyRate)
  const [bio, setBio] = useState(expertData.bio)
  const [isEditingRate, setIsEditingRate] = useState(false)
  const [isEditingBio, setIsEditingBio] = useState(false)
  const [showToast, setShowToast] = useState(false)
  const [toastMessage, setToastMessage] = useState("")

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1)
  const bookingsPerPage = 10

  // Calculate bookings for current page
  const indexOfLastBooking = currentPage * bookingsPerPage
  const indexOfFirstBooking = indexOfLastBooking - bookingsPerPage
  const currentBookings = expertData.bookings.slice(indexOfFirstBooking, indexOfLastBooking)
  const totalPages = Math.ceil(expertData.bookings.length / bookingsPerPage)

  // Handle saving hourly rate
  const handleSaveRate = () => {
    // In a real app, this would call an API to update the rate
    console.log("Saving hourly rate:", hourlyRate)
    setIsEditingRate(false)
    showSuccessToast("Hourly rate updated successfully")
  }

  // Handle saving bio
  const handleSaveBio = () => {
    // In a real app, this would call an API to update the bio
    console.log("Saving bio:", bio)
    setIsEditingBio(false)
    showSuccessToast("Bio updated successfully")
  }

  // Show success toast
  const showSuccessToast = (message: string) => {
    setToastMessage(message)
    setShowToast(true)
    setTimeout(() => {
      setShowToast(false)
    }, 3000)
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
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6 md:p-8">
              <h1 className="text-2xl font-bold mb-8">Expert Profile</h1>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column - Basic Info */}
                <div className="lg:col-span-1">
                  <div className="flex flex-col items-center">
                    <div className="relative w-[250px] h-[250px] rounded-full overflow-hidden border-4 border-white shadow-md mb-4">
                      <Image
                        src={expertData.avatar || "/placeholder.svg"}
                        alt={`Profile photo of ${expertData.name}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h2 className="text-2xl font-bold">{expertData.name}</h2>
                    <div className="flex items-center mt-2">
                      <div className="flex">
                        {"★★★★★".split("").map((star, i) => (
                          <span key={i} className="text-yellow-400 text-xl">
                            {star}
                          </span>
                        ))}
                      </div>
                      <span className="ml-2 font-medium">{expertData.rating}</span>
                    </div>
                  </div>

                  <div className="mt-8">
                    <h3 className="text-xl font-semibold mb-3">Past Highlights</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      {expertData.highlights.map((highlight, index) => (
                        <li key={index} className="text-gray-700">
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right Column - Editable Panels & Bookings */}
                <div className="lg:col-span-2">
                  {/* Hourly Rate Panel */}
                  <div className="bg-gray-50 rounded-lg p-6 mb-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-lg font-semibold">Hourly Rate</h3>
                      {!isEditingRate && (
                        <button
                          onClick={() => setIsEditingRate(true)}
                          className="text-[#A693FF] hover:text-[#8A7AE0] flex items-center"
                        >
                          <Edit2 className="h-4 w-4 mr-1" />
                          Edit
                        </button>
                      )}
                    </div>

                    {isEditingRate ? (
                      <div className="flex items-center">
                        <div className="relative flex-1">
                          <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                          <input
                            type="number"
                            min="10"
                            step="5"
                            value={hourlyRate}
                            onChange={(e) => setHourlyRate(Number(e.target.value))}
                            className="w-full pl-8 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#E6E1FF] focus:border-transparent"
                          />
                        </div>
                        <div className="flex ml-4">
                          <button
                            onClick={handleSaveRate}
                            className="bg-[#A693FF] text-white p-2 rounded-lg hover:bg-[#8A7AE0] mr-2"
                          >
                            <Check className="h-5 w-5" />
                          </button>
                          <button
                            onClick={() => {
                              setHourlyRate(expertData.hourlyRate)
                              setIsEditingRate(false)
                            }}
                            className="bg-gray-200 text-gray-700 p-2 rounded-lg hover:bg-gray-300"
                          >
                            <X className="h-5 w-5" />
                          </button>
                        </div>
                      </div>
                    ) : (
                      <p className="text-2xl font-bold">${hourlyRate}/hr</p>
                    )}
                  </div>

                  {/* Bio Panel */}
                  <div className="bg-gray-50 rounded-lg p-6 mb-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-lg font-semibold">Bio</h3>
                      {!isEditingBio && (
                        <button
                          onClick={() => setIsEditingBio(true)}
                          className="text-[#A693FF] hover:text-[#8A7AE0] flex items-center"
                        >
                          <Edit2 className="h-4 w-4 mr-1" />
                          Edit
                        </button>
                      )}
                    </div>

                    {isEditingBio ? (
                      <div>
                        <textarea
                          value={bio}
                          onChange={(e) => setBio(e.target.value)}
                          rows={5}
                          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#E6E1FF] focus:border-transparent mb-4"
                        />
                        <div className="flex justify-end">
                          <button
                            onClick={handleSaveBio}
                            className="bg-[#A693FF] text-white px-4 py-2 rounded-lg hover:bg-[#8A7AE0] mr-2"
                          >
                            Save
                          </button>
                          <button
                            onClick={() => {
                              setBio(expertData.bio)
                              setIsEditingBio(false)
                            }}
                            className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300"
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    ) : (
                      <p className="text-gray-700">{bio}</p>
                    )}
                  </div>

                  {/* Bookings Table */}
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-4">Previous Bookings</h3>

                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-100">
                          <tr>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                              Date
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                              Client Name
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                              Status
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                              Earnings
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {currentBookings.map((booking) => (
                            <tr key={booking.id}>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                {new Date(booking.date).toLocaleDateString()}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                {booking.clientName}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm">
                                <span
                                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                                    booking.status === "Completed"
                                      ? "bg-green-100 text-green-800"
                                      : "bg-blue-100 text-blue-800"
                                  }`}
                                >
                                  {booking.status}
                                </span>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${booking.earnings}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    {/* Pagination */}
                    {totalPages > 1 && (
                      <div className="flex justify-center mt-6">
                        <nav className="flex items-center">
                          <button
                            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                            disabled={currentPage === 1}
                            className="px-3 py-1 rounded-md mr-2 bg-gray-200 text-gray-700 disabled:opacity-50"
                          >
                            Previous
                          </button>
                          <div className="flex space-x-1">
                            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                              <button
                                key={page}
                                onClick={() => setCurrentPage(page)}
                                className={`px-3 py-1 rounded-md ${
                                  currentPage === page ? "bg-[#A693FF] text-white" : "bg-gray-200 text-gray-700"
                                }`}
                              >
                                {page}
                              </button>
                            ))}
                          </div>
                          <button
                            onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                            disabled={currentPage === totalPages}
                            className="px-3 py-1 rounded-md ml-2 bg-gray-200 text-gray-700 disabled:opacity-50"
                          >
                            Next
                          </button>
                        </nav>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Success Toast */}
      {showToast && (
        <div className="fixed bottom-4 right-4 bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded shadow-md transition-opacity duration-300">
          <div className="flex items-center">
            <Check className="h-5 w-5 mr-2" />
            <p>{toastMessage}</p>
          </div>
        </div>
      )}
    </div>
  )
}
