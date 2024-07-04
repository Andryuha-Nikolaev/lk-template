import type { Metadata, Viewport } from "next"
import { Noto_Sans_Display } from "next/font/google"
import "../style/globals.scss"

const notoSans = Noto_Sans_Display({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500"],
  preload: true,
  variable: "--noto-sans-font",
})

export const metadata: Metadata = {
  title: "1С:ITILIUM — ваш правильный сервис-деск",
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <body className={notoSans.variable}>
        <main>{children}</main>
      </body>
    </html>
  )
}
