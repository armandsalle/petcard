import { privateProcedure, router } from "@server/init"

export default router({
  public: privateProcedure.query(async ({ ctx }) => {
    return ctx.auth.userId
  }),
})
