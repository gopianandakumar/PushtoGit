// import React, { useState } from "react";

// function Todo() {
//   let [inputTask, updateInputTask] = useState();
//   let [data, setData] = useState([
//     {
//       id: 1,
//       task: "Learn React",
//     },
//     {
//       id: 2,
//       task: "Learn Angular",
//     },
//   ]);

//   let incs = 2;

//   let addNewTodo = () => {
//     console.log(inputTask);
//     if (inputTask === "") {
//       alert("Please add some data for Todo!");
//     } else {
//       let updatedData = [
//         ...data,
//         {
//           id: incs + 1,
//           task: inputTask,
//         },
//       ];
//       setData(updatedData);
//       updateInputTask("");
//     }
//   };

//   const deleteTodo = (id) => {
//     console.log("thissssssssssssssss");
//     console.log(data);
//     let udpateTod = data.filter((todo) => {
//       return todo.id != id;
//     });
//     console.log(udpateTod);
//     setData(udpateTod);
//   };
//   return (
//     <div className="container mt-5 w-50">
//       <h3 className="text-center">Tod App Using React</h3>
//       <div className="input-group">
//         <input
//           className="form-control"
//           type="text"
//           onChange={(e) => {
//             let task = e.target.value;
//             updateInputTask(task);
//           }}
//           value={inputTask}
//         />
//         <button
//           onClick={() => {
//             addNewTodo();
//           }}
//           className="btn btn-primary"
//         >
//           Add
//         </button>
//       </div>
//       <ul className="list-group mt-4">
//         {data.map((data) => {
//           return (
//             <li className="list-group-item">
//               <p>{data.task}</p>
//               <button
//                 onClick={() => {
//                   deleteTodo(data.id);
//                 }}
//                 className="btn"
//               >
//                 ❌
//               </button>
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//   );
// }

// export default Todo;

import React, { useState } from "react";

let inc = 0;

export const Todo = () => {
  const [newTodo, updateNewTodo] = useState("");
  const [todoList, updatetTodoList] = useState([]);

  const addNewTodo = () => {
    console.log(inc);
    if (newTodo === "") {
      alert("add something in todo list");
    } else {
      inc = inc + 1;
      let updatedTodoLis = [
        ...todoList,
        {
          id: inc,
          task: newTodo,
        },
      ];
      updatetTodoList(updatedTodoLis);
      updateNewTodo("");
      //   console.log(inc, "ddddddddddddddd");
    }
  };

  const deleteTodo = (to) => {
    console.log(to, todoList);
    let newA = todoList.filter((data) => data.id !== to.id);
    updatetTodoList(newA);
  };

  return (
    <div>
      <h1>Todo App with React</h1>
      <input
        type="text"
        onChange={(e) => {
          let te = e.target.value;
          updateNewTodo(te);
        }}
        value={newTodo}
      />
      <button
        onClick={() => {
          addNewTodo();
        }}
      >
        Add todo
      </button>
      <ul>
        {todoList.map((tod) => {
          return (
            <li>
              <p>{tod.task}</p>
              <button
                onClick={() => {
                  deleteTodo(tod);
                }}
              >
                X
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Todo;
