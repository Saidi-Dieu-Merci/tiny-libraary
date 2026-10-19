import { getDBConnection } from "@/lib/db";
import books from "@/lib/data/books.json";

async function seedBooks() {
  const db = await getDBConnection();

  // Create the books table if it doesn't exist
  await db.exec(`
    CREATE TABLE IF NOT EXISTS books (
      id INTEGER PRIMARY KEY,                                   
      name TEXT NOT NULL,
      author TEXT NOT NULL,
      likes INTEGER NOT NULL DEFAULT 0,
      image TEXT NOT NULL,
      category TEXT NOT NULL,
      dateAdded TEXT NOT NULL
    )
  `);

  // Prepare the insert statement
  const insertBook = await db.prepare(`
    INSERT OR REPLACE INTO books (
      id,
      name,
      author,
      likes,
      image,
      category,
      dateAdded
    ) VALUES (?, ?, ?, ?, ?, ?, ?)
  `);

  // Insert each book from the JSON
  for (const book of books) {
    await insertBook.run(
      book.id,
      book.name,
      book.author,
      book.likes,
      book.image,
      book.category,
      book.dateAdded,
    );
  }

  await insertBook.finalize();
  await db.close();

  console.log(`✅ Seeded ${books.length} books`);
}

// Run the seeding function
seedBooks().catch((error) => {
  console.error("Seeding failed:", error);
});
