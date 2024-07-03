import { redirect } from "next/navigation"
import { getUser } from "@/api/user/getUser"

type Props = {
  params: {
    id: string
  }
}

export default async function Task({ params: { id } }: Props) {
  const user = await getUser()

  if (!user) {
    redirect("/")
  }

  return <div>{id}</div>
}
