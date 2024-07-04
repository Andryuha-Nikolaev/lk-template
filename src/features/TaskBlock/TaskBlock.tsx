"use client"

import React, { useRef, useState } from "react"
import s from "./TaskBlock.module.scss"
import { UserTaskType } from "@/types/users"
import MainContainer from "@/components/layouts/MainContainer/MainContainer"
import AccountMenu from "@/components/ui/menu/AccountMenu/AccountMenu"
import Arrow from "./icons/arrow.svg"
import classNames from "classnames"
import TaskStatusText from "@/components/ui/other/TaskStatusText/TaskStatusText"

const TaskBlock = ({ task }: { task: UserTaskType }) => {
  const [isOpen, setIsOpen] = useState(false)

  const [additionalHeight, setAdditionalHeight] = useState(0)

  const additionalRef = useRef<HTMLDivElement>(null)

  return (
    <div className={s.wrap}>
      <MainContainer>
        <AccountMenu />
        <div className={s.task}>
          <div className={s.info}>
            <div className={s.left}>
              <p className={s.text}>
                Обращение № {task.id} от {task.created_at}
              </p>
              <p className={s.title}>{task.theme}</p>
              <p className={s.desc}>{task.description}</p>
            </div>
            <div className={s.right}>
              <div className={s.status}>
                {" "}
                <TaskStatusText taskStatus={task.status} />
              </div>

              <div className={s.deadlineBlock}>
                <p className={s.text}>Крайний срок</p>
                <p>{task.deadline}</p>
              </div>
              <div className={s.deadlineBlock}>
                <p className={s.text}>Решение</p>
                <p>{task.resolution || "-"}</p>
              </div>
            </div>
            <button
              onClick={() => {
                setAdditionalHeight(
                  additionalRef.current?.scrollHeight
                    ? additionalRef.current?.scrollHeight
                    : 0
                )

                setIsOpen(!isOpen)
              }}
              aria-label="Показать больше"
              className={classNames(s.openBtn, isOpen && s.open)}
            >
              <span>
                <Arrow />
              </span>
            </button>
          </div>

          <div
            ref={additionalRef}
            className={s.additional}
            style={{ height: isOpen ? `${additionalHeight}px` : 0 }}
          >
            <div className={s.additionalContent}>
              <p className={s.title}>Дополнительная информация</p>
              <div className={s.deadlineBlock}>
                <p className={s.text}>Услуга</p>
                <p>{task.service}</p>
              </div>
              <div className={s.deadlineBlock}>
                <p className={s.text}>Состав услуги</p>
                <p>{task.service_composition}</p>
              </div>
            </div>
          </div>

          <div className={s.questions}>
            <p>Если остались вопросы, пожалуйста, создайте новое обращение</p>
          </div>
        </div>
      </MainContainer>
    </div>
  )
}

export default TaskBlock
