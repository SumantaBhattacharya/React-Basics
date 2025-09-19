# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


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

# 03tailwindprops Project Structure

This project is a basic setup for a React application using Tailwind CSS.

```
# Components

The `components` directory contains the React components for the application.

## card.jsx

This file exports a `Card` component that displays a card with content. It uses Tailwind CSS classes for styling.

## footer.jsx

This file exports a `Footer` component that displays the footer section of the application. It uses Tailwind CSS classes for styling.

## heading.jsx

This file exports a `Heading` component that displays a heading with content. It uses Tailwind CSS classes for styling.

## nav.jsx

This file exports a `Nav` component that displays the navigation bar of the application. It uses Tailwind CSS classes for styling.

To use these components in your application, import them in the desired files and use them within the parent components.

For example, to use the `Card` component in the `App` component, import it and use it like this:
```
```jsx
import React from 'react';
import Card from './components/card';

const App = () => {
  return (
    <div>
      <Card />
      {/* Other components */}
    </div>
  );
};

export default App;
```

Remember to add any necessary CSS styles to the `App.css` file or create a new CSS file for the components.


## Files

### .gitignore

This file contains patterns for files and directories that should be ignored by Git.

### index.html

This file is the entry point for the web application. It includes the necessary scripts and links to Tailwind CSS and the application's JavaScript bundle.

### package.json

This file contains metadata about the project, including dependencies and scripts.

### README.md

This file provides a description of the project and any instructions for setting it up and running.

### src/components/

This directory contains the React components for the application.

### src/App.css

This file contains the global CSS styles for the application.

### src/App.jsx

This is the main React component file. It imports other components and sets up the application's routing.

### src/index.css

This file contains the global CSS styles for the application.

### src/main.jsx

This file is the entry point of the application. It renders the `App` component into the DOM.

## Adding a New Component

To add a new component to the project, follow these steps:

1. Create a new file in the `src/components/` directory with a descriptive name (e.g., `NewComponent.jsx`).
2. In the new file, import React and any necessary dependencies.
3. Define the new component as a function or a class component.
4. Export the new component using the `export default` statement.
5. Import the new component in the file where you want to use it (e.g., `App.jsx`).
6. Use the new component in the desired location within the parent component.
