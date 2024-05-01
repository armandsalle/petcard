import {
  doublePrecision,
  index,
  pgTable,
  serial,
  text,
} from "drizzle-orm/pg-core"

/**
 * products is an example
 */
export const products = pgTable("products", {
  id: serial("id").primaryKey(),
  name: text("name"),
  description: text("description"),
  price: doublePrecision("price"),
})

export type Product = typeof products.$inferSelect

export const familyTable = pgTable(
  "families",
  {
    id: serial("id").primaryKey(),
    name: text("name").notNull(),
    ownerId: text("owner_id").notNull().unique(),
  },
  (table) => {
    return {
      nameIdx: index("ownerId_idx").on(table.ownerId),
    }
  },
)

export type SelectFamily = typeof familyTable.$inferSelect
export type InsertFamily = typeof familyTable.$inferInsert
