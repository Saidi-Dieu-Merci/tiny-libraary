import sqlite3 from 'sqlite3'
import { open } from 'sqlite'
import path from 'node:path'

export async function getDBConnection() {
  const dbPath = path.join(process.cwd(), 'tinyLibrary.db')

  const db = await open({
    filename: dbPath,
    driver: sqlite3.Database
  })

  // Tell SQLite to wait up to 3 seconds if locked
  await db.exec("PRAGMA busy_timeout = 3000;")

  return db
}
 
 

 