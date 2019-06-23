import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Icons from "../components/icons"

const MainSection = styled.section`
  display: grid;
  justify-items: center;
  width: ${ 293 * 3 }px;
  margin: 0 auto;
  scroll-behavior: smooth;
  transition: all 1s;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 100%;
  }
`

const SecondPage = () => (
  <Layout>
    <SEO title="Home" />
    <Icons />
    <MainSection className="main">
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
    </MainSection>
  </Layout>
)

export default SecondPage
