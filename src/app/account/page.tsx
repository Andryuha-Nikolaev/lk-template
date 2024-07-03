import { redirect } from "next/navigation"
import { getUser } from "@/api/user/getUser"

export default async function Account() {
  const user = await getUser()

  if (!user) {
    redirect("/")
  }

  return <div>aккаунт</div>
}
