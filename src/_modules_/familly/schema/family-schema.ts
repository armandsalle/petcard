import { z } from "zod"

export const createFamilyNameSchema = z.object({
  name: z.string().min(1).max(32),
})
export type CreateFamilyNameSchema = z.infer<typeof createFamilyNameSchema>
