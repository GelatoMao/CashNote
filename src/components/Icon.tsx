import React from "react"
import classnames from "classnames"
// require("icons/money.svg")
// require("icons/tag.svg")
// require("icons/statistic.svg")

// 封装require函数
let importAll = (requireContext: __WebpackModuleApi.RequireContext) =>
  requireContext.keys().forEach(requireContext)
try {
  importAll(require.context("icons", true, /\.svg$/))
} catch (error) {
  console.log(error)
}

type Props = {
  // name是可选的 并且除了支持name 还支持React中的SVG的所有属性
  name?: string
} & React.SVGAttributes<SVGElement>

const Icon = (props: Props) => {
  // 因为rest中可能会有className 若有的话 会覆盖掉原来的className 所以className要单独提取出来
  const { name, children, className, ...rest } = props
  return (
    <svg className={classnames("icon", className)} {...rest}>
      {props.name && <use xlinkHref={"#" + props.name} />}
    </svg>
  )
}

export default Icon
