import BookCard from "@/components/BookCard";
import type { Book } from "@/lib/types";

export default function BooksGrid({
  books,
  categoryName,
}: {
  books: Book[];
  categoryName?: string; // ← the ? makes it optional
}) {
  return (
    <div className="container px-4 py-8 pt-28 mx-auto">
      <h1 className="mb-8 text-3xl font-bold">{categoryName || "Books"}</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}
