import Image from "next/image"
import { Search, ChevronRight } from "lucide-react"
import Link from "next/link"
import { UserProfileMenu } from "@/components/user-profile-menu"

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="w-full bg-[#E6E1FF] py-4 px-6 md:px-10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl font-bold">ExpertConnect</h1>
          <UserProfileMenu />
        </div>
      </header>

      {/* Hero Section with Search Bar */}
      <section className="w-full py-12 md:py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="relative">
            <input
              type="text"
              placeholder="Ask a question or search for an expert…"
              className="w-full py-3 px-5 pr-12 rounded-full border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#E6E1FF] focus:border-transparent"
            />
            <button
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-indigo-700"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Domain Sections */}
      <section className="w-full py-8 px-4 md:px-10">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Lawyers Domain */}
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-medium">Lawyers</h2>
                <p className="text-gray-600">Divorce & Family Law specialists to help with your legal needs</p>
              </div>
              <Link
                href="/domains/lawyers"
                className="flex items-center text-[#A693FF] hover:text-[#8A7AE0] font-medium transition-colors"
              >
                See more <ChevronRight className="h-5 w-5 ml-1" />
              </Link>
            </div>

            <div className="relative">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 overflow-x-auto pb-2">
                {/* Expert Card 1 */}
                <Link
                  href="/experts/sarah-johnson"
                  className="expert-card rounded-lg shadow-md border border-transparent hover:border-[#E6E1FF] transition-all p-4 cursor-pointer"
                >
                  <div className="flex flex-col items-center">
                    <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4">
                      <Image
                        src="/placeholder.svg?height=96&width=96"
                        alt="Profile photo of Sarah Johnson"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="font-bold text-lg">Sarah Johnson</h3>
                    <p className="text-center text-gray-600 text-sm line-clamp-2 mb-2">
                      Family law attorney with 15+ years of experience in divorce cases
                    </p>
                    <div className="flex items-center">
                      <div className="flex">
                        {"★★★★★".split("").map((star, i) => (
                          <span key={i} className="text-yellow-400">
                            {star}
                          </span>
                        ))}
                      </div>
                      <span className="ml-1 text-sm font-medium">4.9</span>
                    </div>
                  </div>
                </Link>

                {/* Expert Card 2 */}
                <div className="expert-card rounded-lg shadow-md border border-transparent hover:border-[#E6E1FF] transition-all p-4 cursor-pointer">
                  <div className="flex flex-col items-center">
                    <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4">
                      <Image
                        src="/placeholder.svg?height=96&width=96"
                        alt="Profile photo of Michael Chen"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="font-bold text-lg">Michael Chen</h3>
                    <p className="text-center text-gray-600 text-sm line-clamp-2 mb-2">
                      Specializing in child custody and family property disputes
                    </p>
                    <div className="flex items-center">
                      <div className="flex">
                        {"★★★★☆".split("").map((star, i) => (
                          <span key={i} className="text-yellow-400">
                            {star}
                          </span>
                        ))}
                      </div>
                      <span className="ml-1 text-sm font-medium">4.8</span>
                    </div>
                  </div>
                </div>

                {/* Expert Card 3 */}
                <div className="expert-card rounded-lg shadow-md border border-transparent hover:border-[#E6E1FF] transition-all p-4 cursor-pointer">
                  <div className="flex flex-col items-center">
                    <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4">
                      <Image
                        src="/placeholder.svg?height=96&width=96"
                        alt="Profile photo of Jessica Martinez"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="font-bold text-lg">Jessica Martinez</h3>
                    <p className="text-center text-gray-600 text-sm line-clamp-2 mb-2">
                      Divorce mediator focused on amicable settlements
                    </p>
                    <div className="flex items-center">
                      <div className="flex">
                        {"★★★★★".split("").map((star, i) => (
                          <span key={i} className="text-yellow-400">
                            {star}
                          </span>
                        ))}
                      </div>
                      <span className="ml-1 text-sm font-medium">5.0</span>
                    </div>
                  </div>
                </div>

                {/* Expert Card 4 */}
                <div className="expert-card rounded-lg shadow-md border border-transparent hover:border-[#E6E1FF] transition-all p-4 cursor-pointer">
                  <div className="flex flex-col items-center">
                    <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4">
                      <Image
                        src="/placeholder.svg?height=96&width=96"
                        alt="Profile photo of Robert Williams"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="font-bold text-lg">Robert Williams</h3>
                    <p className="text-center text-gray-600 text-sm line-clamp-2 mb-2">
                      Expert in complex family asset division and settlements
                    </p>
                    <div className="flex items-center">
                      <div className="flex">
                        {"★★★★☆".split("").map((star, i) => (
                          <span key={i} className="text-yellow-400">
                            {star}
                          </span>
                        ))}
                      </div>
                      <span className="ml-1 text-sm font-medium">4.7</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-r from-transparent to-white pointer-events-none"></div>
            </div>
          </div>

          {/* Career Counsellors Domain */}
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-medium">Career Counsellors</h2>
                <p className="text-gray-600">Professional guidance for your career development and job search</p>
              </div>
              <Link
                href="/domains/career-counsellors"
                className="flex items-center text-[#A693FF] hover:text-[#8A7AE0] font-medium transition-colors"
              >
                See more <ChevronRight className="h-5 w-5 ml-1" />
              </Link>
            </div>

            <div className="relative">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 overflow-x-auto pb-2">
                {/* Expert Card 1 */}
                <div className="expert-card rounded-lg shadow-md border border-transparent hover:border-[#E6E1FF] transition-all p-4 cursor-pointer">
                  <div className="flex flex-col items-center">
                    <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4">
                      <Image
                        src="/placeholder.svg?height=96&width=96"
                        alt="Profile photo of David Thompson"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="font-bold text-lg">David Thompson</h3>
                    <p className="text-center text-gray-600 text-sm line-clamp-2 mb-2">
                      Tech industry career coach with Silicon Valley experience
                    </p>
                    <div className="flex items-center">
                      <div className="flex">
                        {"★★★★★".split("").map((star, i) => (
                          <span key={i} className="text-yellow-400">
                            {star}
                          </span>
                        ))}
                      </div>
                      <span className="ml-1 text-sm font-medium">4.9</span>
                    </div>
                  </div>
                </div>

                {/* Expert Card 2 */}
                <div className="expert-card rounded-lg shadow-md border border-transparent hover:border-[#E6E1FF] transition-all p-4 cursor-pointer">
                  <div className="flex flex-col items-center">
                    <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4">
                      <Image
                        src="/placeholder.svg?height=96&width=96"
                        alt="Profile photo of Aisha Patel"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="font-bold text-lg">Aisha Patel</h3>
                    <p className="text-center text-gray-600 text-sm line-clamp-2 mb-2">
                      Resume expert and interview coach for executive positions
                    </p>
                    <div className="flex items-center">
                      <div className="flex">
                        {"★★★★☆".split("").map((star, i) => (
                          <span key={i} className="text-yellow-400">
                            {star}
                          </span>
                        ))}
                      </div>
                      <span className="ml-1 text-sm font-medium">4.8</span>
                    </div>
                  </div>
                </div>

                {/* Expert Card 3 */}
                <div className="expert-card rounded-lg shadow-md border border-transparent hover:border-[#E6E1FF] transition-all p-4 cursor-pointer">
                  <div className="flex flex-col items-center">
                    <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4">
                      <Image
                        src="/placeholder.svg?height=96&width=96"
                        alt="Profile photo of Marcus Johnson"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="font-bold text-lg">Marcus Johnson</h3>
                    <p className="text-center text-gray-600 text-sm line-clamp-2 mb-2">
                      Career transition specialist for mid-career professionals
                    </p>
                    <div className="flex items-center">
                      <div className="flex">
                        {"★★★★★".split("").map((star, i) => (
                          <span key={i} className="text-yellow-400">
                            {star}
                          </span>
                        ))}
                      </div>
                      <span className="ml-1 text-sm font-medium">4.9</span>
                    </div>
                  </div>
                </div>

                {/* Expert Card 4 */}
                <div className="expert-card rounded-lg shadow-md border border-transparent hover:border-[#E6E1FF] transition-all p-4 cursor-pointer">
                  <div className="flex flex-col items-center">
                    <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4">
                      <Image
                        src="/placeholder.svg?height=96&width=96"
                        alt="Profile photo of Sophia Rodriguez"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="font-bold text-lg">Sophia Rodriguez</h3>
                    <p className="text-center text-gray-600 text-sm line-clamp-2 mb-2">
                      Specializing in early career guidance and internship placement
                    </p>
                    <div className="flex items-center">
                      <div className="flex">
                        {"★★★★☆".split("").map((star, i) => (
                          <span key={i} className="text-yellow-400">
                            {star}
                          </span>
                        ))}
                      </div>
                      <span className="ml-1 text-sm font-medium">4.7</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-r from-transparent to-white pointer-events-none"></div>
            </div>
          </div>

          {/* Real Estate Guidance Domain */}
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-medium">Real Estate Guidance</h2>
                <p className="text-gray-600">Expert advice for buying, selling, and investing in property</p>
              </div>
              <Link
                href="/domains/real-estate"
                className="flex items-center text-[#A693FF] hover:text-[#8A7AE0] font-medium transition-colors"
              >
                See more <ChevronRight className="h-5 w-5 ml-1" />
              </Link>
            </div>

            <div className="relative">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 overflow-x-auto pb-2">
                {/* Expert Card 1 */}
                <div className="expert-card rounded-lg shadow-md border border-transparent hover:border-[#E6E1FF] transition-all p-4 cursor-pointer">
                  <div className="flex flex-col items-center">
                    <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4">
                      <Image
                        src="/placeholder.svg?height=96&width=96"
                        alt="Profile photo of James Wilson"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="font-bold text-lg">James Wilson</h3>
                    <p className="text-center text-gray-600 text-sm line-clamp-2 mb-2">
                      Residential real estate expert with 20+ years experience
                    </p>
                    <div className="flex items-center">
                      <div className="flex">
                        {"★★★★★".split("").map((star, i) => (
                          <span key={i} className="text-yellow-400">
                            {star}
                          </span>
                        ))}
                      </div>
                      <span className="ml-1 text-sm font-medium">5.0</span>
                    </div>
                  </div>
                </div>

                {/* Expert Card 2 */}
                <div className="expert-card rounded-lg shadow-md border border-transparent hover:border-[#E6E1FF] transition-all p-4 cursor-pointer">
                  <div className="flex flex-col items-center">
                    <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4">
                      <Image
                        src="/placeholder.svg?height=96&width=96"
                        alt="Profile photo of Elena Kim"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="font-bold text-lg">Elena Kim</h3>
                    <p className="text-center text-gray-600 text-sm line-clamp-2 mb-2">
                      Commercial property investment advisor and market analyst
                    </p>
                    <div className="flex items-center">
                      <div className="flex">
                        {"★★★★☆".split("").map((star, i) => (
                          <span key={i} className="text-yellow-400">
                            {star}
                          </span>
                        ))}
                      </div>
                      <span className="ml-1 text-sm font-medium">4.8</span>
                    </div>
                  </div>
                </div>

                {/* Expert Card 3 */}
                <div className="expert-card rounded-lg shadow-md border border-transparent hover:border-[#E6E1FF] transition-all p-4 cursor-pointer">
                  <div className="flex flex-col items-center">
                    <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4">
                      <Image
                        src="/placeholder.svg?height=96&width=96"
                        alt="Profile photo of Thomas Brown"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="font-bold text-lg">Thomas Brown</h3>
                    <p className="text-center text-gray-600 text-sm line-clamp-2 mb-2">
                      First-time homebuyer specialist and mortgage advisor
                    </p>
                    <div className="flex items-center">
                      <div className="flex">
                        {"★★★★★".split("").map((star, i) => (
                          <span key={i} className="text-yellow-400">
                            {star}
                          </span>
                        ))}
                      </div>
                      <span className="ml-1 text-sm font-medium">4.9</span>
                    </div>
                  </div>
                </div>

                {/* Expert Card 4 */}
                <div className="expert-card rounded-lg shadow-md border border-transparent hover:border-[#E6E1FF] transition-all p-4 cursor-pointer">
                  <div className="flex flex-col items-center">
                    <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4">
                      <Image
                        src="/placeholder.svg?height=96&width=96"
                        alt="Profile photo of Olivia Garcia"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="font-bold text-lg">Olivia Garcia</h3>
                    <p className="text-center text-gray-600 text-sm line-clamp-2 mb-2">
                      Property renovation and home staging consultant
                    </p>
                    <div className="flex items-center">
                      <div className="flex">
                        {"★★★★☆".split("").map((star, i) => (
                          <span key={i} className="text-yellow-400">
                            {star}
                          </span>
                        ))}
                      </div>
                      <span className="ml-1 text-sm font-medium">4.7</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-r from-transparent to-white pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
