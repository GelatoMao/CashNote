import React from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import { useTags } from "useTags"
import Layout from "components/Layout"
import Icon from "components/Icon"
import { Button } from "components/Button"
import { Input } from "components/Input"
import { Center } from "components/Center"
import { Space } from "components/Space"

type Params = {
  id: string
}

const Topbar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 20px;
  padding: 14px;
  background: white;
`

const InputWrapper = styled.div`
  background: white;
  padding: 0 16px;
  margin-top: 8px;
`

const Tag: React.FC = (props) => {
  const { findTag, updateTag } = useTags()
  // 将 id 重命名为 idString
  const { id: idString } = useParams<Params>()
  const tag = findTag(parseInt(idString))
  
  return (
    <Layout>
      <Topbar>
        <Icon name="left" />
        <span>编辑标签</span>
        <Icon />
      </Topbar>
      <InputWrapper>
        {/* <label>
          <span>标签名</span>
          <input type="text" placeholder="标签名" />
        </label> */}
        <Input
          label="标签名"
          type="text"
          placeholder="标签名"
          value={tag.name}
          onChange={(e) => {
            updateTag(tag.id, { name: e.target.value })
          }}
        />
      </InputWrapper>
      <Center>
        <Space />
        <Space />
        <Space />
        <Button>删除标签</Button>
      </Center>
    </Layout>
  )
}

export { Tag }
