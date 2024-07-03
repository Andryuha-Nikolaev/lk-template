export type UserType = {
  login: string
}

export interface ApiUserType extends UserType {
  password: string
  token: string
}

export type UserReqType = {
  login: string
  password: string
}
