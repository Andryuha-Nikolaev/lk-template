export type UserTaskType = {
  theme: string
  id: string
  created_at: string
  updated_at: string
  deadline: string
  status:
    | "in_progress"
    | "registred"
    | "pending_approval"
    | "completed"
    | "closed"
  need_response: boolean
  description: string
  resolution: string
  service: string
  service_composition: string
}

export type UserType = {
  login: string
  notifications: number
  tasks: UserTaskType[]
}

export interface ApiUserType extends UserType {
  password: string
  token: string
}

export type UserReqType = {
  login: string
  password: string
}
