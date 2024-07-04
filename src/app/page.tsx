import LoginBlock from "@/features/LoginBlock/LoginBlock"
import { redirect } from "next/navigation"
import { getUser } from "@/api/user/getUser"
import Header from "@/components/global/Header/Header"

export default async function Home() {
  const user = await getUser()

  if (user) {
    redirect("/account")
  }

  return (
    <>
      <Header />
      <LoginBlock />
    </>
  )
}
