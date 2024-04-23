import { trpc } from "@app/helpers/trpc"

export function Home() {
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
