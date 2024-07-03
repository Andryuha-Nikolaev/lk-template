import React from "react"
import MainContainer from "@/components/layouts/MainContainer/MainContainer"
import s from "./Header.module.scss"
import HeaderLogo from "./components/logo/HeaderLogo"

const Header = () => {
  return (
    <header className={s.header}>
      <MainContainer>
        <div className={s.wrap}>
          <HeaderLogo />
        </div>
      </MainContainer>
    </header>
  )
}

export default Header
