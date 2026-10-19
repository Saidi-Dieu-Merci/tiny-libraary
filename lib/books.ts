import { getDBConnection } from "@/lib/db";

export async function getBooks(search?: string) {
  const db = await getDBConnection();
  let sql = "SELECT * FROM books";
  const placeholders = [];

  if (search) {
    sql += " WHERE name LIKE ?";
    placeholders.push(`%${search}%`);
  }

  try {
    const rows = await db.all(sql, placeholders);
    return rows;
  } finally {
    await db.close();
  }
}

export async function getBooksByCategorySlug(categorySlug: string) {
  const db = await getDBConnection();
  try {
    return await db.all(`SELECT * FROM books WHERE category=?`, [categorySlug]);
  } finally {
    await db.close();
  }
}

export async function getBookById(id: string) {
  const db = await getDBConnection();
  try {
    return await db.get("SELECT * FROM books WHERE id=?", [id]);
  } finally {
    await db.close();
  }
}
