import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { PrismaClient } from "@prisma/client";

// Create a global Prisma instance to avoid creating multiple instances in development
const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };
export const prisma = globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "sqlite",
  }),
  // Enable email and password authentication
  emailAndPassword: {
    enabled: true,
    autoSignIn: true, // Auto sign in after registration
  },
  // Define which OAuth providers to use
  providers: [
    // We'll add OAuth providers later
  ],
  // Session configuration
  session: {
    expiresIn: 30 * 24 * 60 * 60, // 30 days
    updateAge: 24 * 60 * 60, // 1 day
    freshAge: 60 * 60, // 1 hour - session is considered fresh for 1 hour
  },
});
