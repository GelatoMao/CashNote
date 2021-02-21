import React, { useState, useRef } from "react"
import styled from "styled-components"

const Wrapper = styled.section`
  background-color: #f5f5f5;
  padding: 0 16px;
  font-size: 14px;
  > label {
    display: flex;
    align-items: center;
    > span {
      margin-right: 16px;
    }
    > input {
      display: block;
      height: 72px;
      flex-grow: 1;
      border: none;
      background: none;
    }
  }
`
const NotesSection: React.FC = () => {
  const [notes, setNotes] = useState("")
  const refInput = useRef<HTMLInputElement>(null)
  const onBlur = () => {
    if (refInput.current !== null) {
      setNotes(refInput.current.value)
    }
  }
  return (
    <Wrapper>
      <label>
        <span>备注</span>
        <input
          type="text"
          placeholder="添加备注"
          ref={refInput}
          defaultValue={notes}
          onBlur={onBlur}
        />
      </label>
    </Wrapper>
  )
}

export { NotesSection }
