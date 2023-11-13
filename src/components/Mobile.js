import React, { Component } from "react";

export default class Mobile extends Component {
  constructor() {
    super();
    this.updatePrice = this.updatePrice.bind(this);
    this.state = {
      product: "Real Me 8 Pro",
      price: 12000,
    };
  }

  render() {
    return (
      <>
        <h1>Product:{this.state.product}</h1>
        <p>Price:{this.state.price}</p>
        <input id="product" type="text" />

        <input id="price" type="number" />
        <button onClick={this.updatePrice}>Click Me</button>
      </>
    );
  }

  updatePrice() {
    console.log("this methodi siclleeeeeeeeeeeee");
    let p = document.getElementById("price").value;
    let c = document.getElementById("product").value;

    this.setState(
      {
        price: p,
        product: c,
      },
      () => console.log(this.state.price)
    );
  }
}
