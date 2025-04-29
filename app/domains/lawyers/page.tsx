import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { UserProfileMenu } from "@/components/user-profile-menu"

export default function LawyersPage() {
  // This would typically come from a database or API
  const experts = [
    {
      id: "sarah-johnson",
      name: "Sarah Johnson",
      description: "Family law attorney with 15+ years of experience in divorce cases",
      rating: 4.9,
      avatar: "/placeholder.svg?height=96&width=96",
    },
    {
      id: "michael-chen",
      name: "Michael Chen",
      description: "Specializing in child custody and family property disputes",
      rating: 4.8,
      avatar: "/placeholder.svg?height=96&width=96",
    },
    {
      id: "jessica-martinez",
      name: "Jessica Martinez",
      description: "Divorce mediator focused on amicable settlements",
      rating: 5.0,
      avatar: "/placeholder.svg?height=96&width=96",
    },
    {
      id: "robert-williams",
      name: "Robert Williams",
      description: "Expert in complex family asset division and settlements",
      rating: 4.7,
      avatar: "/placeholder.svg?height=96&width=96",
    },
    {
      id: "amanda-patel",
      name: "Amanda Patel",
      description: "Specializing in international family law and cross-border disputes",
      rating: 4.9,
      avatar: "/placeholder.svg?height=96&width=96",
    },
    {
      id: "david-thompson",
      name: "David Thompson",
      description: "Child advocacy attorney with focus on custody and support cases",
      rating: 4.8,
      avatar: "/placeholder.svg?height=96&width=96",
    },
    {
      id: "jennifer-wilson",
      name: "Jennifer Wilson",
      description: "Prenuptial and postnuptial agreement specialist",
      rating: 4.7,
      avatar: "/placeholder.svg?height=96&width=96",
    },
    {
      id: "james-rodriguez",
      name: "James Rodriguez",
      description: "Family business division and asset protection expert",
      rating: 4.9,
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
            <h1 className="text-3xl font-bold mb-2">Lawyers</h1>
            <p className="text-gray-600">Divorce & Family Law specialists to help with your legal needs</p>
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
