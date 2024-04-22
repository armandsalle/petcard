import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/clerk-react"
import { Outlet } from "react-router-dom"

const PUBLISHABLE_KEY = import.meta.env.PUBLIC_ASTRO_APP_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

export function AuthLayout() {
  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <header className="flex items-center justify-between bg-gray-200 px-8 py-4">
        <div>Pet card</div>
        <div>
          <SignedOut>
            <SignInButton>
              <button className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
                Sign In
              </button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </ClerkProvider>
  )
}
