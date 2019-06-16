import React from "react"
import styled from "styled-components"

const StyledCard = styled.li`
  width: 293px;
  height: 293px;
  list-style-type : none;
  margin-bottom: 28px;
  cursor: pointer;
  padding: 20px;
  overflow: scroll;
  ::-webkit-scrollbar { 
    display: none; 
  }

  &:hover {
    background-color: #f7f7f7;
    box-shadow: 3px 3px 3px 0 #eaeaea;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
` 

const Title = styled.h2`
  margin: 0;
  font-size: 1.2rem;
`

const SubTitle = styled.p`
  margin-top: 20px;
  font-size: 0.9rem;
`

const RegDate = styled.small`
`

const Card = ({ children }) => (
  <StyledCard>
    <Title>제목입니다.제목입니다.제목입니다.제목입니다.제목입니다.제목입니다.제목입니다.제목입니다.제목입니다.제목입니다.제목입니다.</Title>
    <RegDate>May 10, 2019</RegDate>
    <SubTitle>부제목 입니다앙부제목 입니다앙부제목 입니다앙부제목 입니다앙부제목 입니다앙부제목 입니다앙부제목 입니다앙부제목 입니다앙부제목 입니다앙</SubTitle>
  </StyledCard>
)

export default Card