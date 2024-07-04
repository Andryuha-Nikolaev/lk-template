"use client"

import React, { useState } from "react"
import s from "./AccountMenu.module.scss"
import Link from "next/link"
import classNames from "classnames"
import CloseIcon from "./icons/close.svg"
import SearchIcon from "./icons/search.svg"
import { useSearchParams, usePathname, useRouter } from "next/navigation"

const tabs = [
  { value: "/account?status=all", label: "Все", status: "all" },
  { value: "/account?status=open", label: "Открытые", status: "open" },
  { value: "/account?status=close", label: "Закрытые", status: "close" },
  {
    value: "/account?status=pending",
    label: "Ожидают\u00A0ответа",
    status: "pending",
  },
]

const AccountMenu = () => {
  const [value, setValue] = useState("")

  const searchParams = useSearchParams()
  const pathname = usePathname()
  const router = useRouter()

  const isAccount = pathname === "/account"
  const status = isAccount ? searchParams.get("status") || "all" : ""

  return (
    <div className={s.wrap}>
      <form
        onSubmit={(e) => {
          e.preventDefault()
        }}
      >
        {isAccount ? (
          <label className={s.label}>
            <span className={s.search}>
              <SearchIcon />
            </span>
            <input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className={s.input}
            ></input>
            <span onClick={() => setValue("")} className={s.close}>
              <CloseIcon />
            </span>
          </label>
        ) : (
          <button
            onClick={() => {
              if (window.history.length > 2) {
                router.back()
              } else {
                router.push("/account")
              }
            }}
            className={classNames(s.tab, s.back)}
          >
            Назад
          </button>
        )}
      </form>
      <div className={s.tabs}>
        {tabs.map((item) => {
          const isActive = item.status === status
          return (
            <Link
              className={classNames(s.tab, isActive && s.active)}
              href={item.value}
              key={`status-item-${item.label}`}
            >
              {item.label}
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default AccountMenu
