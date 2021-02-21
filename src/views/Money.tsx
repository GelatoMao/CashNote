import styled from "styled-components"
import Layout from "components/Layout"
import { TagsSection } from "views/Money/TagsSection"
import { NotesSection } from "views/Money/NotesSection"
import { CategorySection } from "views/Money/CategorySection"
import { NumberPadSection } from "views/Money/NumberPadSection"

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`

function Money() {
  return (
    <MyLayout>
      <TagsSection />
      <NotesSection />
      <CategorySection />
      <NumberPadSection />
    </MyLayout>
  )
}

export default Money
