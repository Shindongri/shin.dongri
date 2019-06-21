import React, { useEffect } from "react"
import styled from "styled-components"
import _ from "lodash"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/card"
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

const IndexPage = () => {

  useEffect(() => {
    window.addEventListener(`scroll`, _.throttle(onScroll, 300), { passive: false })

    return () => {
      window.removeEventListener(`scroll`, _.throttle(onScroll, 300), { passive: false })
    }
  }, [])

  const onScroll = e => {}

  return (
  <Layout>
    <SEO title="Home" />
    <Icons />
    <MainSection className="main">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
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
}

export default IndexPage
