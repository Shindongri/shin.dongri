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
  z-index: 1000;
  background-color: rgba(250, 250, 250, 0.9);
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
const Logo = styled.div`
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
  margin: 12px 0;
`

const Contact = styled.a`
  font-size: 1.24rem;
  font-weight: bold;
  margin-right: 20px;
  cursor: pointer;
  color: #878787;
  &:last-child {
    margin-right: 0;
  }
  &:hover {
    color: #3d6afe;
  }
`

const SubTitle = styled.h3`
  text-align: center;
  margin: 0 auto;
  font-size: 14px;
  color: #adadad;
`

const Description = styled.ul`
  font-size: 12px;
  margin: 10px auto;
  line-height: 1.2;
  padding: 10px;
  text-align: center;
  line-height: 0.8;

  list-style: none;
  color: #565656;
`

const Company = styled.a`
  font-weight: 700;
  color: #000000;
  &:hover {
    text-decoration: none;
  }
`

const Header = ({ siteTitle, description }) => {
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

          <Description>
            <li>
              현재 <Company href="https://terafunding.com" target="_blank" >테라펀딩</Company>에서 일하며, 금융과 부동산의 풀지 못했던 문제를 혁신적으로 해결하기 위한 서비스를 만들고 있습니다.
            </li>

            <li>
              아름다운 인터페이스와 사용자 경험을 제공하는 것을 즐깁니다.
            </li>

            <li>
              항상 개발자로서 성장이 최우선의 가치라 여기고, 즐겁게 성장할 수 있는 환경을 선호합니다.
            </li>
          </Description>
        </Navigation>

        <WrapContact>
          <Contact href="https://github.com/shindongri">
            <i className="fab fa-github"></i>
          </Contact>

          <Contact href="https://www.linkedin.com/">
            <i className="fab fa-linkedin"></i>
          </Contact>

          <Contact href="https://www.facebook.com/shindongri89">
            <i className="fab fa-facebook-square"></i>
          </Contact>

          <Contact href="https://www.instagram.com/shindongri/?hl=ko">
            <i className="fab fa-instagram"></i>
          </Contact>

          <Contact href="mailto:shindongri89@gmail.com">
            <i className="far fa-envelope"></i>
          </Contact>

          <Contact>
            <i className="fas fa-rss-square"></i>
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
