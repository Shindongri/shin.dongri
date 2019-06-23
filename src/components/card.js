import React from "react"
import styled from "styled-components"

const StyledCard = styled.li`
  width: ${ 293 * 3 }px;
  height: 200px;
  list-style-type : none;
  margin-bottom: 28px;
  cursor: pointer;
  padding: 28px;
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
  &:hover {
    text-decoration: underline;
    font-weight: bold;
    color: #2A52BE;
  }
`

const SubTitle = styled.p`
  margin-top: 20px;
  font-size: 0.9rem;
`

const Created = styled.small`
`

const Card = ({ title, created, subtitle }) => (
  <StyledCard>
    <Title>{ title }</Title>
    <Created>{ created }</Created>
    <SubTitle>{ subtitle }</SubTitle>
  </StyledCard>
)

export default Card