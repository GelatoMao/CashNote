const generateOutput = (text: string, output = "0") => {
  switch (text) {
    case "0":
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
      if (output === "0") {
        return text
      } else {
        return output + text
      }
    case ".":
      if (output.indexOf(".") >= 0) {
        console.log('11');
        
        return output
      } else {
        console.log('22');
        
        return output + text
      }
    case "删除":
      if (output.length === 1) {
        return ""
      } else {
        // 这边有可能返回一个undefined
        return output.slice(0, -1)
      }
    case "清空":
      return ""
    default:
      return ""
  }
}

export { generateOutput }
