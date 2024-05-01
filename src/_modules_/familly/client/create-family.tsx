import {
  type CreateFamilyNameSchema,
  createFamilyNameSchema,
} from "../schema/family-schema"
import { trpc } from "@app/helpers/trpc"
import { Button } from "@app/ui/button"
import { Input } from "@app/ui/input"
import { labelVariants } from "@app/ui/label"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "sonner"

export function CreateFamily() {
  const utils = trpc.useUtils()

  const createFamilyMutation = trpc.family.createFamilyName.useMutation({
    onError: (err) => {
      toast.error("Create family error", {
        description: err.message,
        dismissible: true,
        action: {
          label: "Close",
          onClick: () => undefined,
        },
      })
    },
    onSuccess: () => {
      void utils.family.getFamilyName.invalidate()
    },
  })

  const { handleSubmit, register, formState } = useForm<CreateFamilyNameSchema>(
    {
      resolver: zodResolver(createFamilyNameSchema),
    },
  )

  const onSubmit = handleSubmit((data) => {
    createFamilyMutation.mutate({
      name: data.name,
    })
  })

  return (
    <form onSubmit={onSubmit} className="flex w-full max-w-56 flex-col gap-4">
      <label>
        <span className={labelVariants()}>Family name</span>
        <Input type="text" placeholder="Bibou" {...register("name")} />
        {formState.errors.name ? <p>{formState.errors.name.message}</p> : null}
      </label>
      <Button
        type="submit"
        disabled={formState.isSubmitting || createFamilyMutation.isPending}
      >
        Create my family
      </Button>
    </form>
  )
}
