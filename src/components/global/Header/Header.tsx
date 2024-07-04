import React from "react"
import MainContainer from "@/components/layouts/MainContainer/MainContainer"
import s from "./Header.module.scss"
import HeaderLogo from "./components/logo/HeaderLogo"
import { UserType } from "@/types/users"
import HeaderMenu from "./components/menu/HeaderMenu"

const Header = ({ user }: { user?: UserType }) => {
  return (
    <header className={s.header}>
      <MainContainer>
        <div className={s.wrap}>
          <HeaderLogo />
          {user && <HeaderMenu user={user} />}
        </div>
      </MainContainer>
    </header>
  )
}

export default Header
