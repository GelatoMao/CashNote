import { useState } from "react"
import { createId } from "lib/createId"
// 封装一个自定义hook
const useTags = () => {
  // 不应该是字符串类型 应该是一个有id属性的对象
  // const [tags, setTags] = useState<string[]>(["衣", "食", "住", "行"])
  const [tags, setTags] = useState<{ id: number; name: string }[]>([
    { id: createId(), name: "衣" },
    { id: createId(), name: "食" },
    { id: createId(), name: "住" },
    { id: createId(), name: "行" },
  ])
  return { tags, setTags }
}
export { useTags }
