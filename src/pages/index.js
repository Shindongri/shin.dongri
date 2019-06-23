import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Icons from "../components/icons"
import { graphql } from "graphql";

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
  export default () => {
    return (
    <Layout>
      <SEO title="Home" />
      <Icons />
      <MainSection className="main">
      </MainSection>
    </Layout>
    )
  }

  export const pageQuery = () => graphql`
  {
    allFile {
      edges {
        node {
          id
        }
      }
    }
  }  
  `