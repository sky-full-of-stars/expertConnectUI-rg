import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { UserProfileMenu } from "@/components/user-profile-menu"

export default function RealEstatePage() {
  // This would typically come from a database or API
  const experts = [
    {
      id: "james-wilson",
      name: "James Wilson",
      description: "Residential real estate expert with 20+ years experience",
      rating: 5.0,
      avatar: "/placeholder.svg?height=96&width=96",
    },
    {
      id: "elena-kim",
      name: "Elena Kim",
      description: "Commercial property investment advisor and market analyst",
      rating: 4.8,
      avatar: "/placeholder.svg?height=96&width=96",
    },
    {
      id: "thomas-brown",
      name: "Thomas Brown",
      description: "First-time homebuyer specialist and mortgage advisor",
      rating: 4.9,
      avatar: "/placeholder.svg?height=96&width=96",
    },
    {
      id: "olivia-garcia",
      name: "Olivia Garcia",
      description: "Property renovation and home staging consultant",
      rating: 4.7,
      avatar: "/placeholder.svg?height=96&width=96",
    },
    {
      id: "michael-roberts",
      name: "Michael Roberts",
      description: "Real estate investment strategist for rental properties",
      rating: 4.9,
      avatar: "/placeholder.svg?height=96&width=96",
    },
    {
      id: "sarah-chen",
      name: "Sarah Chen",
      description: "International real estate investment consultant",
      rating: 5.0,
      avatar: "/placeholder.svg?height=96&width=96",
    },
    {
      id: "david-johnson",
      name: "David Johnson",
      description: "Luxury property specialist for high-end buyers",
      rating: 4.8,
      avatar: "/placeholder.svg?height=96&width=96",
    },
    {
      id: "jennifer-patel",
      name: "Jennifer Patel",
      description: "Real estate tax and legal compliance advisor",
      rating: 4.9,
      avatar: "/placeholder.svg?height=96&width=96",
    },
    {
      id: "robert-lee",
      name: "Robert Lee",
      description: "Commercial lease negotiation and property management expert",
      rating: 4.7,
      avatar: "/placeholder.svg?height=96&width=96",
    },
    {
      id: "maria-rodriguez",
      name: "Maria Rodriguez",
      description: "Sustainable and eco-friendly property development consultant",
      rating: 4.8,
      avatar: "/placeholder.svg?height=96&width=96",
    },
    {
      id: "john-smith",
      name: "John Smith",
      description: "Real estate market forecasting and investment timing specialist",
      rating: 4.9,
      avatar: "/placeholder.svg?height=96&width=96",
    },
    {
      id: "lisa-wong",
      name: "Lisa Wong",
      description: "Urban development and neighborhood revitalization expert",
      rating: 4.8,
      avatar: "/placeholder.svg?height=96&width=96",
    },
  ]

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
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Real Estate Guidance</h1>
            <p className="text-gray-600">Expert advice for buying, selling, and investing in property</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {experts.map((expert) => (
              <Link
                key={expert.id}
                href={`/experts/${expert.id}`}
                className="expert-card rounded-lg shadow-md border border-transparent hover:border-[#E6E1FF] transition-all p-4 cursor-pointer"
              >
                <div className="flex flex-col items-center">
                  <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4">
                    <Image
                      src={expert.avatar || "/placeholder.svg"}
                      alt={`Profile photo of ${expert.name}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="font-bold text-lg">{expert.name}</h3>
                  <p className="text-center text-gray-600 text-sm line-clamp-2 mb-2">{expert.description}</p>
                  <div className="flex items-center">
                    <div className="flex">
                      {"★★★★★".split("").map((star, i) => (
                        <span key={i} className="text-yellow-400">
                          {i < Math.floor(expert.rating) ? "★" : "☆"}
                        </span>
                      ))}
                    </div>
                    <span className="ml-1 text-sm font-medium">{expert.rating}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
