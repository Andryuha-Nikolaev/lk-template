"use client"

import React from "react"
import s from "./FormWrapper.module.scss"
import classNames from "classnames"

type FormWrapperProps = {
  children: React.ReactNode
  title: string
  text?: string
  onSubmit: () => void
}

const FormWrapper = ({ children, title, text, onSubmit }: FormWrapperProps) => {
  return (
    <div className={classNames(s.wrapper)}>
      <h2 className={classNames(s.title)}>{title}</h2>
      {text && <h2 className={classNames(s.title)}>{text}</h2>}

      <form onSubmit={onSubmit}>
        <div className={classNames(s.fieldsWrap)}>{children}</div>
      </form>
    </div>
  )
}

export default FormWrapper
