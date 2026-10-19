import CategoryNav from "@/components/CategoriesNav"

export default function BooksLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative flex flex-col min-h-screen md:flex-row">
      <CategoryNav />

      
      <main >
        {children}
      </main>
    </div>
  );
}
