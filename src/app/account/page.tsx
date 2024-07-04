import { redirect } from "next/navigation"
import { getUser } from "@/api/user/getUser"
import Header from "@/components/global/Header/Header"
import AccountBlock from "@/features/AccountBlock/AccountBlock"
import { ReadonlyURLSearchParams } from "next/navigation"

type Props = {
  searchParams: ReadonlyURLSearchParams
}

export default async function Account({ searchParams }: Props) {
  const user = await getUser()

  if (!user) {
    redirect("/")
  }
  const urlSearchParams = new URLSearchParams(searchParams)
  const status = urlSearchParams.get("status") || "all"
  const page = urlSearchParams.get("page") || "1"
  const search = urlSearchParams.get("search") || ""

  let tasks = user.tasks

  tasks = tasks.filter((item) =>
    status === "open"
      ? item.status === "in_progress" || item.status === "registred"
      : status === "close"
        ? item.status === "closed"
        : status === "pending"
          ? item.status === "pending_approval" || item.status === "completed"
          : item
  )
  if (search) {
    tasks = tasks.filter((item) =>
      item.theme.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    )
  }

  const length = tasks.length

  tasks = tasks.slice(+page * 10 - 10, +page * 10)

  return (
    <div>
      <Header user={user} />
      <AccountBlock tasks={tasks} tasksLength={length} />
    </div>
  )
}
