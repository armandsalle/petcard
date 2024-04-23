import example from "./example"
import { router } from "@server/init"

export const appRouter = router({
  example,
})

export type IAppRouter = typeof appRouter
