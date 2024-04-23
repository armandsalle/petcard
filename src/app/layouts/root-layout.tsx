import { Nav } from "@app/components/nav"
import { ClerkProvider } from "@clerk/clerk-react"
import { Outlet } from "react-router-dom"

const PUBLISHABLE_KEY = import.meta.env.PUBLIC_ASTRO_APP_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

export function RootLayout() {
  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <Nav />
      <main>
        <Outlet />
      </main>
    </ClerkProvider>
  )
}
