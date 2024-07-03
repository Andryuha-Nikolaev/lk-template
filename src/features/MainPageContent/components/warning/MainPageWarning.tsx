import React from "react"
import s from "./MainPageWarning.module.scss"
import MainContainer from "@/components/layouts/MainContainer/MainContainer"
import { useTranslations } from "next-intl"

const MainPageWarning = () => {
  const t = useTranslations("warning")

  return (
    <div className={s.block}>
      <MainContainer>
        <div className={s.wrap}>
          <p className={s.text}>{t("warning1")}</p>
          <p className={s.text}>{t("warning2")}</p>
        </div>
      </MainContainer>
    </div>
  )
}

export default MainPageWarning
