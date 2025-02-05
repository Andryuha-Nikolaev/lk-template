import React, { useState, type ComponentPropsWithoutRef } from "react"
import classNames from "classnames"
import s from "./RootInput.module.scss"
import InputMask from "react-input-mask"
import {
  useFormContext,
  type RegisterOptions,
  type FieldValues,
} from "react-hook-form"
import WatchIcon from "./icons/watch.svg"

import { ErrorMessage } from "@hookform/error-message"

interface RootInputProps extends ComponentPropsWithoutRef<"label"> {
  name: string
  options: RegisterOptions<FieldValues>
  type: "text" | "password" | "email" | "number" | "tel"
  placeholder: string
}

const RootInput = ({
  name,
  options,
  type,
  placeholder,

  ...props
}: RootInputProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  const isError = errors[name]?.message

  const [inputType, setInputType] = useState(type)

  const handleOpenPassword = () => {
    setInputType(inputType === "password" ? "text" : "password")
  }

  return (
    <div className={classNames(s.wrap)}>
      <label {...props} className={classNames(s.label)}>
        {type === "tel" ? (
          <InputMask
            placeholder={placeholder}
            mask="+7 999 999 99 99"
            maskChar={null} // Необязательный параметр, удаляет заглушки "_" из маски
            className={classNames(s.input, isError && s.error)}
            type={type}
            {...register(name, options)}
          />
        ) : (
          <input
            className={classNames(s.input, isError && s.error)}
            type={inputType}
            placeholder={placeholder}
            {...register(name, options)}
          />
        )}

        <ErrorMessage
          errors={errors}
          name={name}
          render={({ message }) => (
            <span className={classNames(s["error-message"])}>{message}</span>
          )}
        />
      </label>
      {type === "password" && (
        <div onClick={handleOpenPassword} className={s["password-icon"]}>
          <WatchIcon />
        </div>
      )}
    </div>
  )
}

export default RootInput
