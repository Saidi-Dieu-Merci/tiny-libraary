import BooksGrid from "@/components/BooksGrid";
import { getBooksByCategorySlug } from "@/lib/books";
import { getCategoryBySlug } from "@/lib/categories";
export default async function CategoryPage({
  params,
}: {
  params: Promise<{ categorySlug: string }>;
}) {
  const { categorySlug } = await params;
  const books = await getBooksByCategorySlug(categorySlug);
  const category = await getCategoryBySlug(categorySlug);

  return <BooksGrid books={books} categoryName={category.name} />;
}
