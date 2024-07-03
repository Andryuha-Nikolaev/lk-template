import React from "react"
import s from "./HeaderLogo.module.scss"
import Link from "next/link"

const HeaderLogo = () => {
  return (
    <Link className={s.link} href="/">
      itilium
    </Link>
  )
}

export default HeaderLogo
