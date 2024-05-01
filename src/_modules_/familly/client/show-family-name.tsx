type ShowFamilyNameProps = {
  familyName: string
}

export function ShowFamilyName(props: ShowFamilyNameProps) {
  return (
    <p className="text-2xl font-semibold tracking-tight">
      The {props.familyName} family
    </p>
  )
}
