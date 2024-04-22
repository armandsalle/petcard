import type { Context } from "./context"
import { TRPCError, initTRPC } from "@trpc/server"

const t = initTRPC.context<Context>().create()

export const router = t.router
export const publicProcedure = t.procedure

const checkAuth = t.middleware(async (opts) => {
  const auth = opts.ctx.locals?.auth()
  const currentUser = await opts.ctx.locals?.currentUser()

  if (!auth?.userId || !currentUser?.id) {
    throw new TRPCError({ code: "UNAUTHORIZED" })
  }

  return opts.next({
    ctx: {
      auth,
      currentUser,
    },
  })
})

export const privateProcedure = publicProcedure.use(checkAuth)
