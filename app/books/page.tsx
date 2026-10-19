import SearchForm from "@/components/SearchForm";
import BooksGrid from "@/components/BooksGrid";

import { getBooks } from "@/lib/books";

export default async function BooksPage({
  searchParams,
}: {
  searchParams: Promise<{ search?: string }>;
}) {
  const search = (await searchParams).search?.toLowerCase() || "";
  const books = await getBooks(search);

  return (
    <div className="pt-28">
      <SearchForm />
      <BooksGrid books={books} />
    </div>
  );
}
