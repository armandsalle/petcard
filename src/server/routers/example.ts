import { products } from "@server/db/schema"
import { privateProcedure, router } from "@server/init"
import { eq } from "drizzle-orm"
import { z } from "zod"

export default router({
  public: privateProcedure.query(async ({ ctx }) => {
    return ctx.auth.userId
  }),
  getProducts: privateProcedure.query(async ({ ctx }) => {
    const db = await ctx.db.select().from(products)

    return db
  }),
  getProductById: privateProcedure
    .input(
      z.object({
        id: z.number(),
      }),
    )
    .query(async ({ ctx, input }) => {
      const db = await ctx.db
        .select()
        .from(products)
        .limit(1)
        .where(({ id }) => eq(id, input.id))

      return db[0]
    }),
  setProduct: privateProcedure
    .input(
      z.object({
        description: z.string(),
        name: z.string(),
        price: z.number(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const db = await ctx.db.insert(products).values({
        description: input.description,
        name: input.name,
        price: input.price,
      })

      return db
    }),
  deleteProductById: privateProcedure
    .input(z.object({ id: z.number() }))
    .mutation(async ({ ctx, input }) => {
      await ctx.db.delete(products).where(eq(products.id, input.id))

      return true
    }),
})
