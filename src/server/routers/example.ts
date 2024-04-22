import { publicProcedure, router } from "../init"

export default router({
  public: publicProcedure.query(async () => {
    await new Promise<boolean>((res) => setTimeout(() => res(true), 1000))
    return "Hello from server!"
  }),
  // private: privateProcedure.query(({ ctx }) => {
  //   return `Hello ${ctx.session ?? "Jhon"}`
  // }),
})
