import React, { Component } from "react";

export default class HanEc extends Component {
  state = {
    name: "Nokia G42",
    price: 140000,
    vegatable_list: [],
  };
  constructor() {
    super();
    this.updateData = this.updateData.bind(this);
  }
  updateData = () => {
    let { name, price } = this.state;

    let pr = document.getElementById("ds").value || price;
    let ps = document.getElementById("dn").value || name;

    console.log(pr);
    console.log(ps);
    let dd = this.state.vegatable_list || [];
    dd.push({ price: pr, name: ps });
    this.setState({
      price: pr,
      name: ps,
      vegatable_list: dd,
    });
  };
  render() {
    localStorage.setItem("helloworld", "erler");
    console.log(this.state);
    return (
      <div>
        {this.state.vegatable_list.map((i) => (
          <div style={{ border: "2px solid red" }}>
            {console.log(i.name)}
            <h1>Product:{i.name}gggg</h1>
            <h1>Pirce:{i.price}</h1>
          </div>
        ))}
        <input type="text" id="ds" />
        <input type="text" id="dn" />
        <button onClick={this.updateData}>Update me!</button>
      </div>
    );
  }
}
