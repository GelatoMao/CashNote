import React, { ChangeEventHandler } from "react"
import styled from "styled-components"
import { Input } from "components/Input"

const Wrapper = styled.section`
  background-color: #f5f5f5;
  padding: 14px 16px;
  font-size: 14px;
`
type Props = {
  value: string
  onChange: (value: string) => void
}

const NotesSection: React.FC<Props> = (props) => {
  // const [notes, setNotes] = useState("")
  const note = props.value
  // const refInput = useRef<HTMLInputElement>(null)
  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    props.onChange(e.target.value)
  }
  return (
    <Wrapper>
      <Input
        label="备注"
        type="text"
        value={note}
        onChange={onChange}
        placeholder="请填写备注"
      />
    </Wrapper>
  )
}

export { NotesSection }
