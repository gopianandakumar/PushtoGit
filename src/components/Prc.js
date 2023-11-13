import React from "react";

class Prc extends React.Component {
  state = {
    product: "Nokia G42 5g",
    price: 13000,
  };
  constructor() {
    super();
    this.udpateData = this.udpateData.bind(this);
  }

  render() {
    return (
      <>
        <h1>{this.state.product}</h1>
        <h2>{this.state.price}</h2>

        <input id="price" type="number" />
        <br />
        <input id="product" type="text" />
        <button onClick={this.udpateData}>Click Me</button>
      </>
    );
  }

  udpateData() {
    let c = document.getElementById("price").value;
    let p = document.getElementById("product").value;

    this.setState({
      price: c,
      product: p,
    });
  }
}

export default Prc;
