import { CreateFamily } from "@/_modules_/familly/client/create-family"
import { ShowFamilyName } from "@/_modules_/familly/client/show-family-name"
import { trpc } from "@app/helpers/trpc"
import { Skeleton } from "@app/ui/skeleton"

export function Home() {
  const getFamilyNameQuery = trpc.family.getFamilyName.useQuery()

  if (getFamilyNameQuery.status === "pending") {
    return (
      <div className="py-4">
        <Skeleton className="h-8 w-[300px]" />
      </div>
    )
  }

  if (getFamilyNameQuery.status === "error") {
    return (
      <div className="py-4">
        <div>Unable to get your family...</div>
      </div>
    )
  }

  const familyName = getFamilyNameQuery.data?.name

  return (
    <div className="py-4">
      {familyName ? (
        <ShowFamilyName familyName={familyName} />
      ) : (
        <CreateFamily />
      )}
    </div>
  )
}
