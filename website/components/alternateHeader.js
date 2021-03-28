import { Component } from "react"

import "../styles/components/alternateHeader.css"

export default class extends Component {
  render() {
    return (
      <div className="alternate-header">
        <a href="/">
          <img src="/bn.png" />
        </a>
        <span className="alternate-header-label"> {this.props.displayMessage}</span>
      </div>
    )
  }
}
