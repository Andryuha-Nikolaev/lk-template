import { users } from "@/data/users/users"
import { UserType } from "@/types/users"
import { NextResponse } from "next/server"

export async function GET(req: Request) {
  // Получение заголовка cookie из запроса
  const cookieHeader = req.headers.get("cookie")

  if (!cookieHeader) {
    return new Response("Unauthorized", {
      status: 401,
    })
  }

  // Разбор куков из строки заголовка
  const cookies = Object.fromEntries(
    cookieHeader.split("; ").map((cookie) => {
      const [key, ...rest] = cookie.split("=")
      return [key, rest.join("=")]
    })
  )

  // Извлечение значения куки токена
  const token = cookies.token

  if (!token) {
    return new Response("Unauthorized", {
      status: 401,
    })
  }

  const user = users.find((item) => item.token === token)

  if (!user) {
    return new Response("Unauthorized", {
      status: 401,
    })
  }

  const currentUser: UserType = {
    login: user.login,
    notifications: user.notifications,
    tasks: user.tasks,
  }

  return NextResponse.json(currentUser)
}
