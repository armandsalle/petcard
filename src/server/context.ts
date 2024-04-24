import { db } from "./db"
import type { FetchCreateContextFnOptions } from "@trpc/server/adapters/fetch"

interface CreateInnerContextOptions
  extends Partial<FetchCreateContextFnOptions> {
  locals: App.Locals
}

export async function createContextInner(opts?: CreateInnerContextOptions) {
  return {
    locals: opts?.locals,
    db,
  }
}

export async function createContext(
  _: FetchCreateContextFnOptions,
  locals: App.Locals,
) {
  const contextInner = await createContextInner({ locals })

  return {
    ...contextInner,
  }
}

export type Context = Awaited<ReturnType<typeof createContextInner>>
