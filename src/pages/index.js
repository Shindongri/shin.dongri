import React from "react"
import { Link } from "gatsby"
import styled, { createGlobalStyle } from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/card"

const GlobalStyle = createGlobalStyle`
  html,body {
    font-family: Spoqa Han Sans, Sans-serif;
    height: 100%;
  }
`

const MainSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 128px;
`

const IndexPage = () => (
  <Layout>
    <GlobalStyle />
    <SEO title="Home" />
    <MainSection>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </MainSection>
  </Layout>
)

export default IndexPage
