import type { inferAsyncReturnType } from "@trpc/server"
import type { FetchCreateContextFnOptions } from "@trpc/server/adapters/fetch"

interface CreateInnerContextOptions
  extends Partial<FetchCreateContextFnOptions> {
  locals: App.Locals
}

export async function createContextInner(opts?: CreateInnerContextOptions) {
  return {
    locals: opts?.locals,
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

export type Context = inferAsyncReturnType<typeof createContextInner>
