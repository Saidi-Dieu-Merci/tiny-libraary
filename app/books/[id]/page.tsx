import { getBookById } from "@/lib/books";
import AboutImage from "@/public/ocean-graphic.jpg";

export default async function BookPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const book = await getBookById(id);

  return (
    <div className="container max-w-6xl px-4 py-8 mx-auto pt-28">
      <article className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <figure className="relative overflow-hidden rounded-lg shadow-lg aspect-square">
          <img
            src={AboutImage.src}
            alt={book.name}
            className="absolute inset-0 object-cover w-full h-full"
          />
        </figure>

        <section className="flex flex-col justify-center h-full">
          <div
            className="flex items-center mb-2 text-2xl text-gray-600"
            role="status"
            aria-label="Likes count"
          >
            <span className="font-light" aria-label="model likes">
              &hearts; {book.likes}
            </span>
          </div>
          <h1 className="mb-6 text-4xl font-bold">{book.name}</h1>
          <span
            className="inline-block bg-transparent border border-gray-400 rounded-full px-3 py-1 text-sm text-gray-800 mb-6 w-fit"
            role="status"
            aria-label="Category"
          >
            {book.category}
          </span>

          <div className="mb-6 prose prose-lg max-w-none">
            <p className="leading-relaxed text-gray-700">{book.author}</p>
          </div>

          <footer className="text-sm text-gray-500">
            <time dateTime={book.dateAdded} className="block mb-2">
              Added on {new Date(book.dateAdded).toLocaleDateString()}
            </time>
          </footer>
        </section>
      </article>
    </div>
  );
}
