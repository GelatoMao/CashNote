import { useEffect, useRef } from "react"

const useUpdate = (fn: () => void, deps: any[]) => {
  const count = useRef(0)
  useEffect(() => {
    count.current += 1
  })
  // 只要tags变化 就将tags存到localStorage里面 useEffect触发要确保每次都是新的对象
  useEffect(() => {
    // 第二个参数需要是字符串 count>1 的时候才执行下行代码 确保undefined到空数组的过程tags不被存储
    if (count.current > 1) {
      fn()
    }
  }, deps)
}

export { useUpdate }
