import React from "react"
import styled from "styled-components"

const Label = styled.label`
  display: flex;
  align-items: center;
  > span {
    margin-right: 16px;
  }
  > input {
    display: block;
    height: 44px;
    flex-grow: 1;
    border: none;
    background: none;
  }
`

type Props = {
  label: string
} & React.InputHTMLAttributes<HTMLInputElement>

const Input: React.FC<Props> = (props) => {
  // ...rest表示其他所有属性
  const { label,children, ...rest } = props
  return (
    <Label>
      <span>{label}</span>
      <input {...rest} />
    </Label>
  )
}

export { Input }
