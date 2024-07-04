// import { redirect, notFound } from "next/navigation"

interface FetchDataOptions {
  method?: string
  body?: object
  cookies?: string
}

const baseUrl = process.env.NEXT_PUBLIC_BASE_API_URL

export const fetchData = async <T>(
  path: string,
  options: FetchDataOptions = {}
): Promise<T> => {
  const url = `${baseUrl}/${path}`
  const response = await fetch(url, {
    method: options.method ?? "GET",

    body: JSON.stringify(options.body),
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      Cookie: options.cookies || "",
    },
    cache: "no-cache",
  })

  // if (!response.ok) {
  //   console.error(`Unable to fetch data from ${url}.`)
  //   if (response.status === 500) {
  //     throw new Error(`${response.status}`)
  //   } else if (response.status === 404) {
  //     notFound()
  //   } else {
  //     redirect(`/error?status=${response.status}`)
  //   }
  // }

  const data = await response.json()
  return data as T
}
