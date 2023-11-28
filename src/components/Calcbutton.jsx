import React from "react";

function Calcbutton({ inputHandler, clearData, sumData }) {
  return (
    <div className="keypad">
      <div className="row">
        <button
          className="digit"
          onClick={() => {
            inputHandler("9");
          }}
        >
          9
        </button>
        <button
          className="digit"
          onClick={() => {
            inputHandler("8");
          }}
        >
          8
        </button>
        <button
          className="digit"
          onClick={() => {
            inputHandler("7");
          }}
        >
          7
        </button>
        <button
          className="operator"
          onClick={() => {
            inputHandler("/");
          }}
        >
          /
        </button>
      </div>
      <div className="row">
        <button
          className="digit"
          onClick={() => {
            inputHandler("6");
          }}
        >
          6
        </button>

        <button
          className="digit"
          onClick={() => {
            inputHandler("5");
          }}
        >
          5
        </button>

        <button
          className="digit"
          onClick={() => {
            inputHandler("4");
          }}
        >
          4
        </button>
        <button
          className="operator"
          onClick={() => {
            inputHandler("*");
          }}
        >
          *
        </button>
      </div>
      <div className="row">
        <button
          className="digit"
          onClick={() => {
            inputHandler("3");
          }}
        >
          3
        </button>
        <button
          className="digit"
          onClick={() => {
            inputHandler("2");
          }}
        >
          2
        </button>
        <button
          className="digit"
          onClick={() => {
            inputHandler("1");
          }}
        >
          1
        </button>
        <button
          className="operator"
          onClick={() => {
            inputHandler("-");
          }}
        >
          -
        </button>
      </div>
      <div className="row">
        <button
          className="digit"
          onClick={() => {
            inputHandler("0");
          }}
        >
          0
        </button>
        <button
          className="fun-key"
          onClick={() => {
            clearData();
          }}
        >
          C
        </button>
        <button
          className="digit"
          onClick={() => {
            sumData();
          }}
        >
          =
        </button>
        <button
          className="operator"
          onClick={() => {
            inputHandler("+");
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default Calcbutton;
