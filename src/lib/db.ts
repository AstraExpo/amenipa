import "dotenv/config"
import { Pool } from 'pg'
import { PrismaPg } from "@prisma/adapter-pg"
import { PrismaClient } from "../../generated/prisma/client" // Note: Path must match your schema.prisma output

const connectionString = process.env.DATABASE_URL

if (!connectionString) {
  throw new Error("DATABASE_URL is not defined in the environment.")
}

// Global declaration prevents multiple instances during dev HMR
const globalForPrisma = globalThis as unknown as { prisma: PrismaClient | undefined }

export const prisma = globalForPrisma.prisma || (() => {
  const pool = new Pool({ connectionString })
  const adapter = new PrismaPg(pool)
  return new PrismaClient({ adapter })
})()

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma