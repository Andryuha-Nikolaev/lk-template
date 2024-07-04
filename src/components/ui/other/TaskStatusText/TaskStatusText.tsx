import React from "react"
import s from "./TaskStatusText.module.scss"

const TaskStatusText = ({ taskStatus }: { taskStatus: string }) => {
  let status = ""
  let color = ""
  switch (taskStatus) {
    case "in_progress":
      status = "В работе"
      color = "#f6c002"
      break
    case "registred":
      status = "Зарегистировано"
      color = "#f6c002"
      break
    case "pending_approval":
      status = "На согласовании"
      color = "#3567ff"
      break
    case "completed":
      status = "Выполнено. Требует подтверждения"
      color = "#3567ff"
      break
    case "closed":
      status = "Закрыто"
      color = "#727272"
      break
    default:
      status = taskStatus
      color = "#727272"
  }

  return (
    <div className={s.wrap}>
      <span style={{ backgroundColor: color }} className={s.point} />
      <p>{status}</p>
    </div>
  )
}

export default TaskStatusText
