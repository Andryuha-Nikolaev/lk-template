import { fetchData } from "@/api/fetchData"
import { UserType } from "@/types/users"
import { cookies } from "next/headers"

export async function getUser() {
  const cookieStore = cookies()
  const token = cookieStore.get("token")?.value

  let user: UserType | null = null

  await fetchData<UserType>("user", {
    cookies: `token=${token}`,
  })
    .then((data) => {
      user = data
    })
    .catch((error) => {
      console.error("Fetch error:", error)
    })

  return user ? (user as UserType) : null
}
