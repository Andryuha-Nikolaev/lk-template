import React from "react"

import s from "./MainContainer.module.scss"
import classNames from "classnames"

export default function MainContainer({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return <div className={classNames(s.container, className)}>{children}</div>
}
