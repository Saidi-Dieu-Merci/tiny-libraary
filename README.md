📚 Tiny Library
A full‑stack Next.js + SQLite application that lets users browse, search, and filter books by category. Built with TypeScript, Tailwind CSS, and server components.
🚀 Features
Book catalog: Grid of book cards with images, authors, categories, and likes

Categories navigation: Sidebar with dynamic category links

Search: Improved search form to filter books by title or author

Responsive UI: Tailwind CSS for clean, mobile‑friendly layouts

Database seeding: SQLite seeded with categories and books via TypeScript scripts

TypeScript safety: Strong typing for Book and Category models

🛠 Tech Stack
Next.js 14 (App Router, Server Components)

TypeScript

SQLite for persistent storage

Tailwind CSS for styling

ts-node + tsconfig-paths for running seed scripts with path aliases

📂 Project Structure
Code
├── app/
│   └── books/
│       └── page.tsx        # Books page
├── components/
│   ├── BookCard.tsx        # Single book card
│   ├── BooksGrid.tsx       # Grid layout
│   ├── CategoriesNav.tsx   # Sidebar navigation
│   └── SearchForm.tsx      # Search form
├── lib/
│   ├── db.ts               # SQLite connection
│   ├── books.ts            # getBooks() query
│   ├── categories.ts       # getCategories() query
│   └── types.ts            # TypeScript models
├── lib/seeds/
│   ├── seed_categories.ts  # Seed categories
│   └── seed_books.ts       # Seed books
├── data/
│   ├── categories.json     # Category seed data
│   └── books.json          # Book seed data
⚙️ Setup & Installation
Clone the repo:

bash
git clone https://github.com/yourusername/tiny-library.git
cd tiny-library
Install dependencies:

bash
npm install
Run database seeds:

bash
npm run seed
Start the dev server:

bash
npm run dev
🌟 Future Improvements
Live search with instant filtering

Book detail pages with extended info

Pagination or infinite scroll for large datasets

Deploy on Vercel for easy sharing

✨ Learnings
This project helped me practice:

Debugging TypeScript + Next.js alias issues

Writing seed scripts for SQLite

Building responsive layouts with Tailwind

Handling runtime errors gracefully with prop typing and guards
