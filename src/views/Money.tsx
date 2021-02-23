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
        onChange={(tags) =>
          setSelected({
            ...selected,
            tags: tags,
          })
        }
      />
      <NotesSection
        value={selected.note}
        onChange={(note) => {
          setSelected({
            ...selected,
            note: note,
          })
        }}
      />
      <CategorySection
        value={selected.category}
        onChange={(category) => {
          setSelected({
            ...selected,
            category: category,
          })
        }}
      />
      <NumberPadSection
        value={selected.amount}
        onChange={(amount) => {
          setSelected({
            ...selected,
            amount: amount,
          })
        }}
        onOk={() => {}}
      />
    </MyLayout>
  )
}

export default Money
