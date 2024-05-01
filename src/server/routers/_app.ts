import example from "./example"
import { familyRouter } from "@/_modules_/familly/server/family-router"
import { router } from "@server/init"

export const appRouter = router({
  example,
  family: familyRouter,
})

export type IAppRouter = typeof appRouter
