import React from "react"
import s from "./MainPageWelcome.module.scss"
import MainContainer from "@/components/layouts/MainContainer/MainContainer"
import { useTranslations } from "next-intl"
// import sloganImg from "@/assets/images/welcome/slogan.png"
// import Image from "next/image"

const MainPageWelcome = () => {
  const t = useTranslations("welcome")

  return (
    <div className={s.block}>
      <MainContainer>
        <div className={s.wrap}>
          <div className={s.slogan}>
            {/* <Image
              width={234}
              height={70}
              style={{ width: "100%", height: "auto" }}
              quality={100}
              src={sloganImg.src}
              alt="The new era"
            ></Image> */}
          </div>
          <h1>{t("title")}</h1>
        </div>
      </MainContainer>
    </div>
  )
}

export default MainPageWelcome
