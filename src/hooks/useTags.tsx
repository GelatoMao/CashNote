import { useState, useEffect } from "react"
import { createId } from "lib/createId"
import { useUpdate } from "hooks/useUpdate"

// 封装一个自定义hook
const useTags = () => {
  // 不应该是字符串类型 应该是一个有id属性的对象
  // const [tags, setTags] = useState<string[]>(["衣", "食", "住", "行"])
  const [tags, setTags] = useState<{ id: number; name: string }[]>([])
  useEffect(() => {
    let localTags = JSON.parse(window.localStorage.getItem("tags") || "[]")
    if (localTags.length === 0) {
      // 因为每次使用useTags都会重新调用createId() 所以这个方法不能写在useState里面
      localTags = [
        { id: createId(), name: "衣" },
        { id: createId(), name: "食" },
        { id: createId(), name: "住" },
        { id: createId(), name: "行" },
      ]
    }
    setTags(localTags)
  }, []) // 组件挂载时执行
  useUpdate(() => {
    window.localStorage.setItem("tags", JSON.stringify(tags))
  }, [tags])

  const findTag = (id: number) => tags.filter((tag) => tag.id === id)[0]
  const findTagIndex = (id: number) => {
    // 需要考虑id不存在的情况 设置result初始值为-1 然后不直接返回index 而是返回result
    // 一定要考虑id不存在的情况
    let result = -1
    for (let i = 0; i < tags.length; i++) {
      if (tags[i].id === id) {
        result = i
        break
      }
    }
    return result
  }
  const updateTag = (id: number, obj: { name: string }) => {
    setTags(
      tags.map((tag) => {
        return tag.id === id ? { id, name: obj.name } : tag
      })
    )
    // const index = findTagIndex(id)
    // // 深拷贝 tags
    // const tagsClone = JSON.parse(JSON.stringify(tags))
    // // 把 tagsClone的第 index 删掉 换成{id:id, name:obj.name}
    // tagsClone.splice(index, 1, { id: id, name: obj.name })
    // setTags(tagsClone)
  }
  const deleteTag = (id: number) => {
    // 将不是这个id的数据都留下来就OK了
    setTags(tags.filter((tag) => tag.id !== id))
    // const index = findTagIndex(id)
    // const tagsClone = JSON.parse(JSON.stringify(tags))
    // tagsClone.splice(index, 1)
    // setTags(tagsClone)
  }

  const addTag = () => {
    const tagName = window.prompt("新标签的名称为:")
    if (tagName !== null && tagName !== "") {
      setTags([...tags, { id: createId(), name: tagName }])
    }
  }
  return { tags, setTags, findTag, updateTag, findTagIndex, deleteTag, addTag }
}
export { useTags }
