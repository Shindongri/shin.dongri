import React from "react"
import styled from "styled-components"

const StyledCard = styled.li`
  width: 100%;
  height: 200px;
  list-style-type : none;
  margin-bottom: 28px;
  cursor: pointer;
  padding: 20px;
  border-radius: 10px;
  &:hover {
    background-color: #f7f7f7;
    box-shadow: 3px 3px 3px 0 #eaeaea;
  }
` 

const Title = styled.h2`
  margin: 0;
`

const SubTitle = styled.p`
  margin-top: 20px;
`

const RegDate = styled.small`
`

const Card = ({ children }) => (
  <StyledCard>
    <Title>제목</Title>
    <RegDate>May 10, 2019</RegDate>
    <SubTitle>부제목 입니다앙</SubTitle>
  </StyledCard>
)

export default Card