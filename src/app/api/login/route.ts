import { NextResponse } from "next/server"
import { users } from "@/data/users/users"
import { UserReqType } from "@/types/users"

export async function POST(req: Request) {
  const body: UserReqType = await req.json()

  const user = users.find(
    (item) => item.login === body.login && item.password === body.password
  )

  if (!user) {
    return new Response("Unauthorized", {
      status: 401,
    })
  }

  return NextResponse.json({ token: user?.token })
}
