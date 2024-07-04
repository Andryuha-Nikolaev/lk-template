import React from "react"
import s from "./RootCheckbox.module.scss"
import {
  useFormContext,
  type RegisterOptions,
  type FieldValues,
} from "react-hook-form"

import { ErrorMessage } from "@hookform/error-message"

type RootCheckboxProps = {
  name: string
  options: RegisterOptions<FieldValues>
  text: string
  type: "checkbox"
}

const RootCheckbox = ({ name, options, text, type }: RootCheckboxProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  return (
    <div className={s["checkbox-wrap"]}>
      <label className={s["checkbox-label"]}>
        <input
          className={s["checkbox-input"]}
          type={type}
          placeholder="check"
          {...register(name, options)}
        />
        <span className={s["checkbox-custom"]}></span>
        <span className={s.text}>{text}</span>

        <ErrorMessage
          errors={errors}
          name={name}
          render={({ message }) => (
            <span className={s["error-message"]}>{message}</span>
          )}
        />
      </label>
    </div>
  )
}

export default RootCheckbox
