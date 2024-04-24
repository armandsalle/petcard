import { env } from "@/envs"
import type { Config } from "drizzle-kit"

export default {
  driver: "pg",
  schema: ["./src/server/db/schema.ts"],
  out: "./drizzle",
  dbCredentials: {
    connectionString: env.DRIZZLE_DATABASE_URL,
  },
  verbose: true,
  strict: true,
  tablesFilter: ["petcard_*"],
} satisfies Config
