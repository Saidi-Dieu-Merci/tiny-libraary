import { getDBConnection } from "@/lib/db";
import categories from "../data/categories.json";

async function seedCategories() {
  const db = await getDBConnection();

  // Create the categories table if it doesn't exist
  await db.exec(`
    CREATE TABLE IF NOT EXISTS categories (
      slug TEXT PRIMARY KEY,
      name TEXT NOT NULL
    )
  `);

  // Prepare the insert statement
  const insertCategory = await db.prepare(`
    INSERT OR REPLACE INTO categories (
      slug,
      name
    ) VALUES (?, ?)
  `);

  // Insert each category from the JSON
  for (const category of categories) {
    await insertCategory.run(category.slug, category.name);
  }

  await insertCategory.finalize();
  await db.close();

  console.log(`✅ Seeded ${categories.length} categories`);
}

// Run the seeding function
seedCategories().catch((error) => {
  console.error("Seeding failed:", error);
});
