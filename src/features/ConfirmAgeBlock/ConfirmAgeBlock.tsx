"use client"

import React from "react"
import s from "./ConfirmAgeBlock.module.scss"
import { useTranslations } from "next-intl"
import RootButton from "@/components/ui/buttons/RootButton/RootButton"
import { useRouter } from "next/navigation"
import { setCookie } from "cookies-next"

const ConfirmAgeBlock = ({
  cookieAgeMinutes,
}: {
  cookieAgeMinutes: number
}) => {
  const t = useTranslations("confirm_popup")

  const router = useRouter()

  const handleConfirmAge = () => {
    const expirationDate = new Date()
    expirationDate.setTime(
      expirationDate.getTime() + cookieAgeMinutes * 60 * 1000
    )
    setCookie("is_adult", "true", {
      path: "/",
      expires: expirationDate,
    })

    router.refresh()
  }

  return (
    <div className={s.block}>
      <div className={s.texts}>
        <p className={s.access}>{t("access")}</p>
        <p className={s.confirm}>{t("confirm")}</p>
      </div>
      <div className={s.buttons}>
        <RootButton
          onClick={handleConfirmAge}
          style={{ maxWidth: 180 }}
          styleVariant="var1"
        >
          {t("confirm_btn")}
        </RootButton>

        <RootButton
          onClick={() => {
            router.replace("about:blank")
          }}
          style={{ maxWidth: 180 }}
          styleVariant="var2"
        >
          {t("leave_btn")}
        </RootButton>
      </div>
    </div>
  )
}

export default ConfirmAgeBlock
