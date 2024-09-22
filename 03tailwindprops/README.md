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
