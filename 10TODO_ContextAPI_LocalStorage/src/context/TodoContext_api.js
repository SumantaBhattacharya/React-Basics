import React, {useContext} from 'react'

// Context

export const TodoContext_api = React.createContext({
    todos: [
        { id: 1, todo_title: 'Blog', completed: false },
        { id: 2, todo_title: 'Zerodha', completed: false },
        { id: 3, todo_title: 'Zoom', completed: false },
    ],
    addTodo: (todo_title) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {},
    updateTodo: (id) => {},
});

// Export it as default
export default TodoContext_api;

export const TodoContextProvider = TodoContext_api.Provider;

// pass this method inside useContext
export const useTodo = () => {
    return useContext(TodoContext_api);
};

/*
The toggleComplete function would typically take the id of the todo item as its parameter. This allows the function to identify which todo item's completed status needs to be toggled (i.e., switched between true and false).

Using default export allows you to import the module with any name in other files, providing flexibility.
This is useful when the file exports only one main thing, like a context in this case. It simplifies the import syntax and makes it clear that this is the primary export of the file.
However, if you use a named export (e.g., export const TodoContext_api), you must import it with the exact name:
import { TodoContext_api } from './TodoContext_api';
Use default when the file has a single primary export, and use named when there are multiple exports.

*/