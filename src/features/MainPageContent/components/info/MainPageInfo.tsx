import React from "react"
import s from "./MainPageInfo.module.scss"
import MainContainer from "@/components/layouts/MainContainer/MainContainer"
import img1 from "@/assets/images/info/img1.jpg"
import img2 from "@/assets/images/info/img2.jpg"
import img3 from "@/assets/images/info/img3.jpg"
import img4 from "@/assets/images/info/img4.jpg"
import img5 from "@/assets/images/info/img5.jpg"
import { useTranslations } from "next-intl"
import Image from "next/image"

const MainPageInfo = () => {
  const t = useTranslations("info")

  const info = [
    { image: img1.src, title: t("title1"), text: t("text1") },
    { image: img2.src, title: t("title2"), text: t("text2") },
    { image: img3.src, title: t("title3"), text: t("text3") },
    { image: img4.src, title: t("title4"), text: t("text4") },
    { image: img5.src, title: t("title5"), text: t("text5") },
  ]

  return (
    <div className={s.block}>
      <MainContainer>
        <div className={s.wrap}>
          {info.map((item) => (
            <div className={s.item} key={`info-${item.title}`}>
              <div className={s.image}>
                <Image
                  fill
                  sizes="570px"
                  style={{
                    objectFit: "cover",
                  }}
                  quality={100}
                  alt={item.title}
                  src={item.image}
                ></Image>
              </div>

              <div className={s.info}>
                <h3 className={s.title}>{item.title}</h3>
                <div className={s.streak}></div>
                <p className={s.text}>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </MainContainer>
    </div>
  )
}

export default MainPageInfo
