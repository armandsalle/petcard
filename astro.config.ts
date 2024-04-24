import react from "@astrojs/react"
import tailwind from "@astrojs/tailwind"
import vercel from "@astrojs/vercel/serverless"
import clerk from "astro-clerk-auth"
import { defineConfig } from "astro/config"

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: vercel(),
  vite: {
    optimizeDeps: {
      exclude: ["astro-clerk-auth"],
    },
  },
  integrations: [
    react({}),
    tailwind(),
    clerk({
      afterSignInUrl: "/",
      afterSignUpUrl: "/",
      afterSignOutUrl: "/",
    }),
  ],
})
