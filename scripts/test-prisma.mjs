import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  try {
    const user = await prisma.user.findFirst()
    console.log('Successfully connected to DB. Found user:', user)
  } catch (e) {
    console.error('Error connecting to DB:', e)
  } finally {
    await prisma.$disconnect()
  }
}

main()
