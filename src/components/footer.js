import React from "react"
import styled from "styled-components"

const StyledFooter = styled.footer`
  padding: 1.45rem 1.0875rem;
  position: sticky;
  height: 70px;
  font-size: 16px;
`

const Footer = () => (
<StyledFooter >
  © {new Date().getFullYear()} made with
  {` `}
  <a href="https://www.gatsbyjs.org">Gatsby</a>
  { ' + ' }
  <a href="https://www.netlify.com">Netlify</a>
  { ' + ' }
  🍷
</StyledFooter>
)

Footer.propTypes = {

}

Footer.defaultProps = {

}

export default Footer