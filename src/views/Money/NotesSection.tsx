import styled from "styled-components"

const NotesSection = styled.section`
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

export { NotesSection }
