// 函数封装法
let id = parseInt(window.localStorage.getItem("idMax") || "0") 
const createId = (): number => {
  id += 1
  // 第二个参数需要是字符串类型
  window.localStorage.setItem("idMax", id.toString())
  return id
}

export { createId }
