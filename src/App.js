import React, { Component } from "react";
import ButtonStyleComponent from "./examples/StyleComponentExample";
import ToogleAphrodite from "./examples/AphroditeExample";
import ButtonTachyons from "./examples/TachyonsExample";

class App extends Component {
  constructor() {
    super();

    this.state = {
      toogle: true
    };
  }

  _handleClick = () => {
    this.setState({
      toogle: this.state.toogle ? false : true
    });
  };

  render() {
    return (
      <div className="pa4 helvetica">
        <h2 className="helvetica f4 fw6 f1-ns lh-title measure mt0">
          CSS in JS • Frontend RJ
        </h2>

        <div className="w-100 mb5">
          <h4 className="f4 fw3 ttu tracked lh-title mt0 mb3 avenir">
            style-component
          </h4>
          <ButtonStyleComponent>Normal</ButtonStyleComponent>
          <ButtonStyleComponent primary>Primary</ButtonStyleComponent>
        </div>

        <div className="w-100 mb5">
          <h4 className="f4 fw3 ttu tracked lh-title mt0 mb3 avenir">
            aphrodite
          </h4>
          <ToogleAphrodite
            toogle={this.state.toogle}
            onClick={this._handleClick}
          >
            Toogle
          </ToogleAphrodite>
        </div>

        <div className="w-100 mb5">
          <h4 className="f4 fw3 ttu tracked lh-title mt0 mb3 avenir">
            tachyons
          </h4>
          <ButtonTachyons>Normal</ButtonTachyons>
          <ButtonTachyons primary>Primary</ButtonTachyons>
        </div>
      </div>
    );
  }
}

export default App;
