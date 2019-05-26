import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const StyledHeader = styled.header`
  background: white;
  margin-bottom: 1.45rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  opacity: 0.9;
`

const Container = styled.div`
  margin: 0;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`

const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
`

const Menu = styled.a`
  font-style: italic;
`

const Logo = styled.a`
  margin: 0;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #212121;
  font-size: 1.25rem;
  font-weight: 800;
  position: sticky;
` 

const ContactWrapper = styled.div`
  display: flex;
  font-size: 12px;
  font-weight: 300;
`

const Contact = styled.a`
  margin-right: 4px;
  &:last-child {
    margin-right: 0;
  }
`
const Header = ({ siteTitle }) => (
  <StyledHeader>
    <Container>
      <Navigation>
        <Logo>
          <StyledLink to="/">
          {siteTitle}
          </StyledLink>
        </Logo>

        <Menu>
          About
        </Menu>
      </Navigation>
    
      <ContactWrapper>
        <Contact href="">linkedin</Contact>
        <Contact href="">rocketpunch</Contact>        
        <Contact href="">instagram</Contact>
        <Contact href="">twitter</Contact>
        <Contact href="">email</Contact>
      </ContactWrapper>
    </Container>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
