import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import Layout from "components/Layout"
import { Button } from "components/Button"
import { useTags } from "useTags"
import Icon from "components/Icon"
import { Center } from "components/Center"
import {Space} from "components/Space"

const TagList = styled.ol`
  font-size: 16px;
  background: white;
  > li {
    border-bottom: 1px solid #d5d5d9;
    line-height: 20px;
    margin-left: 16px;
    > a {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 12px 16px 12px 0;
    }
  }
`


function Tags() {
  const { tags ,addTag} = useTags()
  return (
    <Layout>
      <TagList>
        {tags.map((tag) => {
          return (
            <li key={tag.id}>
              <Link to={"/tags/" + tag.id}>
                <span className="oneLine">{tag.name}</span>{" "}
                <Icon name="right" />
              </Link>
            </li>
          )
        })}
      </TagList>
      <Center>
        <Space />
        <Space />
        <Button onClick={addTag}>新增标签</Button>
        <Space />
      </Center>
    </Layout>
  )
}

export default Tags
