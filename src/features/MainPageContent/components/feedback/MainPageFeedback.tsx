import React from "react"
import s from "./MainPageFeedback.module.scss"
import MainContainer from "@/components/layouts/MainContainer/MainContainer"
import FeedbackForm from "@/components/forms/FeedbackForm/FeedbackForm"
import { cookies } from "next/headers"

async function MainPageFeedback() {
  const cookieStore = cookies()
  const formSuccessCookies = cookieStore.get("form_success")

  return (
    <div className={s.block}>
      <MainContainer>
        <div className={s.wrap}>
          <FeedbackForm formSuccessCookies={!!formSuccessCookies} />
        </div>
      </MainContainer>
    </div>
  )
}

export default MainPageFeedback
