"use client"

import React, { useState } from "react"
import FormWrapper from "../FormWrapper/FormWrapper"
import RootInput from "@/components/ui/forms/RootInput/RootInput"
import {
  type FieldValues,
  FormProvider,
  type RegisterOptions,
  useForm,
} from "react-hook-form"

import RootButton from "@/components/ui/buttons/RootButton/RootButton"
import s from "./LoginForm.module.scss"
import RootCheckbox from "@/components/ui/forms/RootCheckbox/RootCheckbox"

// import api from "@/api"
import classNames from "classnames"
import { setCookie } from "cookies-next"
import { sendForm } from "@/api/forms/sendForm"
import { useRouter } from "next/navigation"

const LoginForm = () => {
  const methods = useForm()
  const {
    reset,
    setValue,
    handleSubmit,
    formState: { errors },
  } = methods

  const [isOpenModal, setIsOpenModal] = useState(false)
  const [modalTitle, setModalTitle] = useState("")
  const [modalText, setModalText] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const addCookies = (remember: boolean, token: string) => {
    if (remember) {
      const expirationDate = new Date()
      expirationDate.setDate(expirationDate.getDate() + 365)
      setCookie("token", token, {
        path: "/",
        expires: expirationDate,
      })
    } else {
      setCookie("token", token, {
        path: "/",
      })
    }
  }

  const openErrModal = () => {
    alert("Неверный логин или пароль...")
  }

  const router = useRouter()

  const onSubmit = (data: Record<string, string | boolean>) => {
    setIsLoading(true)

    console.log(data)

    sendForm<{ token: string }>("login", data)
      .then((res) => {
        addCookies(!!data.remember_me, res.token)
      })
      .catch((error) => {
        console.error(error)
        openErrModal()
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  const commonOptions: RegisterOptions<FieldValues> = {
    required: "Поле обязательно",
    minLength: {
      value: 2,
      message: "Минимальная длина - 2 символа",
    },
    maxLength: {
      value: 50,
      message: "Максимальная длина - 50 символов",
    },
    setValueAs: (v) => v.trim(),
  }

  return (
    <div className={classNames(s.block, isLoading && s.loading)}>
      <FormProvider {...methods}>
        <FormWrapper title="Вход в сервис" onSubmit={handleSubmit(onSubmit)}>
          <>
            <div className={s.wrap}>
              <RootInput
                placeholder="Логин"
                type="text"
                name="login"
                options={commonOptions}
              ></RootInput>
              <RootInput
                placeholder="Пароль"
                type="password"
                name="password"
                options={commonOptions}
              ></RootInput>
              <div className={s.checkboxWrap}>
                <RootCheckbox
                  type="checkbox"
                  name="remember_me"
                  text="Запомнить меня"
                  options={{
                    value: true,
                  }}
                ></RootCheckbox>
              </div>
              <div className={s.btnWrap}>
                <RootButton
                  className={s.btn}
                  styleVariant="var1"
                  disabled={!!Object.keys(errors).length}
                  type="submit"
                >
                  {isLoading ? "Вход..." : "Войти"}
                </RootButton>
              </div>
            </div>
          </>
        </FormWrapper>
      </FormProvider>
    </div>
  )
}

export default LoginForm
