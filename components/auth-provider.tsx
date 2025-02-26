"use client";

import { createAuthClient } from "better-auth/react";

// Create a better-auth client for the React components
export const authClient = createAuthClient();

// AuthProvider component to wrap our app
export function AuthProvider({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
