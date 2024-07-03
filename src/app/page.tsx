import LoginBlock from "@/features/LoginBlock/LoginBlock"
import { redirect } from "next/navigation"
import { getUser } from "@/api/user/getUser"

export default async function Home() {
  const user = await getUser()

  if (user) {
    redirect("/account")
  }

  return <LoginBlock />
}
