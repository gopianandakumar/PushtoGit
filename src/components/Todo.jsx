import React, { useState } from "react";

function Todo() {
  let [inputTask, updateInputTask] = useState();
  let [data, setData] = useState([
    {
      id: 1,
      task: "Learn React",
    },
    {
      id: 2,
      task: "Learn Angular",
    },
  ]);

  let incs = 2;

  let addNewTodo = () => {
    console.log(inputTask);
    if (inputTask === "") {
      alert("Please add some data for Todo!");
    } else {
      let updatedData = [
        ...data,
        {
          id: incs + 1,
          task: inputTask,
        },
      ];
      setData(updatedData);
      updateInputTask("");
    }
  };

  const deleteTodo = (id) => {
    console.log("thissssssssssssssss");
    console.log(data);
    let udpateTod = data.filter((todo) => {
      return todo.id != id;
    });
    console.log(udpateTod);
    setData(udpateTod);
  };
  return (
    <div className="container mt-5 w-50">
      <h3 className="text-center">Tod App Using React</h3>
      <div className="input-group">
        <input
          className="form-control"
          type="text"
          onChange={(e) => {
            let task = e.target.value;
            updateInputTask(task);
          }}
          value={inputTask}
        />
        <button
          onClick={() => {
            addNewTodo();
          }}
          className="btn btn-primary"
        >
          Add
        </button>
      </div>
      <ul className="list-group mt-4">
        {data.map((data) => {
          return (
            <li className="list-group-item">
              <p>{data.task}</p>
              <button
                onClick={() => {
                  deleteTodo(data.id);
                }}
                className="btn"
              >
                ❌
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Todo;
