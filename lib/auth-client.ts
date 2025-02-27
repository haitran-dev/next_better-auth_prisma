import { createAuthClient } from "better-auth/react";
export const authClient = createAuthClient({
  baseURL: "http://localhost:3000", // the base url of your auth server
});

export const signInGithub = async () => {
  const data = await authClient.signIn.social({
    provider: "github",
  });

  return data;
};
