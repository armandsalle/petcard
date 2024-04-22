import { appRouter, createContext } from "../../../server"
import { fetchRequestHandler } from "@trpc/server/adapters/fetch"
import type { APIRoute } from "astro"

export const ALL: APIRoute = ({ request, locals }) => {
  return fetchRequestHandler({
    endpoint: "/api/trpc",
    req: request,
    router: appRouter,
    createContext: (opts) => {
      return createContext(opts, locals)
    },
  })
}
