import cloudflare from "@astrojs/cloudflare"
import react from "@astrojs/react"
import tailwind from "@astrojs/tailwind"
import clerk from "astro-clerk-auth"
import { defineConfig } from "astro/config"

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: cloudflare(),
  integrations: [
    react(),
    tailwind(),
    clerk({
      afterSignInUrl: "/",
      afterSignUpUrl: "/",
      afterSignOutUrl: "/",
    }),
  ],
})
