import React, { Component } from "react";

export default class HanEc extends Component {
  state = {
    name: "Nokia G42",
    price: 140000,
  };
  constructor() {
    super();
    this.updateData = this.updateData.bind(this);
  }
  render() {
    return (
      <div>
        <h1>Product:{this.state.name}</h1>
        <h1>Pirce:{this.state.price}</h1>
        <input type="text" id="ds" />
        <button onClick={this.updateData}>Update me!</button>
      </div>
    );
  }
  updateData = () => {
    let pr = document.getElementById("ds").value;
    this.setState({
      price: pr,
    });
  };
}
