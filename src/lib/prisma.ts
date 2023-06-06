const { PrismaClient } = require('@prisma/client');

// Create an instance of the Prisma client
const prisma = new PrismaClient();

// Export the Prisma client instance
export default prisma;
