import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

// import TodoContextProvider from "./context/TodoContextProvider";

import { TodoContextProvider } from "./context";

// import moduleName from 'module'

import "./App.css";

function App() {

  const [todos, setTodos] = useState([]);// by default empty array

  // addTodo function
  const addTodo = (todos) => {
    // new todos array
    setTodos((prevTodo)=>{
      return [...prevTodo, {
        id: Date.now(),
        ...todos
        // title: todos,
        // completed: false,
      }];
    })
  }

  return (
    <TodoContextProvider value={{todos, addTodo, deleteTodo, updateTodo, toggleComplete  }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 
          className="text-5xl font-bold text-center mb-8 mt-2"
          style={{ fontFamily: 'MRKAM' }}
          >
            Manage Your Todos
          </h1>
          <div className="mb-4">{/* Todo form goes here */}</div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
          </div>
        </div>
      </div>
    </TodoContextProvider>
  );
}

export default App;
// control + shift + o
// control + shift + p
// control + shift + i = copilot
// control + shift + u = output
// control + shift + y = Debug Console
// control + shift + w = to close (✖)
// control + shift + h = to replace
// control + shift + g = git
// control + shift + d = debug
// control + shift + s = save
// control + shift + x = extension
// control + shift + c = cmd
// control + shift + m = problems

//  The verb "is" is used when referring to a singular subject, while "are" is used for plural subjects.
