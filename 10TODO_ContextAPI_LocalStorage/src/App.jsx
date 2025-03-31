import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

// import TodoContextProvider from "./context/TodoContextProvider";

import { TodoContextProvider } from "./context";

// import moduleName from 'module'

import "./App.css";
import { useEffect } from "react";

function App() {

  const [todos, setTodos] = useState([]);// by default empty array

  // addTodo function
  const addTodo = (todo) => {
    // new todos array
    setTodos((prevTodo)=>{// This is the current state of the todos array.
      // The new array, which includes all previous todos and the new todo, is returned and set as the new state.
      return [...prevTodo, { // Spread(The spread operator copies all the existing todos) the previous todos into the new array
        // A new todo object is created with a unique id (using Date.now()) and the properties of the todo parameter(default).
        id: Date.now(), // Add a unique ID for the new todo
        ...todo // Spread the properties of the new todo object
        // title: todos,
        // completed: false,
      }];
    })
  }
/*
In the addTodo function, you are returning a new array because React's useState requires you to update the state immutably. This means you cannot directly modify the existing todos array; instead, you must create a new array with the updated values.

Why Return a New Array?
React's state management relies on detecting changes to the state. If you modify the existing array directly, React may not detect the change because the reference to the array remains the same. By creating a new array, you ensure that React recognizes the state update and re-renders the component.
*/
  // given id and new todo
  const updateTodo = (id, todo)=>{
    // todos is an array we have to loop then we need to find by id
    setTodos((prevValues)=>{// previous array state
      const updatedTodos = prevValues.map((prevTodo)=>{// object-id(individual todo)
      /* 
      Check if the current todo matches the id
       If it does, replace it with the new todo object
       If it doesn't, return the original todo object
       */

       // when updating a todo, you're replacing the entire todo object with todo, but this removes the id. You should preserve the id
       // return prevTodo.id === id ? todo : prevTodo 
       // return prevTodo.id === id? {...prevTodo, title: todo.title, completed: todo.completed } : prevTodo; // would work similarly, but it is less flexible when it is compared 
        return prevTodo.id === id ? { ...prevTodo, ...todo } : prevTodo;
      })
      return updatedTodos;// here instead of making an variable we coulkd have directly return it like the other methods too 
    })
  }// To ensure that only the updated fields are modified while preserving the existing properties, you should merge the existing prevTodo with the new todo object.

  // deleteTodo function
  const deleteTodo = (id) => {
    setTodos((prevTodo)=>{
      // filter out the todo with the given id
      return prevTodo.filter((todo) => todo.id!== id);
    })
  }

  // toggleComplete function
  const toggleComplete = (id) => {
    // setTodos((prevTodos) => prevTodos.map((todo) => todo.id === id? {...todo, completed:!todo.completed } : todo));
    setTodos((prevTodos)=>{
      return prevTodos.map((prevTodo)=>{// individual element
        // take all the values then overwrite the one value      
        //                            todos_previousValues, overwrite
        return prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed } : prevTodo
      });
    });
  };

  // local storage get in json parameter only key and set in string parameter key and value method
  useEffect(()=>{// localStorage can be directly accessed in client-side rendering. It won't be available during server-side rendering (SSR).
    // localStorage.getItem("todos")// this values are in string but we want in json

    /*const storedTodos = localStorage.getItem("todos");
    if(storedTodos){
      setTodos(JSON.parse(storedTodos));
    }*/

    const storedTodos = JSON.parse(localStorage.getItem("todos"));

    if (storedTodos && storedTodos.length > 0) {
      setTodos(storedTodos)
    }

  },[])
/*Key Points:
First useEffect: Saves the todos array to localStorage whenever it changes.
Second useEffect: Loads the todos from localStorage when the component mounts.
This ensures that your todos persist across page reloads.*/

  useEffect(()=>{
    // localStorage.setItem(Key,value)
    localStorage.setItem("todos", JSON.stringify(todos) )// key should be same as the get, todos is an array converted to string
  },[todos])

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
