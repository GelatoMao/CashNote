import React, { useState, useRef } from "react"
import styled from "styled-components"

const Wrapper = styled.section`
  font-size: 24px;
  > ul {
    display: flex;
    background: #c4c4c4;
    > li {
      width: 50%;
      text-align: center;
      padding: 16px 0;
      position: relative;
      &.selected::after {
        content: "";
        display: block;
        height: 3px;
        background: #333;
        position: absolute;
        bottom: 0;
        left: 0;
        /* 设置定位后 宽度没了 */
        width: 100%;
      }
    }
  }
`
type Props = {
  value: "-" | "+"
  onChange: (value: "-" | "+") => void
}
const CategorySection: React.FC<Props> = (props) => {
  const [categoryList] = useState<("-" | "+")[]>(["-", "+"])
  // +号表示收入 -号表示支出
  // const [category, setCategory] = useState("-")
  const category = props.value
  // 利用哈希使得减号与支出对应 加号与收入对应
  const categoryMap = { "-": "支出", "+": "收入" }
  return (
    <Wrapper>
      <ul>
        {categoryList.map((c) => (
          <li
            key={c}
            className={category === c ? "selected" : ""}
            onClick={() => props.onChange(c)}
          >
            {categoryMap[c]}
          </li>
        ))}
      </ul>
    </Wrapper>
  )
}

export { CategorySection }
