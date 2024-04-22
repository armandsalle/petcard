import { trpc } from "./helpers/trpc"

export function Test() {
  const userQuery = trpc.example.public.useQuery(undefined, {
    retry: false,
  })

  return (
    <div>
      <p>{userQuery.status}</p>
      <p>{userQuery.data}</p>
    </div>
  )
}
