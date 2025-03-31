import React, {useState} from "react";
import { useTodo } from "../context";
// import { useFormState } from "react-dom";

const [isTodo, setTodo] = useState("")// isTodo is the new todo in the form

const {addTodo} = useTodo()

const handleSubmit = (event) => {
    event.preventDefault();
    
    if (!isTodo) {
        return 
    }else{
        // id: Date.now() is not neccessary here otherwise it wil overwrite the previous id
        // addTodo({id: Date.now(), todo: todo, completed: false,    })// array containing objects so
        addTodo({todo: isTodo, completed: false,})// array containing objects so
       // Add the new todo
    }

    // after transferring the data from isTodo to todo we need to refresh the data of isTodo for that
    setTodo("")

}

const TodoForm = () => {
  return (
    <form
    onSubmit={handleSubmit} 
    className="flex">
      <input
        value={isTodo}
        onChange={(e) => setTodo(e.target.value)}  // update the state whenever the user types something in the input field
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
};

export default TodoForm;
