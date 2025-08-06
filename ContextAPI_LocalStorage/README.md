# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# ***Context API with Local Storage | Project***  

[![Context API with Local Storage | Project](https://img.youtube.com/vi/6KQeopPE36I/maxresdefault.jpg)](https://youtu.be/6KQeopPE36I?si=wG45RyrceH7lrmUH)  

## *This video covers how to use `Context API with Local Storage` in a `To-Do List Project`. Learning about setting up Context API, managing state efficiently, and persisting data with local storage.*

### **Topics Covered:**  
- *Basic overview of Context API and Local Storage* 
- *Project setup and TODO list creation*  
- *Context API setup and functionality*  
- *Import reduction and UI implementation*  
- *CRUD operations (Add, Update, Delete, Toggle) for TODOs*  
- *Local storage integration using `useEffect`*  
- *Component structure: Todo Form & Todo Item*  
- *Debugging and final touches*  


## [***npm packages***](https://www.npmjs.com/)
```
- npm create vite@latest
- npm install
- npm install -D tailwindcss@3 postcss autoprefixer
```
## ***Commands used in terminal***
```
- npm create vite@latest
- cd 10TODO_ContextAPI_LocalStorage
- npm install
- npm run dev
- npm install -D tailwindcss@3 postcss autoprefixer
- npx tailwindcss init -p
```
## ***Essentials for this project***
- [***todoContextapiNotes***](https://github.com/hiteshchoudhary/chai-aur-react/blob/main/todoContextapiNotes.md)
- [***LocalStorageNotes***](https://www.w3schools.com/jsref/prop_win_localstorage.asp)
- [***localStorageNotes***](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)


### ***Passing data through the component tree without prop drilling is the primary puspose of the context API in React.***

- *The context API allows passing data through component tree without manually passing props down through every level.*

## ***Some Important Points***

- ***The toggleComplete function would typically take the id of the todo item as its parameter. This allows the function to identify which todo item's completed status needs to be toggled (i.e., switched between true and false).***

-  ***Using default export allows you to import the module with any name in other files, providing flexibility.***

- This is useful when the file exports only one main thing, like a context in this case. It simplifies the import syntax and makes it clear that this is the primary export of the file.
  -However, if you use a named export (e.g., export const TodoContext_api), you must import it with the exact name:

- Use default when the file has a single primary export, and use named when there are multiple exports.

- ***Direct Access to localStorage:***
   - ***You can directly access localStorage in the browser environment (e.g., in a React app running on the client side). This is because localStorage is part of the browser's window object, which is available in client-side rendering.***

  - ***Server-Side Rendering (SSR):***
    -  ***If you're using server-side rendering (e.g., with frameworks like Next.js), localStorage is not available during the server-side rendering phase because it runs in a Node.js environment, where the window object does not exist.***

The values stored in localStorage are always stored as strings, regardless of the data type you save. This is because localStorage is designed to store key-value pairs where both the key and value are strings.

When you save an object or array to localStorage, you need to convert it to a string using JSON.stringify(). Similarly, when you retrieve the data, you need to parse it back into its original format (e.g., an object or array) using JSON.parse().

Why is it stored as a string?
localStorage is part of the Web Storage API, which only supports string data. This limitation ensures simplicity and compatibility across different browsers.

Key Points:
`JSON.stringify():` *Converts objects or arrays into a string format for storage.*
`JSON.parse():` *Converts the string back into an object or array for use in your application.*
**Default Behavior**: *If localStorage.getItem() returns null (e.g., if the key doesn't exist), you should handle it gracefully (e.g., by using a default value like an empty array).*

Always call the custom hook with parentheses: