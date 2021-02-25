import { useState } from "react"
import { createId } from "lib/createId"

// 因为每次使用useTags都会重新调用createId() 所以这个方法不能写在useState里面
const defaultTags = [
  { id: createId(), name: "衣" },
  { id: createId(), name: "食" },
  { id: createId(), name: "住" },
  { id: createId(), name: "行" },
]
// 封装一个自定义hook
const useTags = () => {
  // 不应该是字符串类型 应该是一个有id属性的对象
  // const [tags, setTags] = useState<string[]>(["衣", "食", "住", "行"])
  const [tags, setTags] = useState<{ id: number; name: string }[]>(defaultTags)
  const findTag = (id: number) =>
    tags.filter((tag) => tag.id === id)[0]
  return { tags, setTags ,findTag}
}
export { useTags }
