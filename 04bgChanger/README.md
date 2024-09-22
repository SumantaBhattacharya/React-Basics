# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


[![](https://img.youtube.com/vi/_lJ3KNMue3w/0.jpg)](https://youtu.be/_lJ3KNMue3w?si=WftmAuRGEQb4nK11)

```jsx
import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  let [isColor, setColor] = useState("olive");

  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor: isColor}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-md bg-white rounded-full p-3">
        <button className="outline-none bg-green-500 text-white font-bold py-2 px-4 rounded-full hover:bg-green-700 transition duration-300" onClick={() => setColor("green")}>Green</button>
        <button className="ml-4 bg-purple-500 text-white font-bold py-2 px-4 rounded-full hover:bg-purple-700 transition duration-300" onClick={()=> setColor("purple")}>Purple</button>
        <button className="ml-4 bg-yellow-500 text-white font-bold py-2 px-4 rounded-full hover:bg-yellow-700 transition duration-300" onClick={() => setColor("yellow")}>Yellow</button>
        <button className="ml-4 bg-blue-500 text-white font-bold py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300" onClick={() => setColor("blue")}>Blue</button>
        <button
  className="ml-4 bg-black text-white font-bold py-2 px-4 rounded-full hover:bg-gray-700 hover:text-white transition duration-300"
  onClick={() => setColor("black")}
>
  Click Me
</button>

        </div>
      </div>
    </div>
  );
}

export default App;
// tailwind is postcss plugin
// onlcik espects function
// onClick(setColor("red")) returns function not inside
// setColor itself a function
// function inside function
```
Here's a simplified Markdown note for handling `onClick` methods in React:

```markdown
# Handling `onClick` in React

## Function Reference

In React, the `onClick` method expects a function reference. You cannot directly pass parameters inside the function. Instead, you need to use one of the following approaches:

### 1. Arrow Function Syntax

Use an arrow function to pass parameters to your event handler:

```jsx
<button onClick={() => handleClick('parameter')}>Click Me</button>
```

### 2. ***Function Returning a Function***

Define a function that returns another function to handle parameters:

```jsx
const handleClick = (param) => () => {
  console.log(param);
};

<button onClick={handleClick('parameter')}>Click Me</button>
```

## Key Points

- **Function Reference:** `onClick` expects a function reference.
- **Arrow Functions:** Use arrow functions to handle parameters.
- **Function Returning Function:** Define a function that returns another function for parameter handling.
