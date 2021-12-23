import * as React from "react"
import styled, { css } from "styled-components"

interface state {
  count: number
}
const ButtonInner = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0.5em 1em;
  padding: 0.25em 1em;

  ${(props) =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `}
`

const Container = styled.div`
  text-align: center;
`
export default class Button extends React.Component {
  state: state
  constructor(props: object) {
    super(props)

    this.state = { count: 0 }
  }
  handleClick() {
    this.setState((prevState: state) => {
      return { count: prevState.count + 1 }
    })
  }
  render() {
    return (
      <Container>
        <ButtonInner>Normal Button</ButtonInner>
        <ButtonInner primary>Primary Button</ButtonInner>
      </Container>
    )
  }
}
