import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import Me from '../images/me.png'

const StyledHeader = styled.header`
  margin-bottom: 1.45rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  opacity: 1;
  z-index: 99;
`

const WrapSymbol = styled.a`
  width: 100px;
  height: 100px;
`

const Symbol = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 0.06rem solid #dbdbdb;

  &:hover {
    transform: scale(1.01);
    box-shadow: 0 3px 3px rgba(0,0,0,.3);
  }
`

const Container = styled.div`
  margin: 0;
  padding: 1.45rem 1.0875rem;
`

const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`
const Logo = styled.a`
  display: flex;
  flex-direction: column;
  margin: 0;
`

const Title = styled(Link)`
  text-decoration: none;
  color: #212121;
  font-size: 1.15rem;
  font-weight: 700;
  text-align: center;
  margin: 20px auto 0;
  &:hover {
    color: #3d6afe;
  }
` 

const WrapContact = styled.div`
  display: flex;
  justify-content: center;
  margin: 24px 0;
`

const Contact = styled.div`
  font-size: 1.24rem;
  margin-right: 14px;
  cursor: pointer;
  &:last-child {
    margin-right: 0;
  }
  &:hover {
    color: #3d6afe;
  }
`

const SubTitle = styled.p`
  text-align: center;
  margin: 0 auto;
  font-size: 14px;
`

const Header = ({ siteTitle }) => {
  return (
    <StyledHeader>
      <Container>
        <Navigation>
          <Logo>
            <WrapSymbol href="/">
              <Symbol src={ Me } />
            </WrapSymbol>

            <Title to="/">
            { siteTitle }
            </Title>
          </Logo>

          <SubTitle>
            Front-end Engineer
          </SubTitle>
        </Navigation>

        <WrapContact>
          <Contact>
            <i class="fab fa-github"></i>
          </Contact>

          <Contact>
            <i class="fab fa-linkedin"></i>
          </Contact>

          <Contact>
            <i class="fab fa-facebook-square"></i>
          </Contact>

          <Contact>
            <i class="fab fa-instagram"></i>
          </Contact>

          <Contact>
            <i class="far fa-envelope"></i>
          </Contact>
        </WrapContact>
      </Container>
    </StyledHeader>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
