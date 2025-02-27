import { betterAuth } from "better-auth";
import Database from "better-sqlite3";

// Create a database connection
const db = new Database("./sqlite.db");

// Create a global Prisma instance to avoid creating multiple instances in development
export const auth = betterAuth({
  database: db,
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    github: {
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    },
  },
});
