// Replace with actual MongoDB or PostgreSQL connection

// Example for MongoDB (install mongodb package):
// import { MongoClient } from 'mongodb'
// const client = new MongoClient(process.env.DATABASE_URL!)
// export const db = client.db('portfolio')

// Example for PostgreSQL (install pg package):
// import { Pool } from 'pg'
// export const pool = new Pool({
//   connectionString: process.env.DATABASE_URL
// })

// For now, we're using in-memory storage
export interface Project {
  id: string
  title: string
  description: string
  image?: string
  tags: string[]
  links?: { live: string; github: string }
  createdAt?: Date
}

export interface Contact {
  id: string
  name: string
  email: string
  subject: string
  message: string
  createdAt: Date
}

export interface Admin {
  id: string
  email: string
  passwordHash: string
}

// In-memory database (replace with real database)
export const storage = {
  projects: [] as Project[],
  contacts: [] as Contact[],
  admins: [] as Admin[]
}
