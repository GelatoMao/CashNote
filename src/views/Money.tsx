import React, { useState } from "react"
import styled from "styled-components"
import Layout from "components/Layout"
import { TagsSection } from "views/Money/TagsSection"
import { NotesSection } from "views/Money/NotesSection"
import { CategorySection } from "views/Money/CategorySection"
import { NumberPadSection } from "views/Money/NumberPadSection"

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`
type Category = "-" | "+"
function Money() {
  const [selected, setSelected] = useState({
    tags: [] as string[],
    note: "",
    category: "-" as Category,
    amount: 0,
  })
  // typeof 可以获取一个值的类型
  type Selected = typeof selected
  // 部分selected obj 可以是selected对象的一部分
  const onChange = (obj: Partial<Selected>) => {
    setSelected({
      ...selected,
      ...obj,
    })
  }
  return (
    <MyLayout>
      {selected.tags.join(",")}
      <hr />
      {selected.note}
      <hr />
      {selected.category}
      <hr />
      {selected.amount}
      <TagsSection
        value={selected.tags}
        onChange={(tags) => onChange({ tags })}
      />
      <NotesSection
        value={selected.note}
        onChange={(note) => onChange({ note })}
      />
      <CategorySection
        value={selected.category}
        onChange={(category) => onChange({ category })}
      />
      <NumberPadSection
        value={selected.amount}
        onChange={(amount) => onChange({ amount })}
        onOk={() => {}}
      />
    </MyLayout>
  )
}

export default Money
