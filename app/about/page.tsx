import AboutImage from "@/public/ocean-graphic.jpg"
import Link from "next/link"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800 pt-24">

      {/* Hero Section */}
      <section className="grid md:grid-cols-2 gap-12 items-center px-6 py-20 bg-white">
        <div>
          <img
            src={AboutImage.src}
            alt="Coastline with waves"
            className="rounded-lg shadow-lg w-full object-cover"
          />
        </div>
        <div className="text-left md:pl-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">About Tiny Library</h2>
          <h3 className="text-xl font-semibold mb-4 text-gray-700">Small shelf, big impact</h3>
          <p className="mb-6 leading-relaxed text-gray-600">
            Tiny Library started as a simple idea: make it easier for curious readers
            to actually find books they'll love, not just scroll endless lists.
            Every title here is chosen with care, not algorithms.
          </p>
          <Link href="/about/contact">
            <button className="px-5 py-2 bg-blue-600 text-black text-sm font-medium 
             bg-white border border-black rounded 
             hover:bg-black hover:text-white transition">
              Contact Us
            </button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-20 bg-white">
        <div className="grid md:grid-cols-3 gap-12 text-center">
          <div className="p-6 rounded-lg hover:bg-gray-50 transition">
            <div className="mx-auto mb-4 h-12 w-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-600">
              📚
            </div>
            <h2 className="text-lg font-semibold mb-2">Curated, not crowded</h2>
            <p className="text-gray-600">
              Tiny Library keeps the catalogue intentionally small so every book feels like a recommendation.
            </p>
          </div>
          <div className="p-6 rounded-lg hover:bg-gray-50 transition">
            <div className="mx-auto mb-4 h-12 w-12 flex items-center justify-center rounded-full bg-green-100 text-green-600">
              🔍
            </div>
            <h2 className="text-lg font-semibold mb-2">Easy to browse</h2>
            <p className="text-gray-600">
              Clear categories and simple descriptions make it quick to choose what you actually want to read next.
            </p>
          </div>
          <div className="p-6 rounded-lg hover:bg-gray-50 transition">
            <div className="mx-auto mb-4 h-12 w-12 flex items-center justify-center rounded-full bg-purple-100 text-purple-600">
              ❤️
            </div>
            <h2 className="text-lg font-semibold mb-2">Readers first</h2>
            <p className="text-gray-600">
              Every part of Tiny Library is designed to help you spend less time searching and more time reading.
            </p>
          </div>
        </div>
      </section>

      {/* Ethos Section */}
      <section className="px-6 py-20 bg-gray-50 text-center">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Our Ethos</h2>
        <p className="max-w-3xl mx-auto text-lg leading-relaxed text-gray-700">
          At Tiny Library, we believe a good book shouldn't be hard to find.
          Our ethos is to create a small, carefully curated space where every title earns its place on the shelf
          and readers can trust that anything they pick up is worth their time.
        </p>
        <p className="max-w-3xl mx-auto mt-6 text-lg leading-relaxed text-gray-700">
          Instead of overwhelming you with thousands of options, Tiny Library focuses on a modest collection
          that feels personal and approachable. We want readers to feel like they've stepped into a cosy,
          well-loved library where someone has already done the hard work of sorting through the noise.
        </p>
      </section>
    </main>
  )
}
