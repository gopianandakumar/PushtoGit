import React, { Component } from "react";

// class Counter extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       count: 0,
//     };
//   }

//   increment() {
//     this.setState({
//       count: this.state.count + 1,
//     });
//   }
//   render() {
//     return (
//       <div>
//         <h1>{this.state.count}</h1>
//         <button onClick={() => this.increment()}>Increment</button>
//       </div>
//     );
//   }
// }

class Counter extends Component {
  state = {
    counter: 1,
  };

  render() {
    return (
      <>
        <h1>Counter {this.state.counter}</h1>
        <button
          onClick={() => {
            this.setState({
              counter: this.state.counter + 1,
            });
          }}
        >
          Click Me
        </button>
      </>
    );
  }
}
export default Counter;
