import { redirect, notFound } from "next/navigation"
import { getUser } from "@/api/user/getUser"
import Header from "@/components/global/Header/Header"
import TaskBlock from "@/features/TaskBlock/TaskBlock"

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

  const task = user.tasks.find((item) => item.id === id)

  if (!task) {
    notFound()
  }

  return (
    <div>
      <Header user={user} />
      <TaskBlock task={task} />
    </div>
  )
}
