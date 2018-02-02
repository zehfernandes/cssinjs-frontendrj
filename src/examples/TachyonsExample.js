import React, { Component } from "react";

export default class ButtonTachyons extends Component {
  render() {
    let className = "f4 no-underline br-pill ba bw1 ph5 pv3 mr4 dib";
    className += this.props.primary ? " bg-red white" : " red";
    return <div className={className}>{this.props.children}</div>;
  }
}
