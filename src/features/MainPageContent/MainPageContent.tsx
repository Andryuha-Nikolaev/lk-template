import React from "react"
import s from "./MainPageContent.module.scss"
import MainPageWelcome from "./components/welcome/MainPageWelcome"
import MainPageInfo from "./components/info/MainPageInfo"
import MainPageFeedback from "./components/feedback/MainPageFeedback"
import MainPageWarning from "./components/warning/MainPageWarning"

const MainPageContent = () => {
  return (
    <div className={s.block}>
      <MainPageWelcome />
      <MainPageInfo />
      <MainPageFeedback />
      <MainPageWarning />
    </div>
  )
}

export default MainPageContent
