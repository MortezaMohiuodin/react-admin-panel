import * as React from "react"
import "./Button.scss"

interface state {
  count: number
}

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
      <div>
        <button className="button" onClick={this.handleClick.bind(this)}>
          click me!
        </button>
        <span>{this.state.count || 0}</span>
      </div>
    )
  }
}
