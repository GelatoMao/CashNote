import React from "react"
import Layout from "components/Layout"
import { useTags } from "useTags"

function Tags() {
  const { tags, setTags } = useTags()
  return (
    <Layout>
      <h2>tags</h2>
    </Layout>
  )
}

export default Tags
