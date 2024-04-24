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

// PUBLIC_ASTRO_APP_CLERK_PUBLISHABLE_KEY="pk_test_Y2hpZWYtZWdyZXQtNjUuY2xlcmsuYWNjb3VudHMuZGV2JA"
// CLERK_SECRET_KEY="sk_test_8lEuyUT4VBxnj2FIM494Sr5ew2vifL1lkymqrA4sez"

// PUBLIC_ASTRO_APP_CLERK_SIGN_IN_URL="/" # update this if sign in page exists on another path
// PUBLIC_ASTRO_APP_CLERK_SIGN_UP_URL="/" # update this if sign up page exists on another path

// DRIZZLE_DATABASE_URL="postgresql://petcarddb_owner:LjbpZBM93iPa@ep-late-lab-a281kbc8.eu-central-1.aws.neon.tech/petcarddb?sslmode=require"
