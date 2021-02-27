import { useEffect, useState } from "react"
import { useUpdate } from "./useUpdate"

export type RecordItem = {
  tagIds: number[]
  note: string
  category: "+" | "-"
  amount: number
  createdAt: string // ISO 8601
}

// 第一种写法
// type RecordItem = newRecordItem & {
//   createdAt: string // ISO 8601
// }

// 第二种写法 newRecordItem 是 RecordItem 中忽略createdAt属性的对象
type newRecordItem = Omit<RecordItem, "createdAt">

export const useRecords = () => {
  const [records, setRecords] = useState<RecordItem[]>([])
  // 第一次渲染从localStorage中拿数据
  useEffect(() => {
    setRecords(JSON.parse(window.localStorage.getItem("records") || "[]"))
  }, [])
  // 保存到localStorage中
  useUpdate(() => {
    window.localStorage.setItem("records", JSON.stringify(records))
  }, [records])

  const addRecord = (newRecord: newRecordItem) => {
    const record = { ...newRecord, createdAt: new Date().toISOString() }
    setRecords([...records, record])
  }
  return { records, addRecord }
}
