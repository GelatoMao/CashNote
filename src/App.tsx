import React from "react"
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom"
import styled from "styled-components"
import Nav from "components/Nav"
import Layout from "components/Layout"

function App() {
  return (
    <Router>
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
      {/* <Nav /> */}
    </Router>
  )
}

function Tags() {
  return (
    <Layout>
      <h2>tags</h2>
    </Layout>
  )
}

function Money() {
  return (
    <Layout>
      <h2>money</h2>
    </Layout>
  )
}

function Statistics() {
  return (
    <Layout>
      <h2>statistics</h2>
    </Layout>
  )
}

function NoMatch() {
  return <div>页面不存在 可能输错地址了</div>
}

export default App
