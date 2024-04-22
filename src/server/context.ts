import type { inferAsyncReturnType } from "@trpc/server"
import type { FetchCreateContextFnOptions } from "@trpc/server/adapters/fetch"

interface CreateInnerContextOptions
  extends Partial<FetchCreateContextFnOptions> {
  session: null
}

export async function createContextInner(opts?: CreateInnerContextOptions) {
  return {
    session: opts?.session,
  }
}

export async function createContext(opts: FetchCreateContextFnOptions) {
  const session = null

  const contextInner = await createContextInner({ session })

  return {
    ...contextInner,
  }
}

export type Context = inferAsyncReturnType<typeof createContextInner>
