import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    console.log("Binnen handleclick");
    fetch("./sample.txt")
      .then((r) => r.text())
      .then((text) => {
        console.log(text);
      });
  };

  render() {
    return (
      <div>
        <button
          onClick={this.handleClick}
          className="LoadMyFile"
          name="button"
          variant="flat"
        >
          test string
        </button>
      </div>
    );
  }
}

export default App;
