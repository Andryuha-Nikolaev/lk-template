"use client"

import { UserTaskType } from "@/types/users"
import React from "react"
import s from "./AccountBlock.module.scss"
import MainContainer from "@/components/layouts/MainContainer/MainContainer"
import AccountMenu from "@/components/ui/menu/AccountMenu/AccountMenu"
import Link from "next/link"
import classNames from "classnames"
import { useSearchParams } from "next/navigation"
import TaskStatusText from "@/components/ui/other/TaskStatusText/TaskStatusText"

const AccountBlock = ({
  tasks,
  tasksLength,
}: {
  tasks: UserTaskType[]
  tasksLength: number
}) => {
  const searchParams = useSearchParams()

  const page = searchParams.get("page") || "1"

  const pagesCount = Math.ceil(tasksLength / 10)

  const pagArr = Array.from({ length: pagesCount }, (_, idx) => idx + 1)

  return (
    <div className={s.wrap}>
      <MainContainer>
        <AccountMenu />
        <div className={s.tableWrap}>
          <div className={s.table}>
            <div className={classNames(s.row, s.head)}>
              <div className={s.item}>
                <p>Тема</p>
              </div>
              <div className={s.item}>
                <p>Номер</p>
              </div>
              <div className={s.item}>
                <p>Дата создания</p>
              </div>
              <div className={s.item}>
                <p>Дата изменения</p>
              </div>
              <div className={s.item}>
                <p>Крайний срок</p>
              </div>
              <div className={s.item}>
                <p>Состояние</p>
              </div>
            </div>
            {tasks.map((item) => {
              return (
                <Link
                  scroll={false}
                  href={`/account/${item.id}`}
                  key={`tasks-${item.id}`}
                  className={s.row}
                >
                  <div className={classNames(s.item, s.theme)}>
                    <p>
                      {item.theme}
                      {item.need_response && (
                        <span className={s.needResponse}>!</span>
                      )}
                    </p>
                  </div>
                  <div className={s.item}>
                    <p>{item.id}</p>
                  </div>
                  <div className={s.item}>
                    <p>{item.created_at}</p>
                  </div>
                  <div className={s.item}>
                    <p>{item.updated_at}</p>
                  </div>
                  <div className={s.item}>
                    <p>{item.deadline}</p>
                  </div>
                  <div className={s.item}>
                    <TaskStatusText taskStatus={item.status} />
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
        {tasksLength > 10 && (
          <div className={s.pag}>
            {pagArr.map((item) => {
              const params = new URLSearchParams(searchParams.toString())
              params.set("page", String(item))
              const isActive = page === String(item)

              return (
                <Link
                  key={`pag-item${item}`}
                  href={`/account?${params}`}
                  className={classNames(s.pagItem, isActive && s.active)}
                >
                  {item}
                </Link>
              )
            })}
          </div>
        )}
      </MainContainer>
    </div>
  )
}

export default AccountBlock
