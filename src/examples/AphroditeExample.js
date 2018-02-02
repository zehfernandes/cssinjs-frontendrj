import React, { Component } from "react";
import { StyleSheet, css } from "aphrodite";

export default class Button extends Component {
  render() {
    const className = css(styles.button, this.props.toogle && styles.toogle);
    return (
      <div className={className} {...this.props}>
        {this.props.children}
      </div>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    background: "white",
    color: "#EB4A5B",
    fontSize: "1.25rem",
    margin: "0 2rem 0 0",
    padding: "1rem 4rem",
    border: "2px solid #EB4A5B",
    borderRadius: "100px",
    display: "inline-block",
    transition: "background 150ms ease, color 150ms ease",
    cursor: "pointer"
  },

  toogle: {
    background: "#EB4A5B",
    color: "white"
  },

  small: {
    "@media (max-width: 600px)": {
      backgroundColor: "red"
    }
  }
});
