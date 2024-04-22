import type { Context } from "./context"
import { TRPCError, initTRPC } from "@trpc/server"

const t = initTRPC.context<Context>().create()

export const router = t.router
export const publicProcedure = t.procedure

const checkAuth = t.middleware(async (opts) => {
  return opts.next({
    ctx: {},
  })
})

export const privateProcedure = publicProcedure.use(checkAuth)
