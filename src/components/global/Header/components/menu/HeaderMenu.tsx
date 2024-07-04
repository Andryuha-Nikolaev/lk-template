"use client"

import { UserType } from "@/types/users"
import React from "react"
import s from "./HeaderMenu.module.scss"
import { usePathname } from "next/navigation"
import Link from "next/link"
import classNames from "classnames"
import Image from "next/image"
import RootButton from "@/components/ui/buttons/RootButton/RootButton"
import avatarImage from "./images/user.png"

const tabs = [
  { value: "/notifications", label: "Уведомления" },
  { value: "/account", label: "Обращения" },
]

const HeaderMenu = ({ user }: { user: UserType }) => {
  const pathname = usePathname()

  return (
    <div className={s.wrap}>
      <div className={s.tabs}>
        {tabs.map((item) => {
          const isActive = item.value === pathname

          return (
            <Link
              className={classNames(s.tab, isActive && s.active)}
              href={item.value}
              key={`header-tab-${item.label}`}
            >
              {item.label}
              {item.value === "/notifications" && user.notifications && (
                <span className={s.notifications}>{user.notifications}</span>
              )}
            </Link>
          )
        })}
      </div>
      <div className={s.rightBlock}>
        <div className={s.btn}>
          <RootButton styleVariant="var1">
            <span className={s.btnSpan}>
              <span className={s.btnText}>Новое обращение</span>
            </span>
          </RootButton>
        </div>
        <div className={s.avatar}>
          <Image
            width={60}
            height={60}
            alt="Аватар пользователя"
            src={avatarImage.src}
          ></Image>
        </div>
      </div>
    </div>
  )
}

export default HeaderMenu
