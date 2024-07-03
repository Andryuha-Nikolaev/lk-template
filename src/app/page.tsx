import { cookies } from "next/headers"
import LoginBlock from "@/features/LoginBlock/LoginBlock"

export default async function Home() {
  const cookieStore = cookies()
  const isAdult = cookieStore.get("is_adult")

  return <LoginBlock />
}
