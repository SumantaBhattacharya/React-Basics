# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

[![Video Title](https://img.youtube.com/vi/Lt4vy8hfc-s/hqdefault.jpg)](https://youtu.be/Lt4vy8hfc-s?si=N1OXAt0gP09dw3Mo)

# ***Links i been through***
- [***useCallback***](https://react.dev/reference/react/useCallback)



## ***Summary***

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

useCallback
useCallback is a React Hook that lets you cache a function definition between re-renders.

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

https://www.freeconvert.com/webm-to-mp4