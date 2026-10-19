import HeroImage from "@/public/hero-image.png";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 pt-24">
      <section className="container mx-auto grid md:grid-cols-2 gap-8 px-6 py-16">
        {/* Left side: Text + Button */}
        <div className="flex flex-col justify-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            BROWSE BOOKS
          </h2>

          <p className="text-xl text-gray-700">Find your next favourite book</p>
          <p className="text-gray-600 leading-relaxed">
            Tiny Library is a cosy corner of the web where readers discover
            hand‑picked titles across every genre, from timeless classics to
            hidden indie gems.
          </p>
          <Link href="/books">
            <button
              className="w-fit px-[8px] py-[4px] text-black text-sm font-medium 
             bg-white border border-black rounded 
             hover:bg-black hover:text-white transition"
            >
              Browse Books
            </button>
          </Link>
        </div>

        {/* Right side: Circular Image */}
        <div className="flex items-center justify-center">
          <div className="rounded-full overflow-hidden w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 shadow-lg">
            <img
              src={HeroImage.src}
              alt="Browse Books Graphic"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
