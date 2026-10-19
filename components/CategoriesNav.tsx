import NavLink from "@/components/NavLink";
import { getCategories } from "@/lib/categories";
import type { Category } from "@/lib/types";
export default async function CategoriesNav() {
  const categories: Category[] = await getCategories();

  return (
    <aside className="bg-white shadow-md rounded-lg p-4 w-full md:w-64 pt-28">
      <nav>
        <ul className="flex overflow-x-auto gap-4 md:flex-col md:space-y-2 md:overflow-visible scrollbar-hide">
          {/* Static link */}
          <NavLink href="/books" exact>
            ALL
          </NavLink>
          {categories.map((category) => (
            <NavLink
              key={category.slug}
              href={`/books/categories/${category.slug}`}
            >
              {category.name}
            </NavLink>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
