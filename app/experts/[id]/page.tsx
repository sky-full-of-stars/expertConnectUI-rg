"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { UserProfileMenu } from "@/components/user-profile-menu"
import { useRouter } from "next/navigation"

// This would typically come from a database or API
const expertData = {
  id: "sarah-johnson",
  name: "Sarah Johnson",
  category: "lawyers",
  rating: 4.9,
  avatar: "/placeholder.svg?height=250&width=250",
  bio: "Family law attorney with over 15 years of experience specializing in divorce cases, child custody arrangements, and property settlements. Known for compassionate client service and strategic negotiation skills.",
  highlights: [
    "Successfully represented 300+ clients in family court proceedings",
    "Former partner at Wilson & Associates Law Firm",
    "Certified mediator for family disputes",
    "Published author on modern approaches to family law",
  ],
}

export default function ExpertProfilePage({ params }: { params: { id: string } }) {
  // In a real app, you would fetch the expert data based on the ID
  // const { data: expert } = await getExpert(params.id)

  const expert = expertData
  const router = useRouter()

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="w-full bg-[#E6E1FF] py-4 px-6 md:px-10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="inline-flex items-center text-2xl font-bold hover:opacity-80 transition-opacity">
            <ArrowLeft className="mr-2 h-5 w-5" />
            ExpertConnect
          </Link>
          <UserProfileMenu />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Left Column - Expert Info */}
            <div className="lg:col-span-2 space-y-8">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <div className="relative w-[250px] h-[250px] rounded-full overflow-hidden border-4 border-white shadow-md">
                  <Image
                    src={expert.avatar || "/placeholder.svg"}
                    alt={`Profile photo of ${expert.name}`}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-2">{expert.name}</h2>
                  <div className="flex items-center mb-4">
                    <div className="flex">
                      {"★★★★★".split("").map((star, i) => (
                        <span key={i} className="text-yellow-400 text-xl">
                          {star}
                        </span>
                      ))}
                    </div>
                    <span className="ml-2 font-medium">{expert.rating}</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">About</h3>
                <p className="text-gray-700 leading-relaxed mb-6">{expert.bio}</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Past Highlights</h3>
                <ul className="list-disc pl-5 space-y-2">
                  {expert.highlights.map((highlight, index) => (
                    <li key={index} className="text-gray-700">
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column - Actions */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 sticky top-6">
                <h3 className="text-xl font-semibold mb-6">Connect with {expert.name.split(" ")[0]}</h3>

                <button
                  onClick={() => router.push(`/booking/${params.id}`)}
                  className="w-full bg-[#A693FF] text-white font-medium py-3 px-4 rounded-lg shadow hover:bg-[#8A7AE0] hover:scale-[1.03] transition-all duration-200 mb-4"
                >
                  Book counselling session
                </button>

                <Link
                  href={`/experts?category=${expert.category}`}
                  className="w-full block text-center border border-[#A693FF] text-[#A693FF] font-medium py-3 px-4 rounded-lg hover:bg-[#F5F3FF] hover:scale-[1.03] transition-all duration-200"
                >
                  View similar expert profiles
                </Link>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h4 className="font-medium mb-3">Expertise areas</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-[#F5F3FF] text-[#6B46C1] text-sm px-3 py-1 rounded-full">Family Law</span>
                    <span className="bg-[#F5F3FF] text-[#6B46C1] text-sm px-3 py-1 rounded-full">Divorce</span>
                    <span className="bg-[#F5F3FF] text-[#6B46C1] text-sm px-3 py-1 rounded-full">Child Custody</span>
                    <span className="bg-[#F5F3FF] text-[#6B46C1] text-sm px-3 py-1 rounded-full">Mediation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
