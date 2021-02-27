import React, { useState } from "react"
import styled from "styled-components"
import Layout from "components/Layout"
import { TagsSection } from "views/Money/TagsSection"
import { NotesSection } from "views/Money/NotesSection"
import { CategorySection } from "views/Money/CategorySection"
import { NumberPadSection } from "views/Money/NumberPadSection"
import { useRecords } from "hooks/useRecords"

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`
type Category = "-" | "+"

const defaultFormData = {
  // selected里面只有id值 所以是number[]
  tagIds: [] as number[],
  note: "",
  category: "-" as Category,
  amount: 0,
}

function Money() {
  const [selected, setSelected] = useState(defaultFormData)
  const { records, addRecord } = useRecords()
  // typeof 可以获取一个值的类型
  type Selected = typeof selected
  // 部分selected obj 可以是selected对象的一部分
  const onChange = (obj: Partial<Selected>) => {
    setSelected({
      ...selected,
      ...obj,
    })
  }
  const submit = () => {
    addRecord(selected)
    alert("保存成功")
    // 保存成功后再初始化状态
    setSelected(defaultFormData)
  }
  return (
    <MyLayout>
      {/* {JSON.stringify(selected)} */}
      {selected.tagIds.join(",")}
      <hr />
      {selected.note}
      <hr />
      {selected.category}
      <hr />
      {selected.amount}
      <TagsSection
        value={selected.tagIds}
        onChange={(tagIds) => onChange({ tagIds })}
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
        onOk={submit}
      />
    </MyLayout>
  )
}

export default Money
