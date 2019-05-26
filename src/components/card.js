import React from "react"
import styled from "styled-components"

const StyledCard = styled.li`
  width: 100%;
  height: 200px;
  list-style-type : none;
  margin-bottom: 28px;
  background-color: #f2f2f2;
` 

const Card = ({ children }) => (
  <StyledCard>
    { children }
  </StyledCard>
)

export default Card