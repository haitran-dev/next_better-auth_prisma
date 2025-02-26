import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 text-center">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
        Welcome to <span className="text-primary">My App</span>
      </h1>
      <p className="mt-6 text-lg sm:text-xl max-w-2xl text-muted-foreground">
        A modern authentication solution with social logins and more features to
        make your life easier.
      </p>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <Link href="/login?signup=true">
          <Button size="lg" className="h-12 px-8">
            Get Started
          </Button>
        </Link>
        <Link href="/login">
          <Button variant="outline" size="lg" className="h-12 px-8">
            Log in
          </Button>
        </Link>
      </div>
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl">
        <div className="flex flex-col items-center p-6 bg-card rounded-lg border">
          <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-primary"
              aria-hidden="true"
            >
              <path d="M19 11V9a1 1 0 0 0-1-1h-10a1 1 0 0 0-1 1v2" />
              <path d="M12 12v5" />
              <path d="M10 15.5l2 2 2-2" />
              <path d="M4 15v2a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-2" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Google Login</h3>
          <p className="text-muted-foreground text-center">
            Quickly sign in with your Google account.
          </p>
        </div>
        <div className="flex flex-col items-center p-6 bg-card rounded-lg border">
          <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-primary"
              aria-hidden="true"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">GitHub Login</h3>
          <p className="text-muted-foreground text-center">
            Connect with your GitHub account easily.
          </p>
        </div>
        <div className="flex flex-col items-center p-6 bg-card rounded-lg border">
          <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-primary"
              aria-hidden="true"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
              <path d="m14.5 9-5 5" />
              <path d="m9.5 9 5 5" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Secure Auth</h3>
          <p className="text-muted-foreground text-center">
            Your data is always safe and protected.
          </p>
        </div>
      </div>
    </div>
  );
}
