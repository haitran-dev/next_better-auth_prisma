"use client";

import { createAuthClient } from "better-auth/react";

// Create a client for better-auth
export const { useSession, signIn, signOut, signUp } = createAuthClient();

// The client will handle things like:
// - authClient.signIn.email({ email, password })
// - authClient.signUp.email({ email, password, name })
// - authClient.signOut()
// - authClient.useSession()
