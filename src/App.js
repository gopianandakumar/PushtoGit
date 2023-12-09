import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Message from "./components/Message";
import Counter from "./components/Counter";
import Mobile from "./components/Mobile";
import Prc from "./components/Prc";
import Fnc from "./components/Fnt";
import Bcg from "./components/Bcg";
import Lco from "./components/Lco";
import HanEv from "./components/HanEv";
import HanEc from "./components/HanEc";
import Todo from "./components/Todo";
import "./App.css";
import Destrap from "./components/Destrap";
import Twdb from "./components/Twdb";
import Calculator from "./Calculator";
import TestEffect from "./components/TestEffect";
import ProductList from "./components/ProductList";
import ProductLP from "./components/ProductLP";
import ImageRe from "./components/ImageRe";
import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login";
import Contact from "./components/Contact";
import Header from "./components/Header";

import { BrowserRouter } from "react-router-dom";

function App() {
  // const data = [
  //   {
  //     id: 1,
  //     name: "gopi",
  //     age: 23,
  //     city: "hyderabad",
  //   },
  //   {
  //     id: 2,
  //     name: "ravi",
  //     age: 23,
  //     city: "hyderabad",
  //   },
  //   {
  //     id: 1,
  //     name: "nani",
  //     age: 23,
  //     city: "hyderabad",
  //   },
  // // ];
  // function Message() {
  //   return <h1>uuuuuuuuuu</h1>;
  // }

  // let dataq = [
  //   {
  //     id: 1,
  //     name: "gopi",
  //     age: 3,
  //   },
  //   {
  //     id: 2,
  //     name: "ramesh",
  //     age: 4,
  //   },
  //   {
  //     id: 3,
  //     name: "pydi",
  //     age: 5,
  //   },
  // ];
  return (
    // <>
    //   <button onClick={Message}>Click</button>
    // </>
    // <Counter />
    // <Mobile />
    // <Prc />
    // <Fnc />
    // <Bcg />
    // <Lco />
    // <HanEv />
    // <HanEc />
    //  <Destrap/>
    // <> {
    //   dataq.map((i)=>(<Destrap {...i} />))
    // }</>
    // <Todo />
    // <Twdb />
    // <Calculator />
    // <TestEffect />
    // <ProductList/>
    // <ProductLP />
    // <ImageRe />
    <Header />
  );
}

const Movie = () => {
  return (
    <aritcle>
      <Image />
      <Title />
    </aritcle>
  );
};

const Title = () => {
  return <h2 style={{ color: "red", fontSize: "16px" }}>Kung Fu Panda</h2>;
};

const Image = () => {
  return (
    <img
      src="https://occ-0-3215-3662.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABW15GBTzru86iaN4ZrQHs_FSUT4gz3EmTQ7dF4yNpwUA4RgyExN9X6WdhKORNrwHprHOhOI8uNJ9euf_aFbsHBzkRNsTYFvpAFuIwcJ-jj4PCK_fTgyYAfnZG2c9OBrmeJhI.jpg?r=7f6"
      alt="nextflix"
    ></img>
  );
};

export default App;
