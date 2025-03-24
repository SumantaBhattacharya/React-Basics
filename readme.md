```javascript
import './App.css'
import { useState } from 'react';

function App() {
  // Using state to manage counter value
  const [counter, setCounter] = useState(5);

  const increaseValue = () => {
    setCounter((prevCounter) => prevCounter + 1);
    // setCounter(counter++);
    // setCount(counter + 1)
    console.log(counter)
  }

  const decreaseValue = () => {
    setCounter(prevCounter => prevCounter - 1);
  }

    /*const decreaseCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
    For the DecreaseCount button, I added a check to ensure the count doesn't go below 0 by using the condition if (count > 0).
    */

  return (
    <>
      <h2>Your chai is ready</h2>
      <h3>Counter value: {counter}</h3>
      <button onClick={increaseValue}>Increase value</button><br /><br />
      <button onClick={decreaseValue}>Decrease value</button>
    </>
  )
}

export default App;

```
```javascript
import './App.css'
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(5);
  let counter = 5;
  
  const increaseValue = () => {
    console.log(counter); // here the counter value is increasing but not on the return
    counter = counter + 1
  }

  return (
    <>
      <h2>Your chai is ready: {count}</h2>
      <h3>Counter value: {counter}</h3> 
      <button onClick={increaseValue}>Increase value</button><br /><br />
      <button >Decrease value</button>
      <button onClick={() => setCount(count + 1)}>
          count is {count}
      </button>
      <button onClick={() => setCount(count - 1)}>
          count is {count}
      </button>
      
    </>
  )
}

export default App;
```


Yes, you're correct! The syntax you mentioned, `() => {}` and `() =>`, are common ways to write arrow functions, and they are slightly different based on what you're trying to accomplish. Let's break them down:

### 1. ***Arrow Function with No Parameters***
```javascript
() => { /* function body */ }
```

```javascript
const sayHello = () => {
  console.log("Hello!");
};
```

This arrow function takes no arguments.

### 2.***Arrow Function with a Single Line (Implicit Return)***
```javascript
() => expression
```
- If the function body is a single expression. The expression will be returned automatically.

For example:
```javascript
const double = x => x * 2;
```

### 3. ***Arrow Function with a Single Parameter***
If you have only one parameter, you can omit the parentheses:
```javascript
x => x * 2
```
This is a shorthand version of:
```javascript
(x) => x * 2
```

### 4. ***Your Example:*** `prevCounter => prevCounter - 1`
In your code:
```javascript
setCounter(prevCounter => prevCounter - 1);
```
- **`prevCounter`**: The single parameter passed to the arrow function.

Both of these syntaxes are valid and functionally equivalent:

1. **Without Parentheses for Single Parameter:**
   ```javascript
   setCounter(prevCounter => prevCounter - 1);
   ```
   This is the concise syntax where `prevCounter` is the parameter, and the expression `prevCounter - 1` is returned implicitly.

2. **With Parentheses for Single Parameter:**
   ```javascript
   setCounter((prevCounter) => prevCounter - 1);
   ```
   Here, `prevCounter` is enclosed in parentheses, and the syntax is more explicit. This can be useful for readability, especially if you have more complex functions or multiple parameters.

### ***Summary***

- **Single Parameter**: For functions with a single parameter, you can omit the parentheses around the parameter, though including them does not change the function's behavior.
- **Multiple Parameters**: If a function has multiple parameters or no parameters, parentheses are required.

Since it’s a single parameter and a single expression, parentheses around the parameter and curly braces around the function body are not needed.

### ***Summary***
- **`() => {}`**: Arrow function with no parameters and a function body.
- **`() => expression`**: Arrow function with no parameters and a single expression with an implicit return.
- **`param => expression`**: Arrow function with one parameter and a single expression with an implicit return.

## ***State in React***
The state is built-in React object that is used to contain data or information about the component.
A component's state can change over time; whenever it changes, the information re-renders

## ***Hooks***
Hooks were a new additionin React 16.8
They let you use state and other react features without writting a class
2019
15 hooks

React provides several built-in hooks, and here are 15 commonly used ones:

<!-- useState: Manages local state in a functional component.
useEffect: Performs side effects in functional components (e.g., data fetching, subscriptions).
useContext: Accesses the value of a React context.
useReducer: An alternative to useState for more complex state logic.
useCallback: Memoizes a function to avoid unnecessary re-renders.
useMemo: Memoizes a value to avoid unnecessary calculations on re-renders.
useRef: Creates a mutable object that persists across renders (often used for DOM manipulation).
useImperativeHandle: Customizes the instance value that is exposed to parent components when using ref.
useLayoutEffect: Similar to useEffect, but runs synchronously after all DOM mutations.
useDebugValue: Displays a label for custom hooks in React DevTools.
useTransition: Manages transitions between UI states.
useDeferredValue: Defers the calculation of a value until a less busy time.
useId: Generates a unique ID for accessibility purposes (introduced in React 18).
useSyncExternalStore: Used for reading an external store in React components (introduced in React 18).
useInsertionEffect: Allows you to inject styles before any DOM mutations (introduced in React 18). -->

### useState()
useState is a React Hook that lets you add a state variable to your component

```javascript
const [state,setstate] = useState(initialState);
```
```
https://react.dev/reference/react/useState

useState returns an array with exactly two values:
1. The current state. During the first render,it will match the initialState you have passed.
2. the set function that lets you update the state to a different value and trigger a re-render

Returns an array with exactly two values 
```
```javascript
 const [count, setCount] = useState(5);
```
```
When the user double clicks on the button, the console will log "clicked".

When the user clicks on the button twice:
isLiked = false
Unliked
initially it will set to false

When the user clicks on the button twice:
isLiked = true
liked
```
```javascript
// let arr = useState(0);
// const [state,setstate] = useState(initialState);
// const [state,setstate] = useState(initialState);
const [count, setCount] = useState(0);
console.log(arr);// initialState in our case 0, function
// Hooks can only be called inside of a body component
// {isLiked} boolean values dont get print by default so we convert it to string in react
```

```html
            <p onDoubleClick={clicked}>
              liked is {isLiked.toString()}
            <i className="fa-regular fa-heart"></i>
            </p>
```
```javascript
        <div>
            <p onDoubleClick={clicked}>
                {isLiked ?(
                   <p> liked is {isLiked.toString()} </p>
                ):(
                    <p> Unliked is {isLiked.toString()} </p>
                )}
            </p>
        </div>
```
```javascript
<p onDoubleClick={()=>setIsLikes(!isLiked)}>Like Button {isLiked? <i className="fa-solid fa-heart"></i> : <i className="fa-regular fa-heart"></i>}</p>
```
```javascript
import { useState } from "react";
export default function likeButton() {

    let [isLiked, setIsLikes] = useState(false)

    let clicked = ()=>{
        setIsLikes(!isLiked)// if false then true if true then false | toggle
    }

    let styles = {color: "red"}



    return (
        <div>
            <p onDoubleClick={clicked}>
                {isLiked ?(
                    <i style={styles} className="fa-solid fa-heart"></i>
                ):(
                    <i className="fa-regular fa-heart"></i>
                )}
            </p>
        </div>
    )
}
```

## ***Closure***
`Closure`: A closure is a feature in JavaScript where an inner function has access to the outer (enclosing)
function's variables

* *In JS, once a function completes its execution. any variable, that were defined inside the function scope ceases to exist*

```javascript
function outer(){
  var b = 10; // after completion of this function variable delete
  function inner(){
    var a= 20;
    console.log(a+b)
  }
  return inner; // we are returning to the access to outer
}// then we have access to inner by passing the reference to a varaiable

/*
outer() is called, and it initializes b = 10, defines the inner() function, and returns the inner function itself.
var func = outer(); stores the returned inner() function reference in func.
func(); executes the inner() function, which has access to both a = 20 and b = 10 (because of the closure). The sum of a + b (i.e., 20 + 10 = 30) is logged to the console.

call outer() without invoking the returned function inner(), nothing will be printed or logged to the console. This is because outer() only returns the inner function, but it does not execute it.

so first initialise then execute


If you directly execute the inner() function inside outer(), it will run when outer() is called, but you won’t have access to it later because it is not returned. The whole idea behind returning inner is to create a closure, which allows you to execute the inner() function later and keep its access to the variables within the outer() scope.

function outer() {
  var b = 10;
  function inner() {
    var a = 20;
    console.log(a + b); // Logs 30
  }
  return inner; // Returning inner for later execution
}

var func = outer(); // outer() returns inner()
func(); // Now we can call inner() later, logs 30

In this case, when you call outer(), inner() is immediately executed and logs 30.
However, once outer() finishes, the inner() function is no longer accessible because it was not returned.
Closure: Even though outer() has finished, the returned inner function still has access to variables in outer()'s scope (like b). This is called a closure.

function outer() {
  var b = 10;
  function inner() {
    var a = 20;
    console.log(a + b); // Logs 30
  }
  
}

inner(); //will result an error

*/
```

## ***Callbacks in Updater Function***
How to change state whhen it depends on the current value
if setCount(count+ 1) defined multiple times in a function it only excecutes once
useState is a asynchorous method 

to fix it we use callbacks

let intCount()=>{
  setCount(count + 1)
  setCount(count + 1) // like this does not work multiple time so
}

let intCount()=>{
  setCount((currCount)=> currCount + 1)
  setCount((currCount)=>{
    return currCount + 1
    }) // considering previous value also
}

once the state changes it re-renders the whole code if the state does not perform any changes then the rerendered will not performed before than it rerender once then i will perform these actions

---

# ***React Virtual DOM, Fiber, and Reconciliation***

[![Virtual DOM, Fiber, and Reconciliation](https://img.youtube.com/vi/MPCVGFvgVEQ/0.jpg)](https://youtu.be/MPCVGFvgVEQ?si=XbD46MRlEtlbAw4k)


## Takeaways from the Video

1. **Virtual DOM and Actual DOM**:
    - The `createRoot` method creates its own DOM and compares it with the web browser's DOM. It updates only those components that have changed.
    - On the other hand, the browser reloads the entire DOM, recreating everything, which is more resource-intensive.
    - The virtual DOM, however, tracks the entire DOM in a tree-like structure and updates only the parts that have changed.

2. **Network Calls and Updates**:
    - Some values depend on network calls, so when a value is updated, it may get updated again via a network call. 
    - To avoid this overhead, it's possible to drop unnecessary updates for immediate value changes.

3. **React's Fiber Algorithm**:
    - The current algorithm used by React is called the **Fiber Algorithm**.
    - Fiber helps with **incremental rendering**, allowing the splitting of work into smaller chunks spread over multiple frames.

4. **Reconciliation Algorithm**:
    - The algorithm React uses to differentiate the browser's DOM tree and the virtual DOM tree formed through `createRoot` is called **Reconciliation**.
    - **Reconciliation** is essentially the process behind what is popularly known as the **Virtual DOM**.

5. **Performance Optimization**:
    - In UI rendering, it's not always necessary to apply updates immediately. React uses optimization algorithms like **Fiber** to prioritize different types of updates and make sure the UI performs smoothly.

## Key Concepts Explained

1. **Virtual DOM**:
    - Virtual DOM is an in-memory representation of the actual DOM. 
    - When state or props change, React creates a new virtual DOM with those changes. This process is lightweight and frequent.
    
2. **Diffing Algorithm**:
    - React uses a **diffing algorithm** to identify differences between the old and new virtual DOMs. It then batches minimal sets of changes and ensures that only the necessary parts of the actual DOM are updated.
    
3. **Reconciliation**:
    - The process of diffing and re-rendering is called **Reconciliation**. It compares the updated virtual DOM with the previous one and updates only the parts of the real DOM that have changed. This is why React is efficient and fast.

## Behind-the-Scenes of React

In this video, we get a detailed behind-the-hood look at the working mechanisms of React, covering:

1. Why immediate updates are not always good for performance.
2. The **Reconciliation Algorithm** that ensures efficient updates.
3. The properties and functionalities of React's **Fiber** architecture.

---

### Additional Highlights

- **Reconciliation** is the algorithm React uses to decide what to update and when.
- React **Fiber** is a new implementation aimed at increasing the stability of areas like animation, layout, and gesture handling.
- **Incremental rendering** helps improve performance by allowing work to be spread over multiple frames.
- React **Fiber** also introduces features like suspense, enabling more efficient UI updates.

## Behind the Scenes: createRoot and Virtual DOM
-[github-Article on react-fiber-architecture](https://github.com/acdlite/react-fiber-architecture?search=1)
Virtual DOM Creation:

When you use createRoot from 'react-dom/client', React creates an in-memory representation of the actual DOM called the virtual DOM. This is a lightweight copy of the actual DOM, stored in memory.
Change Detection:

When changes occur in the UI (due to state/prop updates), React doesn't immediately update the actual DOM. Instead, it updates the virtual DOM.
The virtual DOM forms a tree-like structure representing the component hierarchy, where each node corresponds to a DOM element.
Reconciliation (Diffing Process):

React uses a diffing algorithm to compare the new virtual DOM (after the changes) with the previous virtual DOM.
It identifies exactly which elements or parts of the virtual DOM have changed, allowing it to focus only on the modified parts.
Efficient DOM Updates:

Once the differences are identified, React updates only the parts of the actual DOM that correspond to the changes in the virtual DOM. This is efficient because it avoids re-rendering the entire page.
Browser Behavior: Full Page Reload:

In contrast, without React or virtual DOM, browsers traditionally re-render the entire DOM when changes occur. This process involves removing the old DOM and rebuilding a new DOM with the updated elements, commonly referred to as page reload.
This is far less efficient because even small changes result in the browser reloading the entire page structure.
React's Approach:

React's approach is faster and more efficient because it minimizes the work done on the actual DOM. By focusing only on the specific elements that changed, it reduces the performance overhead and makes updates smoother, especially for large, complex UIs.
---
The algorithm React uses to diff two trees and determine which parts need to be changed is called the Reconciliation Algorithm. The two trees involved in this process are:

Previous Virtual DOM Tree: This represents the structure of the UI before the update (i.e., the state of the virtual DOM before any changes occurred).

New Virtual DOM Tree: This represents the structure of the UI after the update (i.e., the state of the virtual DOM after state or props have changed).

[![](https://img.youtube.com/vi/bB6707XzCNc/0.jpg)](https://youtu.be/bB6707XzCNc?si=oBrt2Y2MKk1fxV_e)


```markdown
# Understanding React Props

## What are Props?

In React, **props** (short for properties) are used to pass data from one component to another. Props are sent inside the component brackets.

Example:
```
 ```jsx
<Card channel="chaiaurcode" />
 ```

### ***Using Props***

1. **Curly Brackets for Variables**: Always use curly brackets to send variables as props.
   ```jsx
   <Card username="chaiaurcode" />
   <Card object={myObject} />
   <Card array={myArray} />
   ``` 

2. **Accessing Props**: Props are sent in object form to the component. To access them, use:
   ```jsx
   props.propertyName
   // or with default values
   const { propertyName = "defaultValue" } = props;
   ```

   Example:
   ```jsx
   // Accessing props
   props.username
   ```

## ***Topics Learned***

- **Exploring Props in React**: Understanding the importance and role of props.
- **Creating a Project with Vite in ReactJS**: Using Vite to set up a React project.
- **Installing and Using MPX with Tailwind in React**: Integrating MPX and Tailwind CSS for styling.
- **Using Fragments and Handling Image Tags**: Employing React fragments and image tags in ReactJS.
- **Making Components Reusable**: Utilizing props to enhance the reusability of components.
- **Understanding Props in ReactJS**: The role and importance of props in React.
- **Passing and Accessing Values Between Components**: How to pass and retrieve values using props.
- **Avoiding Unnecessary Dot Notation**: Streamlining prop usage without excessive dot notation.
- **Setting Default Values for Props**: Providing default values for props when none are received.
- **Basics of Props**: Fundamental knowledge about passing, handling, and using props in React.


- [tailwindcss-vite](https://tailwindcss.com/docs/guides/vite)
- [devUI](https://www.devui.io/components/cards)
- [error](https://www.devui.io/components/error)

[![](https://img.youtube.com/vi/tOYkV6Yhrhs/0.jpg)](https://youtu.be/tOYkV6Yhrhs?si=-T-CMVGyKaKw3XDy)


```markdown
# Understanding React State Updates

## Initial State

Assume the initial state of `count` is 69.

### Non-Functional Updater Syntax

Using the non-functional updater syntax, React does not guarantee that each `setCount` call will reflect the updated state from previous calls.

**Example:**

```jsx
const [count, setCount] = useState(69);

// First Call
setCount(count + 1); // Schedules an update to set count to 70 (69 + 1)

// Second Call
setCount(count + 1); // Schedules another update to set count to 70 (69 + 1)

// Third Call
setCount(count + 1); // Schedules yet another update to set count to 70 (69 + 1)
```

In this case, each `setCount` call schedules an update based on the initial `count` value (69). React batches state updates, and because the state is not yet updated between calls, the final state will be 70, as each `setCount` call is working with the same initial state.

### ***Functional Updater Syntax***

Using the functional updater syntax, React ensures that updates are based on the latest state.

**Example:**

```jsx
const [count, setCount] = useState(69);

// First Call
setCount(prevCount => prevCount + 1); // Schedules an update to set count to 70

// Second Call
setCount(prevCount => prevCount + 1); // Schedules an update to set count to 71

// Third Call
setCount(prevCount => prevCount + 1); // Schedules an update to set count to 72
```

With the functional updater, each call to `setCount` receives the most recent state, ensuring that updates are applied incrementally.

## ***React State Batching***

When multiple state updates are scheduled, React batches these updates for performance optimization. 

**Without Callback:**

```jsx
setCounter(counter + 1); // Updates counter only once if multiple calls are made in quick succession
```

React batches these updates, resulting in only one state update if the same value is used.

**With Callback:**

```jsx
setCounter(prevCounter => prevCounter + 1); // Updates counter incrementally with each call
```

When using a callback function, each call to `setCounter` receives the latest state, allowing the state to be updated incrementally.

## ***Key Points***

1. **Non-Functional Updater**: If you pass a variable directly to the setter function, React may batch updates, leading to only one update being applied if multiple updates are scheduled with the same value.

2. **Functional Updater**: Passing a callback function to the setter ensures that each update is based on the most recent state, allowing for incremental updates.

3. **State Batching**: React optimizes state updates by batching them together. Understanding this behavior helps in optimizing performance and reducing unnecessary re-renders.

4. **React Reconciliation**: React efficiently manages state updates and re-renders only the necessary components, improving performance.

## ***Conclusion***

To ensure accurate state updates in scenarios involving multiple calls to the setter function, use the functional updater syntax. This approach leverages React's state management capabilities, ensuring that each update reflects the most recent state.


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

[![Tutorial Video](https://img.youtube.com/vi/Lt4vy8hfc-s/hqdefault.jpg)](https://youtu.be/Lt4vy8hfc-s?si=N1OXAt0gP09dw3Mo)

## Summary

1. **useCallback**: Used for optimization. It memoizes functions so that they are not recreated on every render. This helps in preventing unnecessary re-renders of child components that rely on these functions. It returns a memoized version of the function that only changes if the dependencies change.

2. **useEffect**: Executes side effects in function components. It runs the provided function after the component renders. It can be configured to run on every render or only when specified dependencies change. 

3. **useRef**: Provides a way to directly access and manipulate DOM elements or component instances. Useful for accessing the current value of a DOM element or storing mutable values that do not cause re-renders.

### Key Differences Between useEffect and useCallback

- **useEffect**: Executes the callback function whenever the dependencies change or when the component mounts. It is used to perform side effects such as data fetching, subscriptions, or manually changing the DOM.

- **useCallback**: Returns a memoized callback function that changes only when the specified dependencies change. It is primarily used to optimize performance by preventing unnecessary re-creations of functions.

### Important Points

1. **useCallback**: Mainly responsible for memoizing the function reference to avoid unnecessary re-renders. It stores the function in memory so that the reference does not change unless its dependencies change.

2. **useEffect**: Runs the function whenever the dependencies change or on the initial render. It is used to handle tasks like calling functions or performing actions based on changes in dependencies.

### Additional Insights

- To keep track of length, use an `<input type="range">` with a `value` attribute bound to a state variable (e.g., `length`). Implement a function to handle length changes and pass it to the `onChange` event of the input.

- `useRef` allows manipulation of DOM elements or storing mutable values. For example, `passwordRef.current?.setSelectionRange(0, 3)` will change the UI to select the first three characters but does not affect what is copied to the clipboard. The entire password text will be copied, not just the selected portion.

## Topics Covered

- Introduction
- Project setup
- Start
- Use of `useState` hook
- Generating password (using `useCallback` hook for memoization)
- Designing UI
- Explaining check mark at radio button
- Calling of password generator function
- Use of `useEffect` hook
- Copy button using `useRef`
- Copying a range from the password field
- Summary

### Summary of Hooks Covered

1. **`useCallback`**: Used for optimization to memoize functions based on dependencies.
2. **`useEffect`**: Executes functions on component mount and when dependencies change.
3. **`useRef`**: Provides a way to reference and manipulate DOM elements directly.

Here are the key changes you need to make to your code:

1. **Add State for Alert Message:**
   Add a state variable to manage the alert message.

   ```jsx
   const [alertMessage, setAlertMessage] = useState("");
   ```

2. **Update `copyToClipboard` Function:**
   Modify the `copyToClipboard` function to set the alert message and clear it after a few seconds.

   ```jsx
   const copyToClipboard = useCallback(() => {
     window.navigator.clipboard.writeText(ispassword)
       .then(() => {
         setAlertMessage('Password copied to clipboard!');
         setTimeout(() => setAlertMessage(''), 3000); // Hide alert after 3 seconds
       })
       .catch((err) => {
         console.error('Failed to copy password: ', err);
         setAlertMessage('Failed to copy password.');
         setTimeout(() => setAlertMessage(''), 3000); // Hide alert after 3 seconds
       });
   }, [ispassword]);
   ```

3. **Display Alert Message:**
   Add the following JSX to display the alert message conditionally.

   ```jsx
   {alertMessage && (
     <div className="fixed bottom-4 right-4 bg-blue-500 text-white p-4 rounded shadow-md">
       {alertMessage}
     </div>
   )}
   ```

Add these changes to the appropriate sections of your existing code to incorporate a custom alert message.

[![React Form Tutorial](https://img.youtube.com/vi/AFDYnd-XPa8/0.jpg)](https://youtu.be/AFDYnd-XPa8?si=4BkpFrTzMZaN5xbs)

Here's a concise cheat sheet for Tailwind CSS to help you with commonly used utility classes:

### **1. Layout**
- **Container**: `container`
- **Padding**: `p-{size}` (e.g., `p-4`)
- **Margin**: `m-{size}` (e.g., `m-4`, `mx-auto`, `mt-2`)
- **Width**: `w-{size}` (e.g., `w-full`, `w-1/2`)
- **Height**: `h-{size}` (e.g., `h-screen`, `h-16`)
- **Flexbox**: `flex`, `flex-row`, `flex-col`, `justify-center`, `items-center`, `space-x-4`
- **Grid**: `grid`, `grid-cols-{n}`, `gap-{size}` (e.g., `grid-cols-2`, `gap-4`)

### **2. Spacing**
- **Padding**: `p-{size}`, `px-{size}`, `py-{size}`, `pt-{size}`, `pb-{size}`, `pl-{size}`, `pr-{size}`
- **Margin**: `m-{size}`, `mx-{size}`, `my-{size}`, `mt-{size}`, `mb-{size}`, `ml-{size}`, `mr-{size}`

### **3. Typography**
- **Font Size**: `text-{size}` (e.g., `text-sm`, `text-xl`)
- **Font Weight**: `font-{weight}` (e.g., `font-bold`, `font-medium`)
- **Text Color**: `text-{color}` (e.g., `text-gray-700`, `text-red-500`)
- **Text Alignment**: `text-left`, `text-center`, `text-right`, `text-justify`
- **Text Transform**: `uppercase`, `lowercase`, `capitalize`
- **Line Height**: `leading-{size}` (e.g., `leading-tight`, `leading-loose`)

### **4. Background**
- **Background Color**: `bg-{color}` (e.g., `bg-blue-500`, `bg-gray-100`)
- **Background Gradient**: `bg-gradient-to-{direction}` (e.g., `bg-gradient-to-r`)
- **Background Image**: `bg-{image}` (e.g., `bg-no-repeat`, `bg-cover`)

### **5. Borders**
- **Border Width**: `border`, `border-{size}` (e.g., `border-2`)
- **Border Radius**: `rounded`, `rounded-{size}` (e.g., `rounded-lg`, `rounded-full`)
- **Border Color**: `border-{color}` (e.g., `border-gray-300`, `border-red-600`)

### **6. Flexbox & Grid**
- **Flexbox**: `flex`, `flex-row`, `flex-col`, `flex-wrap`, `items-center`, `justify-between`, `gap-4`
- **Grid**: `grid`, `grid-cols-{n}`, `gap-{size}`, `grid-rows-{n}`

### **7. Sizing**
- **Width**: `w-{size}` (e.g., `w-full`, `w-1/2`, `w-auto`)
- **Height**: `h-{size}` (e.g., `h-screen`, `h-64`)
- **Min/Max Width**: `min-w-{size}`, `max-w-{size}`
- **Min/Max Height**: `min-h-{size}`, `max-h-{size}`

### **8. Colors**
- **Text Color**: `text-{color}`
- **Background Color**: `bg-{color}`
- **Border Color**: `border-{color}`
- **Shades**: `50`, `100`, `200`, `300`, `400`, `500`, `600`, `700`, `800`, `900` (e.g., `bg-gray-500`, `text-blue-700`)

### **9. Shadows**
- **Box Shadow**: `shadow-{size}` (e.g., `shadow-sm`, `shadow-lg`)

### **10. Transitions & Animation**
- **Transition**: `transition`, `transition-{property}` (e.g., `transition-all`, `transition-colors`)
- **Duration**: `duration-{time}` (e.g., `duration-150`)
- **Ease**: `ease-{type}` (e.g., `ease-in`, `ease-out`)

### **11. Miscellaneous**
- **Opacity**: `opacity-{value}` (e.g., `opacity-50`)
- **Z-Index**: `z-{index}` (e.g., `z-10`, `z-50`)
- **Cursor**: `cursor-pointer`, `cursor-not-allowed`

#### **Responsive Design**
- Use prefixes for responsive variants:
  - **Small Devices**: `sm:`
  - **Medium Devices**: `md:`
  - **Large Devices**: `lg:`
  - **Extra Large Devices**: `xl:`
  - **2XL Devices**: `2xl:`

For example:
```html
<p class="text-lg md:text-2xl lg:text-4xl">Responsive text size</p>
```

This should give you a handy reference for quickly working with Tailwind CSS! Let me know if you'd like more details on any section.

Yes, you can create a separate file for Tailwind CSS, similar to how you would structure a regular CSS file. Tailwind works with PostCSS, and it's often integrated with tools like Vite or Webpack in a build process, but you can definitely use a dedicated CSS file for your custom styles and Tailwind directives.

Here’s how you can do it:

### **1. Create a CSS File for Tailwind**
You can create a `styles.css` (or any name) file and include your custom styles along with Tailwind’s base, components, and utilities.

#### Example `styles.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Custom Styles */
.my-custom-style {
    @apply bg-blue-500 text-white p-4 rounded-lg;
}
```

- `@tailwind base`: Includes base styles such as resets and typography.
- `@tailwind components`: Includes component styles.
- `@tailwind utilities`: Includes all Tailwind utility classes.
- You can add custom styles by using the `@apply` directive or regular CSS as needed.

### **2. Configure Tailwind in `tailwind.config.js`**
In your `tailwind.config.js`, you should specify your custom CSS file (if you have a specific path):

```js
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}', './styles.css'], // Point to your CSS file
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### **3. Build Tailwind with PostCSS**
Ensure that Tailwind is being processed using PostCSS. If you are using a build tool like Vite, Webpack, or similar, make sure your `postcss.config.js` is set up properly to process the `@tailwind` directives.

Here’s an example `postcss.config.js`:

```js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

### **4. Import the CSS in Your App**
Now, you can import your `styles.css` in your main JavaScript or entry point file (e.g., `index.js` or `App.js`):

```js
import './styles.css';
```

### **5. Tailwind Build Commands**
If you are using Tailwind in production, don't forget to run the build command:

- **For development**: `npx tailwindcss -i ./src/styles.css -o ./dist/output.css --watch`
- **For production**: `npx tailwindcss -i ./src/styles.css -o ./dist/output.css --minify`

This will compile your Tailwind styles and output a minified CSS file for production.

---

This way, you can manage Tailwind styles in a separate CSS file and customize them using Tailwind directives like `@apply`. Does this approach work well with your project setup?

https://github.com/hiteshchoudhary/chai-aur-react/tree/main/06currencyConvertor

```
DELTA-
```
```
```javascript
// imr - import React from 'react';
// imdr - import ReactDOM from 'react-dom';
// control + shift + x
// rafce
import React from "react";
import { useState } from "react";

const Todo = () => {
  let [isTodo, setTodo] = useState(["sameple task"]);


  let[isError, setError] = useState("")

  // <i class="fa-solid fa-x"></i>
  // <i class="fa-solid fa-check"></i>

  /*let removeTask = (index) => {
    let newTodo = [...isTodo];
    newTodo.splice(index, 1);
    setTodo(newTodo);
  };*/

  /*let addTask = () => {
    let newTask = document.getElementById("taskInput").value;
    setTodo([...isTodo, newTask]);
    document.getElementById("taskInput").value = "";
  };*/

  /*let addTask = (event) => {
    if (event.key === "Enter") {
      let newTask = event.target.value;
      setTodo([...isTodo, newTask]);
      event.target.value = "";
    }
  }*/

  let addTask = ()=>{
    let newTask = document.querySelector("#taskInput").value;
    if (newTask !== "") {
      setTodo([...isTodo, newTask]);
      setError("")
    }else{
      setError("You cannot add your input without any characters")
    }
    document.querySelector("#taskInput").value = "";
  }

  /*

  let [isNewTodo, setNewTodo] = useState("")

  let addNewTodo = function name(params) {
    // console.log("we have to add new task in todo");
    setTodos([...isTodo, isNewTodo])
    setNewTodo("")
  }

  let updateTodoValue = (event)=>{
  setNewTodo(event.target.value);
  }

  input onChange={updateTodoValue} value={isNewTodo}
  button onClick={addNewTodo}

*/
  return (
    <div className="Todo" style={{
        maxWidth: "600px",
        margin: "20px auto",
        padding: "20px",
        backgroundColor: "#f5f5f5",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        fontFamily: "'Dancing Script', cursive", // Custom Italic Font
      }}
    >
      <div>
        <h3
          style={{
            fontSize: "1.8rem",
            fontStyle: "italic",
            color: "#333",
            marginBottom: "15px",
          }}
        >
          TODO:-
        </h3>
        <input
          placeholder="Add a task"
          type="text"
          id="taskInput"
          style={{
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            fontSize: "1rem",
            width: "100%",
            boxSizing: "border-box",
            marginBottom: "15px",
            fontFamily: "'Dancing Script', cursive", // Matching the font from the button
          }}
        />

        <br />
        <button
          style={{
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "1rem",
            transition: "background-color 0.3s ease",
            fontFamily: "'Dancing Script', cursive",
          }}
          onClick={addTask}//we cant have onClick twice in a tag
          onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
        >
          ADD TASK
        </button>
        {isError === "You cannot add your input without any characters" && <p style={{color: "red"}}>{isError}</p>}

        <hr />
      </div>

      <div>
        <h4
          style={{
            fontSize: "1.2rem",
            marginBottom: "10px",
          }}
        >
          TODO LISTS THESE ITEMS
        </h4>
        <ul>
          {isTodo.map((item, index) => (
            <li key={index} style={{ marginBottom: "5px" }}>
              {item}
              <button 
                style={{
                  marginLeft: "10px",
                  padding: "5px 10px",
                  backgroundColor: "#dc3545",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                  fontSize: "0.9rem",
                  transition: "background-color 0.3s ease",
                }}
                onMouseOver={(e) =>
                  (e.target.style.backgroundColor = "#c82333")
                }
                onMouseOut={(e) => (e.target.style.backgroundColor = "#dc3545")}
                onClick={() => setTodo(isTodo.filter((_, i) => i !== index))}
                // forget the _ and i is the index iif the index mattches with the existing elemenet then dont create a new array basicallt this filter method everytime it creates a new array with the following elements and rerender the state
              >
                X
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todo;

/*
            isTodo.map((item, index) => (
              <li key={index}>{item}</li>
            ))
*/
/*
            isTodo.map((item,index)=>{
              return (
                <li key={index}>{item}</li>
              )
            })
*/
/*

isTodo.map((item,index)=> <li key={index}>{item}</li> )
or 
isTodo.map((item,index)=> <li key={index}>{item}</li>) )
 */

/*
setTodo(...): This is the state update function from the useState hook, which updates the isTodo array. 
When you call setTodo(), it replaces the current isTodo value with a new value.

isTodo.filter((_, i) => i !== index):

isTodo is the current array of tasks.
.filter(...) is a JavaScript array method that creates a new array with all elements that pass the test in the provided function. In this case, the function is ( _, i ) => i !== index.
The function has two parameters:
_ (underscore) is a convention in JavaScript for a variable you don’t need to use (in this case, the task item itself isn't needed for this logic).
i is the index of the task in the isTodo array.
i !== index compares the index i of each item with the index of the current task being mapped over.
If the index of the task matches index, the function returns false (so that item is not included in the new array).
If the index doesn’t match, the function returns true (so that item is included in the new array).
The result:

This essentially removes the clicked item from the isTodo array because filter() creates a new array excluding the item with the clicked index.
After this, setTodo() updates the state to the new filtered array.
Example:
Let's say isTodo has the following values: ["task 1", "task 2", "task 3"].

If you click the button next to "task 2" (which has index = 1), the filter() method will create a new array that excludes the item at index 1: ["task 1", "task 3"].
Then setTodo() updates the isTodo array to this new filtered array, removing "task 2".

The map() method provides both item (the task itself) and index (the position of the task in the array). When you click the button next to a task, the index is passed to the onClick handler, which then uses it to identify and remove the task at that specific position from the isTodo array.

So, each button inside the list gets its own index based on the current task being rendered

index is the index of the item you clicked on (passed by the button’s onClick handler).
Scenario:
Suppose isTodo is ["task 1", "task 2", "task 3"], and you click the delete button for "task 2", which has an index of 1.

The .filter() method goes through the array like this:

For task 1 (at i = 0):
The current i is 0, and index is 1 (the item you clicked on).
i !== index → 0 !== 1 → true, so "task 1" is included in the new array.
For task 2 (at i = 1):
The current i is 1, and index is 1.
i !== index → 1 !== 1 → false, so "task 2" is not included in the new array (because this is the task you want to remove).
For task 3 (at i = 2):
The current i is 2, and index is 1.
i !== index → 2 !== 1 → true, so "task 3" is included in the new array.
Final result:
*/

```
```javascript
// imr - import React from 'react';
// imdr - import ReactDOM from 'react-dom';
// control + shift + x
// rafce
import React from "react";
import { useState } from "react";


const Todo = () => {
  let [isTodo, setTodo] = useState(["sameple task"]);
  let [isNewTodo, setNewTodo] = useState("")



  /*
  let [isNewTodo, setNewTodo] = useState("")

  let addNewTodo = function name(params) {
    // console.log("we have to add new task in todo");
    setTodos([...isTodo, isNewTodo])
    setNewTodo("")
  }

  let updateTodoValue = (event)=>{
  setNewTodo(event.target.value);
  }

  input onChange={updateTodoValue} value={isNewTodo}
  button onClick={addNewTodo}
*/

 let addTask= ()=>{
  if (isNewTodo.trim() !== "") {
    setTodo([...isTodo, isNewTodo]);
    setNewTodo(""); // Clear the input field
  } else {
    alert("You cannot add an empty task."); // Alert for empty input
  }
 }

 // Function to handle input changes OnChange = {updateTodoValue} value = {isNewTodo} | isNewTodo = ""
 const updateTodoValue = (event) => {//state change kerna ne ke liya hamne use SetNewTodo
   setNewTodo(event.target.value);// suppose in the input section we wrote REACT then isNewTodo = "REACT"
 }// value ai aut us value ko hamne save kerdiya use setNewTodo 
/*
When you type "REACT" into the input field, the conversion from user input to a string happens 
automatically as part of how web forms and JavaScript handle text inputs. 
*/

const handleKeyPress = (event) => {
  if (event.key === "Enter") {
    addTask();
  }
};


  return (
    <div className="Todo" style={{
        maxWidth: "600px",
        margin: "20px auto",
        padding: "20px",
        backgroundColor: "#f5f5f5",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        fontFamily: "'Dancing Script', cursive", // Custom Italic Font
      }}
    >
      <div>
        <h3
          style={{
            fontSize: "1.8rem",
            fontStyle: "italic",
            color: "#333",
            marginBottom: "15px",
          }}
        >
          TODO:-
        </h3>
        <input
          placeholder="Add a task"
          type="text"
          value={isNewTodo}
          onChange={updateTodoValue}
          onKeyDown={handleKeyPress}
          style={{
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            fontSize: "1rem",
            width: "100%",
            boxSizing: "border-box",
            marginBottom: "15px",
            fontFamily: "'Dancing Script', cursive", // Matching the font from the button
          }}
        />

        <br />
        <button
          style={{
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "1rem",
            transition: "background-color 0.3s ease",
            fontFamily: "'Dancing Script', cursive",
          }}
          onClick={addTask}//we cant have onClick twice in a tag
          onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
        >
          ADD TASK
        </button>

        <hr />
      </div>

      <div>
        <h4
          style={{
            fontSize: "1.2rem",
            marginBottom: "10px",
          }}
        >
          TODO LISTS THESE ITEMS
        </h4>
        <ul>
          {isTodo.map((item, index) => (
            <li key={index} style={{ marginBottom: "5px" }}>
              {item}
              <button 
                style={{
                  marginLeft: "10px",
                  padding: "5px 10px",
                  backgroundColor: "#dc3545",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                  fontSize: "0.9rem",
                  transition: "background-color 0.3s ease",
                }}
                onMouseOver={(e) =>
                  (e.target.style.backgroundColor = "#c82333")
                }
                onMouseOut={(e) => (e.target.style.backgroundColor = "#dc3545")}
                onClick={() => setTodo(isTodo.filter((_, i) => i !== index))}
                // forget the _ and i is the index iif the index mattches with the existing elemenet then dont create a new array basicallt this filter method everytime it creates a new array with the following elements and rerender the state
              >
                X
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todo;

/*
Example Walkthrough
Initial Render:

isNewTodo is "", so the input field is empty.
Typing "REACT":

Each keystroke triggers updateTodoValue, which sets isNewTodo to the new value. For example, after typing "R", "RE", "REA", and so on, isNewTodo updates to "R", "RE", "REA", respectively.
Display Value:

The value={isNewTodo} attribute ensures that the input field displays the current state of isNewTodo. Thus, as you type "REACT", the input field shows "REACT".
Why It Matters
Using state to control the input value ensures that your UI is in sync with your application's data. 
*/

/*
In React, you don’t directly manipulate the DOM to add or update elements like you might with `document.querySelector` or other DOM manipulation techniques. Instead, React uses a declarative approach to manage the UI based on the state. Here's how it works:

### Declarative vs. Imperative Approach

1. **Imperative Approach (e.g., DOM Manipulation with Query Selectors):**
   - You manually select DOM elements using methods like `document.querySelector` and then directly modify their content or structure.
   - Example: 
     ```javascript
     const list = document.querySelector('#myList');
     const newItem = document.createElement('li');
     newItem.textContent = 'New Task';
     list.appendChild(newItem);

   - This approach involves manually handling updates and ensures the DOM is in sync with the state of your application.

2. **Declarative Approach (e.g., React):**
   - You describe what the UI should look like based on the state of your application, and React takes care of updating the DOM to match this description.
   - React maintains a virtual DOM to efficiently manage updates. When the state changes, React calculates the difference between the current virtual DOM and the updated virtual DOM and applies the necessary changes to the actual DOM.

How React Handles List Updates

1. **State-Driven Rendering:**
   - React renders components based on their state. In your case, the list of tasks is managed through the `isTodo` state:
     ```javascript
     let [isTodo, setTodo] = useState(["sample task"]);
     
   - The list is rendered dynamically using the `map` method:
     javascript
     <ul>
       {isTodo.map((item, index) => (
         <li key={index}>
           {item}
           {}
           </li>
          ))}
        </ul>

   2. Updating the List:
      - When you add a new task or remove an existing one, you update the `isTodo` state:
      javascript
        const addTask = () => {
          if (isNewTodo.trim() !== "") {
            setTodo([...isTodo, isNewTodo]);
            setNewTodo(""); // Clear the input field
          } else {
            alert("You cannot add an empty task.");
          }
        };

      - React automatically re-renders the `<ul>` element to reflect the updated `isTodo` state. It handles the process of creating, updating, or removing DOM nodes based on the changes in the state.
   
   3. **Virtual DOM:**
      - React uses the virtual DOM to efficiently manage updates. When you call `setTodo`, React creates a new virtual DOM representation of the component.
      - It then compares the new virtual DOM with the previous one and determines the minimal set of changes needed to update the actual DOM.
      - React applies these changes to ensure that the rendered output matches the updated state.
   
Summary
   
   In React, you don’t need to manually select and update DOM elements. Instead, you update the component’s state, and React takes care of reflecting these updates in the UI. This approach abstracts away the direct manipulation of the DOM, making it easier to manage and reason about your UI changes.
   
   If you have any further questions or need clarification, feel free to ask!
*/
```

## Updating in Arrays
* ***Updating All Elements in Array***
```javascript
let UpperCaseAll=()=>{
  setTasks((prevTasks)=>{
    return (
      {...isTodo, 
        task: isTodo.task.toUpperCase(),
      };
    )
  })
}
```
* ***Updating One Element in Array***
```javascript
let upperCaseOne=((id)=>{
  setTasks(prevTasks)=>{
    if (todo.id === id){
      ...isTodo,
      task: isTodo.task.toUpperCase(),
    };
  }else{
    return todo;
  }
})
```
```javascript
// imr - import React from 'react';
// imdr - import ReactDOM from 'react-dom';
// control + shift + x
// rafce
import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Todo = () => {
  // let [isTodo, setTodo] = useState(["sameple task"]);
  let [isTodo, setTodo] = useState([
    {
      id: uuidv4(), //default
      task: "Sample task",
      isCompleted: false,
    },
  ]);

  let [isNewTodo, setNewTodo] = useState("");


  /*
  let [isNewTodo, setNewTodo] = useState("")

  let addNewTodo = function name(params) {
    // console.log("we have to add new task in todo");
    setTodos([...isTodo, isNewTodo])
    setNewTodo("")
  }

  let updateTodoValue = (event)=>{
  setNewTodo(event.target.value);
  }

  input onChange={updateTodoValue} value={isNewTodo}
  button onClick={addNewTodo}
*/

  let addTask = () => {
    if (isNewTodo.trim() !== "") {
      // setTodo([...isTodo, {task : isNewTodo, id: uuidv4()}]);
      //setTodo([...isTodo, { task: isNewTodo, id: uuidv4(), isCompleted: false }]); // Add new task to the list
      setTodo(() => {
        return [
          ...isTodo,
          { task: isNewTodo, id: uuidv4(), isCompleted: false },
        ]; // Add new task to the list
      });
      setNewTodo(""); // Clear the input field
    } else {
      alert("You cannot add an empty task."); // Alert for empty input
    }
  };

  // Function to handle input changes OnChange = {updateTodoValue} value = {isNewTodo} | isNewTodo = ""
  const updateTodoValue = (event) => {
    //state change kerna ne ke liya hamne use SetNewTodo
    setNewTodo(event.target.value); // suppose in the input section we wrote REACT then isNewTodo = "REACT"
  }; // value ai aut us value ko hamne save kerdiya use setNewTodo
  /*
When you type "REACT" into the input field, the conversion from user input to a string happens 
automatically as part of how web forms and JavaScript handle text inputs. 
*/

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      addTask();
    }
  };

  const handleDelete = (id) => {
    // item.id
    // setTodo(isTodo.filter(item => item.id !== id));
    setTodo((prevTodo) => prevTodo.filter((prevTodo) => prevTodo.id !== id));
  };

    // const [isEdit, setEdit] = useState(null) // State to track which task is being edited
    // const [isEditedTodo, setEditedTodo] = useState("") // State to hold the new value while editing



      

  return (
    <div
      className="Todo"
      style={{
        maxWidth: "600px",
        margin: "20px auto",
        padding: "20px",
        backgroundColor: "#f5f5f5",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        fontFamily: "'Dancing Script', cursive", // Custom Italic Font
      }}
    >
      <div>
        <h3
          style={{
            fontSize: "1.8rem",
            fontStyle: "italic",
            color: "#333",
            marginBottom: "15px",
          }}
        >
          TODO:-
        </h3>
        <input
          placeholder="Add a task"
          type="text"
          value={isNewTodo}
          onChange={updateTodoValue}
          onKeyDown={handleKeyPress}
          style={{
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            fontSize: "1rem",
            width: "100%",
            boxSizing: "border-box",
            marginBottom: "15px",
            fontFamily: "'Dancing Script', cursive", // Matching the font from the button
          }}
        />

        <br />
        <button
          style={{
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "1rem",
            transition: "background-color 0.3s ease",
            fontFamily: "'Dancing Script', cursive",
          }}
          onClick={addTask} //we cant have onClick twice in a tag
          onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
        >
          ADD TASK
        </button>

        <hr />
      </div>

      <div>
        <h4
          style={{
            fontSize: "1.2rem",
            marginBottom: "10px",
          }}
        >
          TODO LISTS THESE ITEMS
        </h4>
        <ul>
          {isTodo.map((item) => (
            <li key={item.id} style={{ marginBottom: "5px" }}>
              {item.task}
              <button
                style={{
                  marginLeft: "10px",
                  padding: "5px 10px",
                  backgroundColor: "#dc3545",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                  fontSize: "0.9rem",
                  transition: "background-color 0.3s ease",
                }}
                onMouseOver={(e) =>
                  (e.target.style.backgroundColor = "#c82333")
                }
                onMouseOut={(e) => (e.target.style.backgroundColor = "#dc3545")}
                onClick={() => handleDelete(item.id)}
                // if we convert it into arrow function then () => then this function will not call directly
                // forget the _ and i is the index iif the index mattches with the existing elemenet then dont create a new array basicallt this filter method everytime it creates a new array with the following elements and rerender the state
              >
                X
              </button>
              <button
              
                style={{
                  marginLeft: "10px",
                  padding: "5px 10px",
                  backgroundColor: "#ffc107",
                  color: "black",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                  fontSize: "0.9rem",
                  transition: "background-color 0.3s ease",
                }}
                onMouseOver={(e) => (e.target.style.backgroundColor = "#e0a800")}
                onMouseOut={(e) => (e.target.style.backgroundColor = "#ffc107")}
                onClick={() => {
                   
                  }}
              >
                <i class="fa-solid fa-u"></i>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todo;

/*
Example Walkthrough
Initial Render:

isNewTodo is "", so the input field is empty.
Typing "REACT":

Each keystroke triggers updateTodoValue, which sets isNewTodo to the new value. For example, after typing "R", "RE", "REA", and so on, isNewTodo updates to "R", "RE", "REA", respectively.
Display Value:

The value={isNewTodo} attribute ensures that the input field displays the current state of isNewTodo. Thus, as you type "REACT", the input field shows "REACT".
Why It Matters
Using state to control the input value ensures that your UI is in sync with your application's data. 
*/

/*
In React, you don’t directly manipulate the DOM to add or update elements like you might with `document.querySelector` or other DOM manipulation techniques. Instead, React uses a declarative approach to manage the UI based on the state. Here's how it works:

### Declarative vs. Imperative Approach

1. **Imperative Approach (e.g., DOM Manipulation with Query Selectors):**
   - You manually select DOM elements using methods like `document.querySelector` and then directly modify their content or structure.
   - Example: 
     ```javascript
     const list = document.querySelector('#myList');
     const newItem = document.createElement('li');
     newItem.textContent = 'New Task';
     list.appendChild(newItem);
     ```
   - This approach involves manually handling updates and ensures the DOM is in sync with the state of your application.

2. **Declarative Approach (e.g., React):**
   - You describe what the UI should look like based on the state of your application, and React takes care of updating the DOM to match this description.
   - React maintains a virtual DOM to efficiently manage updates. When the state changes, React calculates the difference between the current virtual DOM and the updated virtual DOM and applies the necessary changes to the actual DOM.

### How React Handles List Updates

1. **State-Driven Rendering:**
   - React renders components based on their state. In your case, the list of tasks is managed through the `isTodo` state:
     ```javascript
     let [isTodo, setTodo] = useState(["sample task"]);
     ```
   - The list is rendered dynamically using the `map` method:
     ```javascript
     <ul>
       {isTodo.map((item, index) => (
         <li key={index}>
           {item}
           {}
           </li>
          ))}
        </ul>

   2. **Updating the List:**
      - When you add a new task or remove an existing one, you update the `isTodo` state:
        ```javascript
        const addTask = () => {
          if (isNewTodo.trim() !== "") {
            setTodo([...isTodo, isNewTodo]);
            setNewTodo(""); // Clear the input field
          } else {
            alert("You cannot add an empty task.");
          }
        };

      - React automatically re-renders the `<ul>` element to reflect the updated `isTodo` state. It handles the process of creating, updating, or removing DOM nodes based on the changes in the state.
   
   3. **Virtual DOM:**
      - React uses the virtual DOM to efficiently manage updates. When you call `setTodo`, React creates a new virtual DOM representation of the component.
      - It then compares the new virtual DOM with the previous one and determines the minimal set of changes needed to update the actual DOM.
      - React applies these changes to ensure that the rendered output matches the updated state.
   
   ### Summary
   
   In React, you don’t need to manually select and update DOM elements. Instead, you update the component’s state, and React takes care of reflecting these updates in the UI. This approach abstracts away the direct manipulation of the DOM, making it easier to manage and reason about your UI changes.
   
   If you have any further questions or need clarification, feel free to ask!
*/

```
// EDIT BUTTON
```javascript
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Todo = () => {
  let [isTodo, setTodo] = useState([
    {
      id: uuidv4(),
      task: "Sample task",
      isCompleted: false,
    },
  ]);

  let [isNewTodo, setNewTodo] = useState("");
  const [isEdit, setEdit] = useState(null);
  const [isEditedTodo, setEditedTodo] = useState("");
  
  // State to track whether the text should be uppercase or lowercase
  const [isToggle, setToggle] = useState(true);

  let addTask = () => {
    if (isNewTodo.trim() !== "") {
      setTodo(() => [
        ...isTodo,
        { task: isNewTodo, id: uuidv4(), isCompleted: false },
      ]);
      setNewTodo("");
    } else {
      alert("You cannot add an empty task.");
    }
  };

  const updateTodoValue = (event) => {
    setNewTodo(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      addTask();
    }
  };

  const handleDelete = (id) => {
    setTodo((prevTodo) => prevTodo.filter((todo) => todo.id !== id));
  };

  const handleEditClick = (id, task) => {
    setEdit(id);
    setEditedTodo(task);
  };

  const handleEditChange = (event) => {
    setEditedTodo(event.target.value);
  };

  const handleSaveEdit = (id) => {
    setTodo((prevTodo) =>
      prevTodo.map((todo) =>
        todo.id === id ? { ...todo, task: isEditedTodo } : todo
      )
    );
    setEdit(null);
  };

  // Function to toggle between uppercase and lowercase
  const toggleUpperLowerCase = () => {
    setToggle((prev) => !prev);
  };

  // Function to apply uppercase or lowercase based on the toggle state
  const applyCase = (id, task) => {
    if (isToggle) {
      handleEditUpperCase(id, task);
    } else {
      handleEditLowerCase(id, task);
    }
  };

  const handleEditUpperCase = (id, task) => {
    setTodo((prevTodo) =>
      prevTodo.map((todo) =>
        todo.id === id ? { ...todo, task: task.toUpperCase() } : todo
      )
    );
  };

  const handleEditLowerCase = (id, task) => {
    setTodo((prevTodo) =>
      prevTodo.map((todo) =>
        todo.id === id ? { ...todo, task: task.toLowerCase() } : todo
      )
    );
  };

  const handleEditUpperCaseAll = () => {
    setTodo((prevTodo) =>
      prevTodo.map((item) => ({
        ...item,
        task: isToggle ? item.task.toUpperCase() : item.task.toLowerCase(),
      }))
    );
  };

  return (
    <div
      className="Todo"
      style={{
        maxWidth: "600px",
        margin: "20px auto",
        padding: "20px",
        backgroundColor: "#f5f5f5",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        fontFamily: "'Dancing Script', cursive",
      }}
    >
      <div>
        <h3
          style={{
            fontSize: "1.8rem",
            fontStyle: "italic",
            color: "#333",
            marginBottom: "15px",
          }}
        >
          TODO:-
        </h3>
        <input
          placeholder="Add a task"
          type="text"
          value={isNewTodo}
          onChange={updateTodoValue}
          onKeyDown={handleKeyPress}
          style={{
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            fontSize: "1rem",
            width: "100%",
            boxSizing: "border-box",
            marginBottom: "15px",
            fontFamily: "'Dancing Script', cursive",
          }}
        />

        <br />
        <button
          style={{
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "1rem",
            transition: "background-color 0.3s ease",
            fontFamily: "'Dancing Script', cursive",
          }}
          onClick={addTask}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
        >
          ADD TASK
        </button>

        <button
          style={{
            padding: "10px 20px",
            backgroundColor: "#17a2b8",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "1rem",
            transition: "background-color 0.3s ease",
            fontFamily: "'Dancing Script', cursive",
            fontWeight: 600,
            marginTop: "10px"
          }}
          onMouseOver={(e) =>
            (e.target.style.backgroundColor = "#138496")
          }
          onMouseOut={(e) =>
            (e.target.style.backgroundColor = "#17a2b8")
          }
          onClick={toggleUpperLowerCase}
        >
          Toggle Case: {isToggle ? "Uppercase" : "Lowercase"}
        </button>

        <hr />
      </div>

      <div>
        <h4
          style={{
            fontSize: "1.2rem",
            marginBottom: "10px",
          }}
        >
          TODO LISTS THESE ITEMS
        </h4>
        <button
          style={{
            marginBottom: "15px",
            padding: "10px 20px",
            backgroundColor: "#17a2b8",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "1rem",
            transition: "background-color 0.3s ease",
            fontFamily: "'Dancing Script', cursive",
            fontWeight: 600,
          }}
          onMouseOver={(e) =>
            (e.target.style.backgroundColor = "#138496")
          }
          onMouseOut={(e) =>
            (e.target.style.backgroundColor = "#17a2b8")
          }
          onClick={handleEditUpperCaseAll}
        >
          Apply Case to All
        </button>
        <ul>
          {isTodo.map((item) => (
            <li key={item.id} style={{ marginBottom: "5px" }}>
              {isEdit === item.id ? (
                <>
                  <input
                    type="text"
                    value={isEditedTodo}
                    onChange={handleEditChange}
                    style={{
                      padding: "5px",
                      border: "1px solid #ccc",
                      borderRadius: "4px",
                      fontSize: "1rem",
                      width: "40%",
                      boxSizing: "border-box",
                      marginBottom: "5px",
                      fontFamily: "'Dancing Script', cursive",
                    }}
                  />

                  <button
                    style={{
                      marginLeft: "10px",
                      padding: "5px 10px",
                      backgroundColor: "green",
                      color: "white",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer",
                      fontSize: "0.8rem",
                      transition: "background-color 0.3s ease",
                      fontFamily: "'Dancing Script', cursive",
                      fontWeight: 600,
                    }}
                    onClick={() => handleSaveEdit(item.id)}
                    onMouseOver={(e) =>
                      (e.target.style.backgroundColor = "darkgreen")
                    }
                    onMouseOut={(e) =>
                      (e.target.style.backgroundColor = "green")
                    }
                    onFocus={(e) =>
                      (e.target.style.boxShadow = "0 0 5px rgba(0,0,0,0.2)")
                    }
                    onBlur={(e) =>
                      (e.target.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)")
                    }
                  >
                    Save
                  </button>
                </>
              ) : (
                <>
                  {item.task}
                  <button
                    style={{
                      marginLeft: "10px",
                      padding: "5px 10px",
                      backgroundColor: "#dc3545",
                      color: "white",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer",
                      fontSize: "0.9rem",
                      transition: "background-color 0.3s ease",
                    }}
                    onClick={() => handleDelete(item.id)}
                    onMouseOver={(e) =>
                      (e.target.style.backgroundColor = "#c82333")
                    }
                    onMouseOut={(e) =>
                      (e.target.style.backgroundColor = "#dc3545")
                    }
                  >
                    Delete
                  </button>
                  <button
                    style={{
                      marginLeft: "10px",
                      padding: "5px 10px",
                      backgroundColor: "#ffc107",
                      color: "white",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer",
                      fontSize: "0.9rem",
                      transition: "background-color 0.3s ease",
                    }}
                    onClick={() => handleEditClick(item.id, item.task)}
                    onMouseOver={(e) =>
                      (e.target.style.backgroundColor = "#e0a800")
                    }
                    onMouseOut={(e) =>
                      (e.target.style.backgroundColor = "#ffc107")
                    }
                  >
                    Edit
                  </button>
                  <button
                    style={{
                      marginLeft: "10px",
                      padding: "5px 10px",
                      backgroundColor: "#007bff",
                      color: "white",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer",
                      fontSize: "0.9rem",
                      transition: "background-color 0.3s ease",
                    }}
                    onClick={() => applyCase(item.id, item.task)}
                    onMouseOver={(e) =>
                      (e.target.style.backgroundColor = "#0056b3")
                    }
                    onMouseOut={(e) =>
                      (e.target.style.backgroundColor = "#007bff")
                    }
                  >
                    {isToggle ? "Uppercase" : "Lowercase"}
                  </button>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todo;

```
with out styling for better readability
```javascript
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Todo = () => {
  const [todos, setTodos] = useState([
    { id: uuidv4(), task: "Sample task", isCompleted: false },
  ]);
  const [newTodo, setNewTodo] = useState("");
  const [editId, setEditId] = useState(null);
  const [editedTodo, setEditedTodo] = useState("");
  const [isToggle, setToggle] = useState(true);

  const addTask = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { task: newTodo, id: uuidv4(), isCompleted: false }]);
      setNewTodo("");
    } else {
      alert("You cannot add an empty task.");
    }
  };

  const handleEditClick = (id, task) => {
    setEditId(id);
    setEditedTodo(task);
  };

  const handleSaveEdit = (id) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, task: editedTodo } : todo)));
    setEditId(null);
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleUpperLowerCase = () => {
    setToggle((prev) => !prev);
  };

  const applyCase = (id, task) => {
    if (isToggle) {
      setTodos(todos.map((todo) => (todo.id === id ? { ...todo, task: task.toUpperCase() } : todo)));
    } else {
      setTodos(todos.map((todo) => (todo.id === id ? { ...todo, task: task.toLowerCase() } : todo)));
    }
  };

  const handleEditUpperCaseAll = () => {
    setTodos(todos.map((item) => ({
      ...item,
      task: isToggle ? item.task.toUpperCase() : item.task.toLowerCase(),
    })));
  };

  return (
    <div>
      <h3>TODO:</h3>
      <input
        placeholder="Add a task"
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && addTask()}
      />
      <button onClick={addTask}>ADD TASK</button>
      <button onClick={toggleUpperLowerCase}>
        Toggle Case: {isToggle ? "Uppercase" : "Lowercase"}
      </button>
      <button onClick={handleEditUpperCaseAll}>
        Apply Case to All
      </button>
      <ul>
        {todos.map((item) => (
          <li key={item.id}>
            {editId === item.id ? (
              <>
                <input
                  type="text"
                  value={editedTodo}
                  onChange={(e) => setEditedTodo(e.target.value)}
                />
                <button onClick={() => handleSaveEdit(item.id)}>Save</button>
              </>
            ) : (
              <>
                {item.task}
                <button onClick={() => handleDelete(item.id)}>Delete</button>
                <button onClick={() => handleEditClick(item.id, item.task)}>Edit</button>
                <button onClick={() => applyCase(item.id, item.task)}>
                  {isToggle ? "Uppercase" : "Lowercase"}
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;

```
Same code with styling
```javascript
// imr - import React from 'react';
// imdr - import ReactDOM from 'react-dom';
// control + shift + x
// rafce
import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Todo = () => {
  // let [isTodo, setTodo] = useState(["sameple task"]);
  let [isTodo, setTodo] = useState([
    {
      id: uuidv4(), //default
      task: "Sample task",
      isCompleted: false,
    },
  ]);

  let [isNewTodo, setNewTodo] = useState("");

  // State to track which task is being edited
  const [isEdit, setEdit] = useState(null);
  // State to hold the new value while editing
  const [isEditedTodo, setEditedTodo] = useState("");

  const [isToggle, setToggle] = useState(false);

  let addTask = () => {
    if (isNewTodo.trim() !== "") {
      setTodo(() => {
        return [
          ...isTodo,
          { task: isNewTodo, id: uuidv4(), isCompleted: false },
        ];
      });
      setNewTodo("");
    } else {
      alert("You cannot add an empty task.");
    }
  };

  const updateTodoValue = (event) => {
    setNewTodo(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      addTask();
    }
  };

  const handleDelete = (id) => {
    // item.id
    // setTodo(isTodo.filter(item => item.id !== id));
    setTodo((prevTodo) => prevTodo.filter((prevTodo) => prevTodo.id !== id));
  };

  // const [isEdit, setEdit] = useState(null) // State to track which task is being edited
  // const [isEditedTodo, setEditedTodo] = useState("") // State to hold the new value while editing

  // onClick={() => handleEditClick(item.id, item.task)}
  const handleEditClick = (id, task) => {
    setEdit(id);
    setEditedTodo(task); // Set the input value to the current task
  };

  // onChange={handleEditChange}
  const handleEditChange = (event) => {
    setEditedTodo(() => event.target.value);
  };

  // <button onClick={() => handleSaveEdit(item.id)}>Save</button>
  // Function to save the edited task
  const handleSaveEdit = (id) => {
    setTodo((prevTodo) =>
      prevTodo.map((todo) =>
        todo.id === id ? { ...todo, task: isEditedTodo } : todo
      )
    );
    setEdit(null); // Exit edit mode
  };

  // onClick={()=> handleEditUpperCase(item.id, item.task)}
  // const handleEditUpperCase = (id)=>{
  // setTodo((prevTodo) =>
  //   prevTodo.map((todo) =>
  //     todo.id === id? {...todo, task: todo.task.toUpperCase() } : todo
  //   )
  // );
  // }

  const handleEditUpperCase = (id, task) => {
    setTodo((prevTodo) =>
      prevTodo.map((todo) =>
        todo.id === id ? { ...todo, task: task.toUpperCase() } : todo
      )
    );
  };

  const handleEditLowerCase = (id, task) => {
    setTodo((prevTodo) =>
      prevTodo.map((todo) =>
        todo.id === id ? { ...todo, task: task.toLowerCase() } : todo
      )
    );
  };

  /*const handleEditUpperCase = (id)=>{
    setTodo((prevTodo)=>{
      return prevTodo.map((todo)=>{
        if(todo.id === id){
          return {...todo, task: todo.task.toUpperCase() }
        }
        return todo
      })
    })
  }*/

  /*const handleEditUpperCase = (id)=>{
    setTodo((prevTodo)=>{
      return prevTodo.map((todo)=>{
        if(todo.id === id){
          return {...todo, task: todo.task.toUpperCase() }
        }else{
        return todo
       }
      })
    })
  }*/

  const handleEditUpperCaseAll = () => {
    setTodo((prevTodo) =>
      prevTodo.map((item) => ({ ...item, task: item.task.toUpperCase() }))
    );
  };

  // const [isToggle,setToggle] = useState(false)

  // const ToggleUpperLowerCase= ()=>{
  //   setToggle(!isToggle)
  // }

  const ToggleUpperLowerCase = () => {
    setToggle((prevToggle) => {
      return !prevToggle;
    });
  };

  /*const ToggleUpperLowerCase= ()=>{
    setToggle((prevToggle)=> !prevToggle)
  }*/

  /*
  const isUporLow = ()=>{
    return isToggle? handleEditUpperCase : handleEditLowerCase
  }
  */

  /*
  const isUporLow = (id) => {
    setTodo((prevTodo) => {
      prevTodo.map((todo) => {
        todo.id === id
          ? {
              ...todo,
              task: isToggle
                ? todo.task.toUpperCase()
                : todo.task.toLowerCase(),
            }
          : todo;
      });
    });
  };

Issues:Missing Return: The map function needs to return a new array. In this version, the return value of map is not being used. 
*/

  const isUporLow = (id) => {
    setTodo((prevTodo) =>
      prevTodo.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              task: isToggle
                ? todo.task.toUpperCase()
                : todo.task.toLowerCase(),
            }
          : todo
      )
    );
  };
  

  /*const isUporLow = (id) => {
    setTodo((prevTodo) =>
      prevTodo.map((todo) =>
        todo.id === id
          ? { ...todo, task: isToggle ? todo.task.toUpperCase() : todo.task.toLowerCase() }
          : todo
      )
    );
  };*/

  /*const applyCase = (id, task) => {
    if (isToggle) {
      setTodo(
        isToggle.map((todo) =>
          todo.id === id ? { ...todo, task: task.toUpperCase() } : todo
        )
      );
    } else {
      setTodo(
        isToggle.map((todo) =>
          todo.id === id ? { ...todo, task: task.toLowerCase() } : todo
        )
      );
    }
  };*/

  return (
    <div
      className="Todo"
      style={{
        maxWidth: "600px",
        margin: "20px auto",
        padding: "20px",
        backgroundColor: "#f5f5f5",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        fontFamily: "'Dancing Script', cursive", // Custom Italic Font
      }}
    >
      <div>
        <h3
          style={{
            fontSize: "1.8rem",
            fontStyle: "italic",
            color: "#333",
            marginBottom: "15px",
          }}
        >
          TODO:-
        </h3>
        <input
          placeholder="Add a task"
          type="text"
          value={isNewTodo}
          onChange={updateTodoValue}
          onKeyDown={handleKeyPress}
          style={{
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            fontSize: "1rem",
            width: "100%",
            boxSizing: "border-box",
            marginBottom: "15px",
            fontFamily: "'Dancing Script', cursive", // Matching the font from the button
          }}
        />

        <br />
        <button
          style={{
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "1rem",
            transition: "background-color 0.3s ease",
            fontFamily: "'Dancing Script', cursive",
          }}
          onClick={addTask} //we cant have onClick twice in a tag
          onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
        >
          ADD TASK
        </button>

        <hr />
      </div>

      <div>
        <h4
          style={{
            fontSize: "1.2rem",
            marginBottom: "10px",
          }}
        >
          TODO LISTS THESE ITEMS
        </h4>
        <ul>
          {isTodo.map((item) => (
            <li key={item.id} style={{ marginBottom: "5px" }}>
              {isEdit === item.id ? (
                <>
                  <input
                    type="text"
                    value={isEditedTodo}
                    // onChange={(e) => setEditedTodo(e.target.value)}
                    onChange={handleEditChange}
                    style={{
                      padding: "5px",
                      border: "1px solid #ccc",
                      borderRadius: "4px",
                      fontSize: "1rem",
                      width: "40%",
                      boxSizing: "border-box",
                      marginBottom: "5px",
                      fontFamily: "'Dancing Script', cursive",
                    }}
                  />

                  <button
                    style={{
                      marginLeft: "10px",
                      padding: "5px 10px",
                      backgroundColor: "green",
                      color: "white",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer",
                      fontSize: "0.8rem",
                      transition: "background-color 0.3s ease",
                      fontFamily: "'Dancing Script', cursive",
                      fontWeight: 600,
                    }}
                    onClick={() => handleSaveEdit(item.id)}
                    onMouseOver={(e) =>
                      (e.target.style.backgroundColor = "darkgreen")
                    }
                    onMouseOut={(e) =>
                      (e.target.style.backgroundColor = "green")
                    }
                    onFocus={(e) =>
                      (e.target.style.boxShadow = "0 0 5px rgba(0,0,0,0.2)")
                    }
                    onBlur={(e) =>
                      (e.target.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)")
                    }
                  >
                    Save
                  </button>
                </>
              ) : (
                <>
                  {item.task}
                  <button
                    style={{
                      marginLeft: "10px",
                      padding: "5px 10px",
                      backgroundColor: "#dc3545",
                      color: "white",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer",
                      fontSize: "0.9rem",
                      transition: "background-color 0.3s ease",
                    }}
                    onMouseOver={(e) =>
                      (e.target.style.backgroundColor = "#c82333")
                    }
                    onMouseOut={(e) =>
                      (e.target.style.backgroundColor = "#dc3545")
                    }
                    onClick={() => handleDelete(item.id)}
                    onFocus={(e) =>
                      (e.target.style.boxShadow = "0 0 5px rgba(0,0,0,0.2)")
                    }
                    onBlur={(e) =>
                      (e.target.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)")
                    }
                    // if we convert it into arrow function then () => then this function will not call directly
                    // forget the _ and i is the index iif the index mattches with the existing elemenet then dont create a new array basicallt this filter method everytime it creates a new array with the following elements and rerender the state
                  >
                    X
                  </button>
                  <button
                    style={{
                      marginLeft: "10px",
                      padding: "5px 10px",
                      backgroundColor: "#ffc107",
                      color: "black",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer",
                      fontSize: "0.8rem",
                      transition: "background-color 0.3s ease",
                      fontFamily: "'Dancing Script', cursive",
                      fontWeight: 600,
                    }}
                    onMouseOver={(e) =>
                      (e.target.style.backgroundColor = "#e0a800")
                    }
                    onMouseOut={(e) =>
                      (e.target.style.backgroundColor = "#ffc107")
                    }
                    onClick={() => handleEditClick(item.id, item.task)}
                    onFocus={(e) =>
                      (e.target.style.boxShadow = "0 0 5px rgba(0,0,0,0.2)")
                    }
                    onBlur={(e) =>
                      (e.target.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)")
                    }
                  >
                    Edit
                  </button>
                  <button
                    style={{
                      marginLeft: "10px",
                      padding: "5px 10px",
                      backgroundColor: "#17a2b8", // Change color as desired
                      color: "white",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer",
                      fontSize: "0.8rem",
                      transition:
                        "background-color 0.3s ease, box-shadow 0.3s ease",
                      fontFamily: "'Dancing Script', cursive",
                      fontWeight: 600,
                    }}
                    onMouseOver={(e) =>
                      (e.target.style.backgroundColor = "#138496")
                    } // Darker shade on hover
                    onMouseOut={(e) =>
                      (e.target.style.backgroundColor = "#17a2b8")
                    } // Original color
                    onFocus={(e) =>
                      (e.target.style.boxShadow = "0 0 5px rgba(0,0,0,0.2)")
                    }
                    onBlur={(e) =>
                      (e.target.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)")
                    }
                    onClick={() => {
                      isUporLow(item.id);
                      ToggleUpperLowerCase();  // Toggle case when the button is clicked
                    }}
                    
                  >
                    {isToggle ? "Uppercase" : "Lowercase"}
                    
                  </button>
                  
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
```
export default Todo;
a problem is that when we update a list to either lowercase or uppercase then all the buttons for the rest or remaining of the list buttons get changed in to case if the other list is already lowecase the then we have to click twice to the list item uppercase
Modify the toggle logic to affect only the clicked task without resetting the state for the others.

```javascript
let [isTodo, setTodo] = useState([
  {
    id: uuidv4(),
    task: "Sample task",
    isCompleted: false,
    toggleCase: false, // Add this to each task
  },
]);
```
`toggleCase: false, // Add this to each task`
```javascript
const isUporLow = (id) => {
  setTodo((prevTodo) =>
    prevTodo.map((todo) =>
      todo.id === id
        ? {
            ...todo,
            task: todo.toggleCase
              ? todo.task.toUpperCase()
              : todo.task.toLowerCase(),
            toggleCase: !todo.toggleCase, // Toggle the state for this task
          }
        : todo
    )
  );
};
```
`toggleCase: !todo.toggleCase, // Toggle the state for this task`

```javascript
<button
  onClick={() => isUporLow(item.id)}
>
  {item.toggleCase ? "Uppercase" : "Lowercase"}
</button>
```
`{item.toggleCase ? "Uppercase" : "Lowercase"}`

```javascript
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Todo = () => {
  let [isTodo, setTodo] = useState([
    {
      id: uuidv4(),
      task: "Sample task",
      isCompleted: false,
      toggleCase: false, // New state to track case for each task
    },
  ]);

  let [isNewTodo, setNewTodo] = useState("");
  const [isEdit, setEdit] = useState(null);
  const [isEditedTodo, setEditedTodo] = useState("");

  let addTask = () => {
    if (isNewTodo.trim() !== "") {
      setTodo(() => {
        return [
          ...isTodo,
          { task: isNewTodo, id: uuidv4(), isCompleted: false, toggleCase: false },
        ];
      });
      setNewTodo("");
    } else {
      alert("You cannot add an empty task.");
    }
  };

  const updateTodoValue = (event) => {
    setNewTodo(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      addTask();
    }
  };

  const handleDelete = (id) => {
    setTodo((prevTodo) => prevTodo.filter((prevTodo) => prevTodo.id !== id));
  };

  const handleEditClick = (id, task) => {
    setEdit(id);
    setEditedTodo(task);
  };

  const handleEditChange = (event) => {
    setEditedTodo(event.target.value);
  };

  const handleSaveEdit = (id) => {
    setTodo((prevTodo) =>
      prevTodo.map((todo) =>
        todo.id === id ? { ...todo, task: isEditedTodo } : todo
      )
    );
    setEdit(null);
  };

  // Independent toggle for uppercase/lowercase for each task
  const toggleCaseForTask = (id) => {
    setTodo((prevTodo) =>
      prevTodo.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              task: todo.toggleCase
                ? todo.task.toLowerCase()
                : todo.task.toUpperCase(),
              toggleCase: !todo.toggleCase,
            }
          : todo
      )
    );
  };

  return (
    <div
      className="Todo"
      style={{
        maxWidth: "600px",
        margin: "20px auto",
        padding: "20px",
        backgroundColor: "#f5f5f5",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        fontFamily: "'Dancing Script', cursive",
      }}
    >
      <div>
        <h3
          style={{
            fontSize: "1.8rem",
            fontStyle: "italic",
            color: "#333",
            marginBottom: "15px",
          }}
        >
          TODO:-
        </h3>
        <input
          placeholder="Add a task"
          type="text"
          value={isNewTodo}
          onChange={updateTodoValue}
          onKeyDown={handleKeyPress}
          style={{
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            fontSize: "1rem",
            width: "100%",
            boxSizing: "border-box",
            marginBottom: "15px",
            fontFamily: "'Dancing Script', cursive",
          }}
        />

        <br />
        <button
          style={{
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "1rem",
            transition: "background-color 0.3s ease",
            fontFamily: "'Dancing Script', cursive",
          }}
          onClick={addTask}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
        >
          ADD TASK
        </button>

        <hr />
      </div>

      <div>
        <h4
          style={{
            fontSize: "1.2rem",
            marginBottom: "10px",
          }}
        >
          TODO LISTS THESE ITEMS
        </h4>
        <ul>
          {isTodo.map((item) => (
            <li key={item.id} style={{ marginBottom: "5px" }}>
              {isEdit === item.id ? (
                <>
                  <input
                    type="text"
                    value={isEditedTodo}
                    onChange={handleEditChange}
                    style={{
                      padding: "5px",
                      border: "1px solid #ccc",
                      borderRadius: "4px",
                      fontSize: "1rem",
                      width: "40%",
                      boxSizing: "border-box",
                      marginBottom: "5px",
                      fontFamily: "'Dancing Script', cursive",
                    }}
                  />

                  <button
                    style={{
                      marginLeft: "10px",
                      padding: "5px 10px",
                      backgroundColor: "green",
                      color: "white",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer",
                      fontSize: "0.8rem",
                      transition: "background-color 0.3s ease",
                      fontFamily: "'Dancing Script', cursive",
                      fontWeight: 600,
                    }}
                    onClick={() => handleSaveEdit(item.id)}
                  >
                    Save
                  </button>
                </>
              ) : (
                <>
                  {item.task}
                  <button
                    style={{
                      marginLeft: "10px",
                      padding: "5px 10px",
                      backgroundColor: "#dc3545",
                      color: "white",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer",
                      fontSize: "0.9rem",
                      transition: "background-color 0.3s ease",
                    }}
                    onClick={() => handleDelete(item.id)}
                  >
                    X
                  </button>
                  <button
                    style={{
                      marginLeft: "10px",
                      padding: "5px 10px",
                      backgroundColor: "#ffc107",
                      color: "black",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer",
                      fontSize: "0.8rem",
                      transition: "background-color 0.3s ease",
                      fontFamily: "'Dancing Script', cursive",
                      fontWeight: 600,
                    }}
                    onClick={() => handleEditClick(item.id, item.task)}
                  >
                    Edit
                  </button>
                  <button
                    style={{
                      marginLeft: "10px",
                      padding: "5px 10px",
                      backgroundColor: "#17a2b8",
                      color: "white",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer",
                      fontSize: "0.8rem",
                      transition: "background-color 0.3s ease",
                      fontFamily: "'Dancing Script', cursive",
                      fontWeight: 600,
                    }}
                    onClick={() => toggleCaseForTask(item.id)}
                  >
                    {item.toggleCase ? "Uppercase" : "Lowercase"}
                  </button>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
/*
f you switch to managing the case state at the individual item level, the ToggleUpperLowerCase function for toggling the case globally becomes unnecessary. Each item will handle its own case toggling, so you won’t need a global toggle state.

Here’s how you can simplify your component:

Remove the ToggleUpperLowerCase Function: You can safely remove the ToggleUpperLowerCase function and its associated state since each task now manages its own case internally.
*/
```



# ***Lottery***
- We are given Lottery tickets with a 3 digit number
- The number is generated randomly
- if the sum of all digits is 15, we win the lottery and get the prize

[4 , 2 , 4]

[***G***](https://github.dev/facebook/react/blob/main/)

Both implementations of the `genTicket` function generate an array of random numbers between 1 and 9, but they do so using different methods. comparing the two approaches:

### 1. **First Implementation**:

```js
function genTicket(n) {
    let generateTic = Array(n).fill(0).map(() => Math.floor(Math.random() * 9) + 1);
    return generateTic;
}
```

#### Explanation:
- **`Array(n).fill(0)`**: Creates an array with `n` elements, all initialized to `0`. For example, if `n = 3`, it creates `[0, 0, 0]`.
- **`.map(() => Math.floor(Math.random() * 9) + 1)`**: Transforms each element of the array using the provided function. This function generates a random number between 1 and 9 for each element of the array.
  - `Math.random()` generates a floating-point number between 0 (inclusive) and 1 (exclusive).
  - `Math.random() * 9` scales it to between 0 and 9.
  - `Math.floor()` rounds it down to the nearest integer (0 through 8).
  - Adding `1` shifts the range to 1 through 9.
- **Result**: An array with `n` random numbers between 1 and 9.

### 2. **Second Implementation**:

```js
function genTicket(n) {
  let arr = new Array(n); // Creates an array of size n with undefined elements.
  for (let i = 0; i < n; i++) {
    arr[i] = Math.floor(Math.random() * 9) + 1;
  }
  return arr;
}
```

#### Explanation:
- **`new Array(n)`**: Creates an array with `n` empty slots (undefined elements). For example, if `n = 3`, it creates `[undefined, undefined, undefined]`.
- **`for (let i = 0; i < n; i++) { arr[i] = ... }`**: Loops through each index of the array and assigns a random number between 1 and 9 to each slot.
  - Inside the loop, the random number is generated and assigned to each index `i`.
- **Result**: An array with `n` random numbers between 1 and 9.

### Comparison:
- **Effectiveness**: Both implementations generate an array with `n` random numbers between 1 and 9.
- **Performance**: Both are quite efficient, but the first approach is more concise and uses modern JavaScript methods (`Array.fill()` and `map()`), which are often preferred for their readability and functional style.
- **Initialization**: 
  - The first approach initializes the array with `0` values and then uses `.map()` to replace these values with random numbers.
  - The second approach uses a `for` loop to directly assign random numbers to each index of an initially undefined array.

### Correcting the First Implementation:

The `Array(3).fill(0)` part of the first function is not affected by the `n` parameter. To use `n`, you should modify it as follows:

```js
function genTicket(n) {
    let generateTic = Array(n).fill(0).map(() => Math.floor(Math.random() * 9) + 1);
    return generateTic;
}
```

### Conclusion:
Both functions will work, but the first implementation (using `Array.fill()` and `map()`) is more concise and leverages modern JavaScript features. The second implementation (using a `for` loop) is more traditional but equally effective.

`JavaScript is case-sensitive, and Math should be used with a capital "M".`

The function using `Array.prototype.reduce()` is a more concise and functional approach to calculating the sum of an array's elements. Let's compare the two methods:

### 1. **Manual Iteration Approach**:

```js
function sum(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}
```

#### Explanation:
- **Initialization**: `let total = 0;` initializes a variable to keep track of the running total.
- **Looping**: `for (let i = 0; i < arr.length; i++)` iterates over each element in the array.
- **Accumulation**: `total += arr[i];` adds the current element to the running total.
- **Return**: `return total;` returns the computed sum.

### 2. **Using `Array.prototype.reduce()`**:

```js
function sum(arr) {
    return arr.reduce((sum, value) => sum + value, 0);
}
```

#### Explanation:
- **`arr.reduce()`**: The `reduce` method applies a function against an accumulator (`sum` in this case) and each element in the array (`value`), resulting in a single output value (the sum).
- **Callback Function**: `(sum, value) => sum + value` is a callback function passed to `reduce`. It takes two arguments:
  - `sum`: The accumulator that stores the running total.
  - `value`: The current element in the array.
- **Initial Value**: `0` is the initial value for the accumulator (`sum`). It ensures that the first call to the callback function uses this initial value as `sum`.

### Comparison:

1. **Readability**:
   - **Manual Iteration**: More verbose but explicit. It shows each step of the calculation.
   - **`reduce` Method**: More concise and functional. It abstracts away the details of iteration and accumulation.

2. **Performance**:
   - Both methods have similar performance characteristics, but `reduce` might be slightly more optimized in some JavaScript engines due to its functional nature.

3. **Functional Programming**:
   - **Manual Iteration**: Imperative style. You explicitly manage the loop and accumulation.
   - **`reduce` Method**: Declarative style. You describe what you want (sum of the array) without specifying the how of iteration and accumulation.

4. **Error Handling**:
   - Both methods assume that the input is a valid array of numbers. Additional error handling (e.g., checking if `arr` is indeed an array) would be required for robustness.

### Example Usage:

For both methods, given an array `arr = [1, 2, 3, 4]`, both will produce the same result:

```js
let arr = [1, 2, 3, 4];
console.log(sum(arr)); // Outputs: 10
```

### ***Conclusion:***
- Use the **manual iteration approach** if you prefer explicit control over the iteration process.
- Use **`reduce`** if you prefer a more concise and functional style for summing up the elements of an array.

## ***Changes to Lottery Game***
- Make the Lottery tikcets of N digit number
- The Winning sum could be any feasible number

app component(props) ➡  lottery(props) ➡ Ticket(props) 🔀 Ticket[0] Ticket[1]
                                                         ↪  Ticket[2]

In React, the concepts of **Logical Components** (or **Smart Components**) and **Presentational Components** (or **Dumb Components**) refer to a design pattern that separates the logic of an application from its presentation. This pattern helps keep your code organized and improves readability, scalability, and testability.

### 1. ***Logical Components (Smart Components):***
- **Purpose**: Handle application logic, data-fetching, and state management.
- **Characteristics**:
  - They are aware of how the app works.
  - Manage their own state (using hooks like `useState`, `useReducer`, etc.).
  - Often communicate with APIs or services to retrieve data.
  - Can pass state or event handlers (via props) to presentational components.
  - Typically contain less markup and focus on managing behavior.
  
**Example:**
```jsx
import React, { useState } from 'react';
import PresentationalComponent from './PresentationalComponent';

function SmartComponent() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div>
      <h1>Smart Component</h1>
      <PresentationalComponent count={count} onIncrement={increment} onDecrement={decrement} />
    </div>
  );
}

export default SmartComponent;
```

In this example, the **SmartComponent** manages the state (`count`) and passes it, along with event handlers (`onIncrement`, `onDecrement`), to the presentational component.

---

### 2. ***Presentational Components (Dumb Components):***
- **Purpose**: Render UI based on the props they receive.
- **Characteristics**:
  - Focus on the visual representation.
  - Do not contain any application logic or manage state (except for UI-specific state like toggle switches or form input).
  - Rely on props passed down from the smart component.
  - Can be stateless (functional components).
  - Easier to test since they don’t have much logic.

**Example:**
```jsx
function PresentationalComponent({ count, onIncrement, onDecrement }) {
  return (
    <div>
      <h2>Presentational Component</h2>
      <p>Count: {count}</p>
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement}>Decrement</button>
    </div>
  );
}

export default PresentationalComponent;
```

In this case, the **PresentationalComponent** does not manage any state of its own. It receives the state (`count`) and handlers (`onIncrement`, `onDecrement`) from the smart component, focusing only on how the UI is displayed.

---

### ***Summary of Differences***:

| **Smart (Logical) Components**                     | **Dumb (Presentational) Components**              |
| -------------------------------------------------- | ------------------------------------------------ |
| Manages state and logic (e.g., API calls, event handlers). | Focuses on UI and rendering.                     |
| Contains application behavior.                     | Contains very little to no logic.                 |
| Often passes props to presentational components.   | Receives props from smart components.            |
| Can be class or functional components (with hooks). | Typically functional (stateless) components.      |
| Example: Parent component managing business logic. | Example: Child component displaying data/UI.     |

### ***Benefits of this Separation:***
- **Better code organization**: Separation of concerns (logic and presentation).
- **Reusability**: Presentational components can be reused across multiple projects or parts of the app.
- **Testability**: Presentational components are easier to test as they don’t have complex logic.
- **Maintainability**: Changes to logic (business rules) are isolated from changes to the UI, making the code easier to maintain.

### ***Modern Usage in React***:
While the pattern is still useful, with React hooks like `useState`, `useEffect`, and context, many components in modern React applications tend to handle a mix of both logic and UI to some degree. However, keeping components as focused as possible on their core responsibilities (logic or presentation) is still considered a good practice.

```
App ➡ Lottery(Logical componenet) ➡ Ticket (Presentational componenet) 🔀 ticket[1] ticket[2] 
                            ↪  ticket[3]
```
```jsx
          <p style={{fontFamily: 'Luckiest Guy, cursive'}} className='ticket-number'>{isTicket[0]}</p>
          <p style={{fontFamily: 'Luckiest Guy, cursive'}} className='ticket-number'>{isTicket[1]}</p>
          <p style={{fontFamily: 'Luckiest Guy, cursive'}} className='ticket-number'>{isTicket[2]}</p> 
```
`break them down into 3 components` 
```
App ➡ Lottery(3,5,6) ➡ Ticket ticket[1]->(3) ticket->[2](5)
                            ↪  ticket[3]->(6)
                        Ticket pass down the random values in the form of props
logical components is a componenet which has state and professional component is a component which has no state 
```
```
Componenet Props StatesVariables Events
```
Components Types
1.FunctionalComponents 
2.Class Components

Logical Component
smart components 

Presentational Components 
dumb components

## ***Ticket Componenet ***
`TicketNum`
- Props : num
- State: none
- Events: none

`Ticket`
Props: ticket[] of size n
State: none
Evenets: none

## ***Lottery Componenet***
`Lottery`
```javascript
Props: n, winningSum
State: ticket[] //generate random number
Evenets: buyTicket()
```

## Forms in React
***The standcard way with Forms is to use*** `Controlled Componenets`.***So we make React state to be "single source of truth.***

```Markdown
- In HTML, form element such as <input>, <textarea>, and <select> typically maintain their own state and updates it based on user input. In React, mutable state is typically kept in the state property of components and only updated with setState().

- We can combine the two by making the React state to be the "single source of truth". Then the React component that renders a form also controls what happend in that form on subsequent user input. An input form element whose value is controlled by React in this way is called a "controlled component
```
`react old docs`

## ***Handling*** `Multiple Inputs`
- ***We create a common handleInputChange() for all elements***

***`evenet.target.name`*** ***changed field***
***`evenet.target.value` new value of the field***

## ***Validations***
`Formik`
```bash
npm install formik
```
*like the form cannot be empty*

To set up form validation in Formik, follow these steps:

### 1. **Install Formik**

First, make sure Formik is installed in your project:

```bash
npm install formik
# or
yarn add formik
```

### 2. **Import Formik**

Import Formik and other necessary components into your file:

```jsx
import { useFormik } from 'formik';
```

### 3. **Define Validation Function**

Create a validation function that returns an object with validation errors. This function will check the form values and provide error messages.

```jsx
const validate = values => {
  const errors = {};

  if (!values.username) {
    errors.username = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.username)) {
    errors.username = 'Invalid email address';
  }

  if (!values.comment) {
    errors.comment = 'Required';
  } else if (values.comment.length > 200) {
    errors.comment = 'Must be 200 characters or less';
  }

  if (!values.rating) {
    errors.rating = 'Required';
  } else if (values.rating < 1 || values.rating > 5) {
    errors.rating = 'Must be between 1 and 5';
  }

  return errors;
};
```

### 4. **Set Up Formik**

Initialize Formik with `useFormik` and provide it with `initialValues`, `validate`, and `onSubmit` properties.

```jsx
const formik = useFormik({
  initialValues: {
    username: '',
    comment: '',
    rating: 1
  },
  validate,
  onSubmit: (values, { resetForm }) => {
    // Handle form submission
    alert(JSON.stringify(values, null, 2));
    resetForm();  // Clear form after submission
  },
});
```

### 5. **Create the Form**

Use Formik’s handlers and state to build your form. Bind the form fields to Formik’s `values` and `handleChange` methods, and display validation errors.

```jsx
<form onSubmit={formik.handleSubmit}>
  <label htmlFor="username">Your Username...</label>
  <input
    type="email"
    name="username"
    id="username"
    placeholder="Write your username..."
    value={formik.values.username}
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
  />
  {formik.touched.username && formik.errors.username ? (
    <div className="error">{formik.errors.username}</div>
  ) : null}
  <br />

  <label htmlFor="comment">Your valuable comment:</label>
  <textarea
    id="comment"
    name="comment"
    placeholder="Write your comment..."
    rows="4"
    cols="50"
    style={{ resize: 'none' }}
    value={formik.values.comment}
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
  />
  {formik.touched.comment && formik.errors.comment ? (
    <div className="error">{formik.errors.comment}</div>
  ) : null}
  <br />

  <label htmlFor="rating">Rating...</label>
  <input
    type="number"
    name="rating"
    id="rating"
    placeholder="1-5"
    min={1}
    max={5}
    value={formik.values.rating}
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
  />
  {formik.touched.rating && formik.errors.rating ? (
    <div className="error">{formik.errors.rating}</div>
  ) : null}
  <br />

  <button type="submit">Submit</button>
</form>
```

### 6. **Style the Errors**

Add CSS to style the error messages if necessary:

```css
.error {
  color: red;
  font-size: 0.875em;
}
```

### Summary

1. **Install Formik**: `npm install formik`
2. **Import Formik**: `import { useFormik } from 'formik';`
3. **Define Validation**: Create a `validate` function
4. **Initialize Formik**: Use `useFormik` with `initialValues`, `validate`, and `onSubmit`
5. **Create Form**: Use Formik’s handlers and state in your form
6. **Style Errors**: Add CSS for validation errors

This approach ensures your form is validated and handles user input efficiently with Formik.

## <u>***useEffect***</u>

*The Effect Hook lets you perform side effects in function components*

*Data Fetching, setting up a subscription, and manually changing the DOM in React components are all example of side effects*
 


<!-- 

npx create-react-app 01basicreact
cd 01basicreact
npm start

npm create vite@latest project_name
cd project_name
npm install
npm run dev


PS C:\Users\SUDIP BHATTACHARYA\Desktop\REACT> npx create-react-app 01basicreact
PS C:\Users\SUDIP BHATTACHARYA\Desktop\REACT\01basicreact> npm run start

PS C:\Users\SUDIP BHATTACHARYA\Desktop\REACT> npm create vite@latest
PS C:\Users\SUDIP BHATTACHARYA\Desktop\REACT\vite-project> npm install
PS C:\Users\SUDIP BHATTACHARYA\Desktop\REACT\vite-project> npm run dev

 -->
<!-- The file you're seeing, typically named desktop.ini, is a hidden configuration file used by Windows to customize the appearance and behavior of a folder.
.ShellClassInfo Section: This section contains properties that define how the folder should be displayed in Windows Explorer.

IconResource=C:\Windows\System32\SHELL32.dll,300: This line specifies the icon that Windows should use for the folder. The icon is taken from the SHELL32.dll file, and 300 refers to the icon's index within that file.
[ViewState] Section: This section stores information about how the folder's contents should be displayed in Windows Explorer (e.g., icon size, view mode, etc.).

Mode=, Vid=, FolderType=Generic: These lines can store view-related settings like the mode (details, icons, list, etc.), a unique view identifier (Vid), and the folder type (generic, music, pictures, etc.). However, in your file, they appear to be blank.
This file usually appears when you customize a folder, like changing its icon or view settings. It's harmless and typically hidden, but if it shows up, you can safely ignore it 

[ViewState]:

Mode=, Vid=, FolderType=Generic: These settings are either empty or set to generic, indicating that the folder doesn’t have any special view settings.

Lifting state up 
 -->

```
<!-- READMEcopy.MD -->
```
<!-- 
# [***ReactJS | Modern Animated Website | OCHI DESIGN | Awwwarded Website Clone***](https://youtu.be/AZXYSlxj0vU?si=XfahCFcdAW0GbAbn)

[![ReactJS | Modern Animated Website | OCHI DESIGN | Awwwarded Website Clone](https://img.youtube.com/vi/AZXYSlxj0vU/hqdefault.jpg)](https://youtu.be/AZXYSlxj0vU?si=XfahCFcdAW0GbAbn)

list of topics:

- *Creating a modern animated website using ReactJS*
- *Installing dependencies and setting up Tailwind CSS for the website*
- *Setting up ReactJS app and installing extensions for development*
- *Creating a modern animated website with different sections*
- *Introduction to creating and importing React components*
- *Changing the color of the navigation bar to white*
- *Fetching a font from a website for installation*
- *Selecting and using fonts in ReactJS*
- *Fix navigation bar and ensure z-index for visibility*
- *Creating and styling text structure of the website*
- *Customizing text appearance in the website design*
- *Creating and customizing masks in ReactJS*
- *Styling the website elements with CSS*
- *Creating and using icons in ReactJS*
- *Installation process for ReactJS on Windows and Mac*
- *Styling elements and managing layout*
- *Adjusting rounded curved angles and values for proper display*
- *Creating a rough sea effect with green section*
- *Styling adjustments and animations discussed*
- *Implementing rounded corners and animation in the website design*
- *Development process of creating a modern animated website*
- *Creating a modern animated website using ReactJS*
- *Creating and customizing design elements in the website using ReactJS*
- *Fixing the bottom line on the website*
- *Creating and styling elements using ReactJS*
- *Creating and customizing website design elements*
- *Discussing design elements and color choices*
- *Adjusting elements for the layout*
- *Learn how to create a rotating circle with transparency*
- *Explanation of finding the angle and point on the screen*
- *Using radians to calculate degrees and extracting mouse location for website interaction*
- *Understanding mouse position and delta in ReactJS*
- *Learn how to rotate elements using ReactJS*
- *Creating and styling website components with ReactJS*
- *Creating card div and setting dimensions*
- *Creating card structures and applying CSS*
- *Customizing website colors and image shapes*
- *Positioning and styling elements using ReactJS*
- *Adjusting colors and elements on the website*
- *Creating animated website using ReactJS*
- *Discussing layout configurations and styling elements*
- *Creating and styling a logo and button in the website design*
- *Code corrections and styling enhancements*
- *Discussing the CSS properties flex, justify, height, and presentation*
- *Installing and using locomotive for smooth scrolling website*
- *Using ReactJS to create animated website*
- *Troubleshooting and fixing an error during application runtime*
- *Controlling scroll speed and creating a dynamic effect*
- *Styling and animating elements using inline-block and flex*
- *Creating hover animation using ReactJS*
- *Discussing styling and DOM manipulation in ReactJS*
- *Using motion and animation in ReactJS*
- *Demonstrating animation with Frame Motion*

 -->


The command npm install (or just npm i) is used to install all the dependencies listed in a project's package.json file. Here's what it does:

Installs all dependencies: It reads the package.json file to find all the packages and libraries your project depends on, then downloads and installs them into the node_modules directory.

# [***Material UI***](https://mui.com/material-ui/getting-started/)

`Library of React UI components`

* *Material UI is an open-source React component library that implements Google's Material Design.*

* *It includes a comprehensive collection of prebuilt components that are ready for use in production right out of the box*

[***Installation***](https://mui.com/material-ui/getting-started/installation/)
```bash
npm install @mui/material @emotion/react @emotion/styled
```

```bash
npm create vite@latest
cd mini-project-react
npm install
```

As of late 2021, styled-components is not compatible with server-rendered Material UI projects. 
recommend using Emotion for SSR projects.

React router DOM is a third party library
https://github.com/hiteshchoudhary/chai-aur-react/blob/main/reactRouterNotes.md

https://tailwindcss.com/docs/installation/using-vite
https://v3.tailwindcss.com/docs/guides/vite
https://v3.tailwindcss.com/docs/installation


https://reactrouter.com/start/modes
https://github.com/hiteshchoudhary/chai-aur-react/tree/main/07reactRouter


link is used in place of anchor(a) tag
because anchor tag will reload the page
and it will not work as a single page application
so we use link tag to navigate to different pages
NavLink is used to add active class to the link
when it is clicked
in a tag we use href to navigate to different pages
but in link tag we use 'to' to navigate to different pages
and in NavLink we use 'to' to navigate to different pages
- We can customize its behavior using the following props:

1. 'className': Adds a custom class to the link.
2. 'style': Applies inline styles to the link.
3. 'activeClassName' (Deprecated in React Router v6): Previously used to add an active class.
4. 'activeStyle': Adds inline styles when the link is active.
5. 'isActive': A function that allows conditional styling based on active state.
6. 'aria-current': Used for accessibility to indicate the current page.


# React Router Crash Course  

**Topics Covered:**  
- Basics of React Router and its usage  
- How to start a React Router project  
- Navigating between different components in a single-page application  
- React Router structure and navigation bar  
- Creating header, footer, and home components  
- Installing different components inside your home  
- Dynamic routing in web applications  
- Troubleshooting rendering issues in React Router  
- Linking and injecting data into components  
- Common errors in React Router  
- Parameterizing URLs to access dynamic values  
- Capturing dynamic data using React Router  
- Calling APIs within React Router  
- Passing data inside React Router  
- Summary of React Router concepts  

[![React Router Crash Course](https://img.youtube.com/vi/VJov5QWEKE4/maxresdefault.jpg)](https://youtu.be/VJov5QWEKE4)


Note: In React Router v6, 'activeClassName' and 'exact' are removed.
Instead, we use 'className' as a function to conditionally apply active styles.

Layout component is used to wrap all the components
and it will be used in the main.jsx file
so that we can use the header and footer in all the components
without writing it again and again
so we will just import the layout component in the main.jsx file
and it will automatically include the header and footer
in all the components
so we don't have to write it again and again
and it will save our time
and it will make our code more clean and readable
and it will also make our code more maintainable
and it will also make our code more scalable
and it will also make our code more reusable
and it will also make our code more efficient
and it will also make our code more effective
and it will also make our code more productive
and it will also make our code more professional
and it will also make our code more user-friendly
and it will also make our code more accessible
and it will also make our code more inclusive


PS C:\Users\SUDIP BHATTACHARYA\Desktop\React-Frontend\07reactRouter> node -v
v20.12.2

npm create vite@latest folder_name -- --template react
code .

PS C:\Users\SUDIP BHATTACHARYA\Desktop\React-Frontend\reactrouter> npm list react-router-dom
reactrouter@0.0.0 C:\Users\SUDIP BHATTACHARYA\Desktop\React-Frontend\reactrouter
└── react-router-dom@7.3.0

https://reactrouter.com/6.28.0/start/overview#nested-routes

We had to pass the prop to right side then to top component then finally to card which is actually needed it.

Basically  passing a prop through multiple intermediate components just to get it where it's actually needed(Prop drilling). 

Context API – If the prop is needed by multiple components at different levels, React's Context API can help avoid excessive prop drilling.

Redux / Zustand – If it's global state (like user data or theme settings), a state management library can help.

react-Redux
Redux-toolkit(RTK)
Zustand

Here’s the directory structure in Markdown format:  

```md
# React-Frontend Directory Structure

## Root Directory (`React-Frontend`)
```
```
📂 React-Frontend
├── 📂 03tailwindprops
├── 📂 04bgChanger
├── 📂 05passwordGenrator
├── 📂 06CurrencyConverter
├── 📂 07reactRouter
├── 📂 08minicontext
│   ├── 📂 node_modules
│   ├── 📂 public
│   ├── 📂 src
│   │   ├── 📂 assets
│   │   ├── 📂 components
│   │   │   ├── 📄 Login.jsx (1811 bytes)
│   │   │   ├── 📄 Profile.jsx (197 bytes)
│   │   ├── 📂 context
│   │   ├── 📄 App.css (736 bytes)
│   │   ├── 📄 App.jsx (468 bytes)
│   │   ├── 📄 index.css (1170 bytes)
│   │   ├── 📄 main.jsx (229 bytes)
│   ├── 📄 .gitignore (444 bytes)
│   ├── 📄 eslint.config.js (844 bytes)
│   ├── 📄 image.png (124117 bytes)
│   ├── 📄 index.html (361 bytes)
│   ├── 📄 notes.txt (16518 bytes)
│   ├── 📄 package-lock.json (92983 bytes)
│   ├── 📄 package.json (611 bytes)
│   ├── 📄 README.md (2708 bytes)
│   ├── 📄 Untitled-2025-03-17-1947.excalidraw (25021 bytes)
│   ├── 📄 vite.config.js (161 bytes)
├── 📂 mini-project-react
├── 📂 ochi
├── 📂 reactrouter
├── 📄 .gitignore (609 bytes)
├── 📄 gsap.txt (494 bytes)
├── 📄 readme.md (125156 bytes)
├── 📄 Terminal.txt (4850 bytes)
```
`This Markdown format maintains clarity and hierarchy while preserving file sizes where applicable.`
