import React from "react"
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom"
import styled from "styled-components"
import Nav from "./components/Nav"

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`

const Main = styled.div`
  flex-grow: 1;
  /* 防止页面超出main区域 */
  overflow: auto;
`

function App() {
  return (
    <Router>
      <Wrapper>
        <Main>
          <Switch>
            <Route path="/tags">
              <Tags />
            </Route>
            <Route path="/money">
              <Money />
            </Route>
            <Route path="/statistics">
              <Statistics />
            </Route>
            <Redirect exact from="/" to="/money" />
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
        </Main>
        <Nav />
      </Wrapper>
    </Router>
  )
}

function Tags() {
  return <h2>tags</h2>
}

function Money() {
  return <h2>money</h2>
}

function Statistics() {
  return <h2>statistics</h2>
}

function NoMatch() {
  return <div>页面不存在 可能输错地址了</div>
}

export default App
