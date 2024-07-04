import React from "react"
import LoginForm from "@/components/forms/FeedbackForm/LoginForm"
import s from "./LoginBlock.module.scss"
import MainContainer from "@/components/layouts/MainContainer/MainContainer"

const LoginBlock = () => {
  return (
    <div className={s.block}>
      <MainContainer>
        <LoginForm />
      </MainContainer>
    </div>
  )
}

export default LoginBlock
