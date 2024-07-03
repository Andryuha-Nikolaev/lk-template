import React, { ComponentPropsWithoutRef } from "react"
import s from "./RootButton.module.scss"
import classNames from "classnames"

interface RootButtonProps extends ComponentPropsWithoutRef<"button"> {
  styleVariant: "var1" | "var2"
}

const RootButton = (props: RootButtonProps) => {
  const { styleVariant, ...otherProps } = props

  return (
    <button
      {...otherProps}
      className={classNames(s.button, s[styleVariant])}
    ></button>
  )
}

export default RootButton
