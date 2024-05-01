import { createFamilyNameSchema } from "../schema/family-schema"
import { familyTable } from "@server/db/schema"
import { privateProcedure, router } from "@server/init"
import { TRPCError } from "@trpc/server"
import { eq } from "drizzle-orm"
import { Effect } from "effect"

export const familyRouter = router({
  getFamilyName: privateProcedure.query(async ({ ctx }) => {
    const currentUserId = ctx.currentUser.id

    const family = await ctx.db
      .select({
        name: familyTable.name,
        ownerId: familyTable.ownerId,
      })
      .from(familyTable)
      .limit(1)
      .where(({ ownerId }) => eq(ownerId, currentUserId))

    return family[0] || null
  }),
  createFamilyName: privateProcedure
    .input(createFamilyNameSchema)
    .mutation(async ({ ctx, input }) => {
      const currentUserId = ctx.currentUser.id
      const createFamily = Effect.tryPromise({
        try: () =>
          ctx.db
            .insert(familyTable)
            .values({
              name: input.name,
              ownerId: currentUserId,
            })
            .returning(),
        catch: () =>
          new TRPCError({
            code: "UNPROCESSABLE_CONTENT",
            message: "Unable to create a family",
          }),
      }).pipe(Effect.flatMap((newFamily) => Effect.succeed(newFamily[0])))

      return await Effect.runPromise(createFamily)
    }),
})
