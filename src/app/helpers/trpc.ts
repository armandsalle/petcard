import type { IAppRouter } from "../../server/routers"
import {
  createTRPCReact,
  type inferReactQueryProcedureOptions,
} from "@trpc/react-query"
import type { inferRouterInputs, inferRouterOutputs } from "@trpc/server"

export type ReactQueryOptions = inferReactQueryProcedureOptions<IAppRouter>
export type RouterInputs = inferRouterInputs<IAppRouter>
export type RouterOutputs = inferRouterOutputs<IAppRouter>

export const trpc = createTRPCReact<IAppRouter>()
