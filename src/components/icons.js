import React from "react"
import styled from "styled-components"

const StyledIcons = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-column-gap: 1em;
  grid-row-gap: 1em;
  justify-items: center;
  padding: 10px;
  width: ${ 293 * 3 }px;
  height: auto;
  margin: 378px auto 0;

  @media (max-width: 768px) {
    padding: 0 auto;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 0;
    grid-row-gap: 10px;
    justify-items: center;
    margin: 400px auto 0;
    width: 100%;
  }
`

const WrapIcon = styled.div`
  display: grid;
  justify-items: center;

  &:hover {
    transform: scale(1.1);
  }
`

const Icon = styled.i`
  font-size: 4.3rem;
  margin: 0;
  width: 100%;
`

const StarRate = styled.div`
  opacity:0;
  justify-items: center;
  margin-top: 10px;
  ${WrapIcon}:hover & {
    opacity:1;
    -webkit-transition: opacity .25s ease-in-out .0s;
    transition: opacity .25s ease-in-out .0s;
  }
  text-align: center;
  font-size: 14px;
  color: ${props => props.color || '#f7e304' };
`

const Icons = () => (
  <StyledIcons>
    <WrapIcon>
      <Icon className="devicon-javascript-plain colored" />
      <StarRate color="#f7e304">
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="far fa-star" />
      </StarRate>
    </WrapIcon>

    <WrapIcon>
      <Icon className="devicon-html5-plain-wordmark colored" />
      <StarRate color="#e44c27">
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="far fa-star" />
        <i className="far fa-star" />
      </StarRate>
    </WrapIcon>

    <WrapIcon>
      <Icon className="devicon-css3-plain-wordmark colored" />
      <StarRate color="#3D8FC6">
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="far fa-star" />
        <i className="far fa-star" />
      </StarRate>
    </WrapIcon>

    <WrapIcon>
      <Icon className="devicon-react-original-wordmark colored" />
      <StarRate color="#62DAFB">
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star" />
      </StarRate>
    </WrapIcon>

    <WrapIcon>
      <Icon className="devicon-vuejs-plain-wordmark colored" />
      <StarRate color="#41B883">
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="far fa-star" />
        <i className="far fa-star" />
      </StarRate>
    </WrapIcon>

    <WrapIcon>
      <Icon className="devicon-typescript-plain colored" />
      <StarRate color="#007ACC">
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="far fa-star" />
        <i className="far fa-star" />
        <i className="far fa-star" />
      </StarRate>
    </WrapIcon>
  </StyledIcons>
)

export default Icons