import React from "react";
import { useTodo } from "../context";

{/* <TodoItem key={todo.id} todo={todo} /> */}
const TodoItem = ({todo}) => {
    /* The TodoItem component receives the todo object as a prop from its parent component (likely App). now then it aain give the data to app so then we will loop to get data  */

  const [isTodoEditable, setIsTodoEditable] = useState(false);// This means the todo is not editable by default.
/*
The isTodoEditable state determines whether the todo is in edit mode. It starts as false, is toggled to true when the user clicks the edit button, and is set back to false when the user saves the changes. This state is managed locally within the TodoItem component using useState.
*/

  // which is the todo property of the todo object.
  const [todoMsg, setTodoMsg] = useState(todo.todo);// todo is getting and that to is passed to todo var
 // useState only sets the initial value on the first render. 


  // useTodo is a function, so you need to call it using parentheses (useTodo()) to get the returned value.
 // Without the parentheses, you would just be referencing the function itself, not the value it returns.
  const {updateTodo, deleteTodo, toggleComplete } = useTodo()// useTodo is a custom hook, and hooks in React are functions. When you call useTodo(), it returns an object, and you are destructuring that object to extract the updateTodo, deleteTodo, and toggleComplete functions.
//  Always call the custom hook with parentheses:
  /*updateTodo refers to the updateTodo function.
deleteTodo refers to the deleteTodo function.
toggleComplete refers to the toggleComplete function.*/

  const editTodo = () => {//updateTodo needs (id, todo) from here it will get the id and todo
    updateTodo(// save, When the user saves the changes (by clicking the save button), the updated todoMsg is sent back to the parent component via the updateTodo function.
        todo.id,
        // getting all the value, we need to update only one value
        // whatever the user type in the edit it will be stored in the todoMsg
        {...todo, todo: todoMsg }//This overwrites the todo property of the(creating a) new object with the value of todoMsg.
        // {...todo} means that we are creating a new object by copying all the properties of the original todo object.
        // {...todo, todo: todoMsg} means that we are creating a new object by copying all the properties of the original todo object, and then updating the todo property with the value of todoMsg.

        // the spread operator (...) is used to copy all the properties of the original todo object into a new object.
        // Then we update the todo property with the new value.
        // This ensures that only the todo property is updated while keeping the other properties (id, completed, etc.) unchanged.
    );
    setIsTodoEditable(false);// Inside editTodo, the setIsTodoEditable(false) line is used to set the isTodoEditable state to false after the user finishes editing the todo disabling edit mode.

  };
  
return (
    <div
      className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
        todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
      }`}
    >
      <input
        type="checkbox"
        className="cursor-pointer"
        checked={todo.completed}
        onChange={toggleCompleted}
      />
      <input
        type="text"
        className={
        `border outline-none w-full bg-transparent rounded-lg 
        ${isTodoEditable ? "border-black/10 px-2" : "border-transparent"} 
        ${todo.completed ? "line-through" : ""}`
        }
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}// by default false, When isTodoEditable is true, the readOnly attribute of the input field is removed, allowing the user to edit the todo
      />
      {/* Edit, Save Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
        onClick={() => {
          if (todo.completed) return; // Prevent editing if the todo is completed

          if (isTodoEditable) { 
            editTodo(); // Save the changes if already in edit mode
          } else setIsTodoEditable((prev) => !prev); // Toggle to true to enable edit mode
        }}// If isTodoEditable is false, clicking the button sets it to true, enabling edit mode.
        disabled={todo.completed}
      >
      {/* The button text changes dynamically based on the value of isTodoEditable */}
      {/* If isTodoEditable is true, the button shows 📁 (save icon).
I     if isTodoEditable is false, the button shows ✏️ (edit icon). */}
        
        {isTodoEditable ? "📁" : "✏️"}

        {/* When the user clicks the save button (📁), the editTodo function is called */}
      </button>
      {/* Delete Todo Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
        onClick={() => deleteTodo(todo.id)}
      >
        ❌
      </button>
      {/* Toggle Todo Complete Button */}
    </div>
  );
};

export default TodoItem;