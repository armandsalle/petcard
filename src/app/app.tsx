import { trpc } from "@app/helpers/trpc"
import { router } from "@app/router"
import { Toaster } from "@app/ui/sonner"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { httpBatchLink } from "@trpc/client"
import { createTRPCQueryUtils } from "@trpc/react-query"
import { StrictMode, useState } from "react"
import { RouterProvider } from "react-router-dom"

const _queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
})

const _trpcClient = trpc.createClient({
  links: [
    httpBatchLink({
      url: "/api/trpc",
    }),
  ],
})

export const trpcUtils = createTRPCQueryUtils({
  queryClient: _queryClient,
  client: _trpcClient,
})

export function App() {
  const [queryClient] = useState(() => _queryClient)
  const [trpcClient] = useState(() => _trpcClient)

  return (
    <StrictMode>
      <trpc.Provider client={trpcClient} queryClient={queryClient}>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </trpc.Provider>
      <Toaster position="top-right" />
    </StrictMode>
  )
}
