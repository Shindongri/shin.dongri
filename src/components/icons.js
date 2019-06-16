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
  margin: 280px auto 0;

  @media (max-width: 768px) {
    padding: 0 auto;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 0;
    grid-row-gap: 10px;
    justify-items: center;
    margin: 280px auto 0;
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
  font-size: 5rem;
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
  font-size: 16px;
  color: #f7e304;
`

const Icons = () => (
  <StyledIcons>
    <WrapIcon>
      <Icon className="devicon-javascript-plain colored" />
      <StarRate>
        <i class="fas fa-star" />
        <i class="fas fa-star" />
        <i class="fas fa-star" />
        <i class="fas fa-star" />
        <i class="far fa-star" />
      </StarRate>
    </WrapIcon>

    <WrapIcon>
      <Icon className="devicon-html5-plain-wordmark colored" />
      <StarRate>
        <i class="fas fa-star" />
        <i class="fas fa-star" />
        <i class="fas fa-star" />
        <i class="far fa-star" />
        <i class="far fa-star" />
      </StarRate>
    </WrapIcon>

    <WrapIcon>
      <Icon className="devicon-css3-plain-wordmark colored" />
      <StarRate>
        <i class="fas fa-star" />
        <i class="fas fa-star" />
        <i class="fas fa-star" />
        <i class="far fa-star" />
        <i class="far fa-star" />
      </StarRate>
    </WrapIcon>

    <WrapIcon>
      <Icon className="devicon-react-original-wordmark colored" />
      <StarRate>
        <i class="fas fa-star" />
        <i class="fas fa-star" />
        <i class="fas fa-star" />
        <i class="fas fa-star" />
        <i class="fas fa-star" />
      </StarRate>
    </WrapIcon>

    <WrapIcon>
      <Icon className="devicon-vuejs-plain-wordmark colored" />
      <StarRate>
        <i class="fas fa-star" />
        <i class="fas fa-star" />
        <i class="fas fa-star" />
        <i class="far fa-star" />
        <i class="far fa-star" />
      </StarRate>
    </WrapIcon>

    <WrapIcon>
      <Icon className="devicon-typescript-plain colored" />
      <StarRate>
        <i class="fas fa-star" />
        <i class="fas fa-star" />
        <i class="fas fa-star" />
        <i class="fas fa-star" />
        <i class="far fa-star" />
      </StarRate>
    </WrapIcon>

    <WrapIcon>
      <Icon className="devicon-sass-original colored" />
      <StarRate>
        <i class="fas fa-star" />
        <i class="fas fa-star" />
        <i class="far fa-star" />
        <i class="far fa-star" />
        <i class="far fa-star" />
      </StarRate>
    </WrapIcon>

    <WrapIcon>
      <Icon className="devicon-webpack-plain-wordmark colored" />
      <StarRate>
        <i class="fas fa-star" />
        <i class="fas fa-star" />
        <i class="fas fa-star" />
        <i class="far fa-star" />
        <i class="far fa-star" />
      </StarRate>
    </WrapIcon>

    <WrapIcon>
      <Icon className="devicon-babel-plain colored" />
      <StarRate>
        <i class="fas fa-star" />
        <i class="fas fa-star" />
        <i class="fas fa-star" />
        <i class="far fa-star" />
        <i class="far fa-star" />
      </StarRate>
    </WrapIcon>

    <WrapIcon>
      <Icon className="devicon-github-plain-wordmark colored" />
      <StarRate>
        <i class="fas fa-star" />
        <i class="fas fa-star" />
        <i class="fas fa-star" />
        <i class="far fa-star" />
        <i class="far fa-star" />
      </StarRate>
    </WrapIcon>

    <WrapIcon>
      <Icon className="devicon-amazonwebservices-plain-wordmark colored" />
      <StarRate>
        <i class="fas fa-star" />
        <i class="fas fa-star" />
        <i class="far fa-star" />
        <i class="far fa-star" />
        <i class="far fa-star" />
      </StarRate>
    </WrapIcon>

    <WrapIcon>
      <Icon className="devicon-visualstudio-plain-wordmark colored" />
      <StarRate>
        <i class="fas fa-star" />
        <i class="fas fa-star" />
        <i class="far fa-star" />
        <i class="far fa-star" />
        <i class="far fa-star" />
      </StarRate>
    </WrapIcon>
  </StyledIcons>
)

export default Icons