import { privateProcedure, router } from "../init"

export default router({
  public: privateProcedure.query(async ({ ctx }) => {
    return ctx.auth.userId
  }),
})
