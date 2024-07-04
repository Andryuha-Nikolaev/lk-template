import { fetchData } from "../fetchData"

export const sendForm = async <T>(
  url: string,
  body: Record<string, string | boolean>
) => {
  return fetchData<T>(url, { method: "POST", body: body })
}
