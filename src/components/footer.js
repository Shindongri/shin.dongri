import React from "react"
import styled from "styled-components"

const StyledFooter = styled.footer`
  padding: 1.45rem 1.0875rem;
  position: sticky;
  height: 70px;
  font-size: 16px;
  text-align: center;
`

const Footer = () => (
<StyledFooter >
  © Copyright Dong-ri, Shin
</StyledFooter>
)

Footer.propTypes = {

}

Footer.defaultProps = {

}

export default Footer