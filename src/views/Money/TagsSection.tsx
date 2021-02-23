import React, { useState } from "react"
import styled from "styled-components"

const Wrapper = styled.section`
  background-color: #fff;
  padding: 12px 16px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  > ol {
    margin: 0 -12px;
    > li {
      background-color: #d9d9d9;
      border-radius: 18px;
      display: inline-block;
      padding: 3px 18px;
      font-size: 14px;
      margin: 8px 12px;
      &.selected {
        background: #f60;
      }
    }
  }
  > button {
    background: none;
    border: none;
    padding: 2px 4px;
    border-bottom: 1px solid #333;
    color: #666;
    margin-top: 8px;
  }
`
type Props = { value: string[]; onChange: (selected: string[]) => void }
// 封装函数组件
const TagsSection: React.FC<Props> = (props) => {
  // 圆括号里面传值 尖括号里面传类型
  const [tags, setTags] = useState<string[]>(["衣", "食", "住", "行"])
  // const [selectedTags, setSelectedTags] = useState<string[]>([])
  const selectedTags = props.value

  const onAddTag = () => {
    const tagName = window.prompt("新标签的名称为:")
    if (tagName !== null) {
      setTags([...tags, tagName])
    }
  }

  // 多消化
  const onToggleTag = (tag: string) => {
    const index = selectedTags.indexOf(tag)
    if (index >= 0) {
      // 如果 tag 已被选中 就复制所有没有被选中的 tag 作为新的 selectedTag
      props.onChange(selectedTags.filter((t) => t !== tag))
    } else {
      props.onChange([...selectedTags, tag])
    }
  }

  return (
    <Wrapper>
      <ol>
        {tags.map((tag) => (
          <li
            key={tag}
            onClick={() => onToggleTag(tag)}
            className={selectedTags.indexOf(tag) >= 0 ? "selected" : ""}
          >
            {tag}
          </li>
        ))}
      </ol>
      <button onClick={onAddTag}>新增标签</button>
    </Wrapper>
  )
}

export { TagsSection }
