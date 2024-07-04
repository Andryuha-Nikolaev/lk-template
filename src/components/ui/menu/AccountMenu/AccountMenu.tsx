"use client"

import React, { useEffect, useState } from "react"
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
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const router = useRouter()

  const search = searchParams.get("search") || ""

  const [value, setValue] = useState(search)

  const isAccount = pathname === "/account"
  const status = isAccount ? searchParams.get("status") || "all" : ""

  const handleSearch = () => {
    const trimValue = value.trim()

    setValue(trimValue)
    if (trimValue) {
      router.push(`/account?search=${trimValue}`)
    }
  }

  useEffect(() => {
    setValue(search)
  }, [search])

  return (
    <div className={s.wrap}>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          handleSearch()
        }}
      >
        {isAccount ? (
          <label className={s.label}>
            <button type="submit" className={s.search}>
              <SearchIcon />
            </button>
            <input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className={s.input}
            ></input>
            <button
              type="button"
              onClick={() => {
                if (value) {
                  setValue("")
                  router.push(`/account`)
                }
              }}
              className={s.close}
            >
              <CloseIcon />
            </button>
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
