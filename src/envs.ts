import { createEnv } from "@t3-oss/env-core"
import "dotenv/config"
import { z } from "zod"

export const env = createEnv({
  client: {
    PUBLIC_ASTRO_APP_CLERK_PUBLISHABLE_KEY: z.string(),
    PUBLIC_ASTRO_APP_CLERK_SIGN_IN_URL: z.string(),
    PUBLIC_ASTRO_APP_CLERK_SIGN_UP_URL: z.string(),
  },
  server: {
    CLERK_SECRET_KEY: z.string(),
    DRIZZLE_DATABASE_URL: z.string(),
  },
  clientPrefix: "PUBLIC_",
  runtimeEnv: {
    PUBLIC_ASTRO_APP_CLERK_PUBLISHABLE_KEY:
      process.env.PUBLIC_ASTRO_APP_CLERK_PUBLISHABLE_KEY,
    CLERK_SECRET_KEY: process.env.CLERK_SECRET_KEY,
    PUBLIC_ASTRO_APP_CLERK_SIGN_IN_URL:
      process.env.PUBLIC_ASTRO_APP_CLERK_SIGN_IN_URL,
    PUBLIC_ASTRO_APP_CLERK_SIGN_UP_URL:
      process.env.PUBLIC_ASTRO_APP_CLERK_SIGN_UP_URL,
    DRIZZLE_DATABASE_URL: process.env.DRIZZLE_DATABASE_URL,
  },
})
