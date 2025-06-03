// import { PrismaClient } from '@/generated/prisma'
// import { withAccelerate } from '@prisma/extension-accelerate'

// const globalForPrisma = global as unknown as { 
//     prisma: PrismaClient
// }

// const prisma = globalForPrisma.prisma || new PrismaClient().$extends(withAccelerate())

// if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

// export default prisma


// const globalForPrisma = global as unknown as { prisma: PrismaClient };

// export const prisma =
//   globalForPrisma.prisma || new PrismaClient();

// if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
import { PrismaClient } from '@prisma/client';
import { PrismaNeon } from '@prisma/adapter-neon';
import { neonConfig } from '@neondatabase/serverless';
import dotenv from 'dotenv';

import ws from 'ws';

dotenv.config();
neonConfig.webSocketConstructor = ws;

const connectionString = `${process.env.DATABASE_URL}`;

const globalForPrisma = global as unknown as { prisma: PrismaClient };

const adapter = new PrismaNeon({ connectionString });
const prisma = globalForPrisma.prisma || new PrismaClient({adapter});

if (process.env.NODE_ENV === 'development') globalForPrisma.prisma = prisma;

export default prisma;