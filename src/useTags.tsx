import { useState } from "react"
// 封装一个自定义hook
const useTags = () => {
  const [tags, setTags] = useState<string[]>(["衣", "食", "住", "行"])
  return { tags, setTags }
}
export { useTags }
