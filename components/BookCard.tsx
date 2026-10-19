import Link from "next/link";
import AboutImage from "@/public/ocean-graphic.jpg";
import type { Book } from "@/lib/types";

type BookCardProps = {
  book?: Book; // allow undefined so we can guard
};

export default function BookCard({ book }: BookCardProps) {
  console.log("card received:", JSON.stringify(book)?.slice(0, 100));
  if (!book) {
    return (
      <div className="p-4 text-red-500 border border-red-300 rounded-md">
        ⚠️ No book data
      </div>
    );
  }

  return (
    <Link
      href={`/books/${book.id}`}
      className="block group hover:shadow-[0_5px_12px_rgba(0,0,0,0.1)] hover:-translate-y-[3px] transition-all"
    >
      <div
        className="overflow-hidden transition-shadow bg-white rounded-lg shadow-md hover:shadow-lg"
        role="article"
      >
        <div className="relative aspect-square">
          <img
            src={AboutImage.src}
            alt={book.name}
            className="absolute inset-0 object-cover w-full h-full"
          />
        </div>
        <div className="p-4">
          <div className="mb-4">
            <h2 className="text-xl font-semibold text-gray-800 line-clamp-2 leading-tight">
              {book.name}
            </h2>
          </div>
          <p className="text-gray-800 text-sm line-clamp-2 min-h-[2.5rem] leading-[1.25rem]">
            {book.author}
          </p>
          <div className="mt-2">
            <span className="inline-block bg-transparent border border-gray-400 rounded-full px-3 py-1 text-sm text-gray-800">
              {book.category}
            </span>
          </div>
          <div className="flex items-center mt-2 text-gray-600">
            <span>&hearts; {book.likes}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
