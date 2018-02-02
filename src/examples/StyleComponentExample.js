import React, { Component } from "react";
import styled from "styled-components";

export const Button = styled.div`
  background: ${props => (props.primary ? "#EB4A5B" : "white")};
  color: ${props => (props.primary ? "white" : "#EB4A5B")};
  font-size: 1.25rem;
  margin: 0 2rem 0 0;
  padding: 1rem 4rem;
  border: 2px solid #eb4a5b;
  border-radius: 100px;
  display: inline-block;

  .text {
    color: yellow;
  }
`;

export default class ButtonStyleComponent extends Component {
  render() {
    return <Button {...this.props}>{this.props.children}</Button>;
  }
}
