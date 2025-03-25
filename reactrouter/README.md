# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

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


```bash
npm create vite@latest
cd reactrouter
npm install
npm run dev
```
`Tailwind Installation`
```
npm install -D tailwindcss@3 postcss autoprefixer
npx tailwindcss init -p
```
```markdown
# React Router and Tailwind Setup

## Styled Components and SSR Compatibility
As of late 2021, `styled-components` is not compatible with server-rendered Material UI projects. It is recommended to use **Emotion** for SSR projects.

## React Router DOM
`react-router-dom` is a third-party library used for client-side routing in React applications.  
More details: [React Router Notes](https://github.com/hiteshchoudhary/chai-aur-react/blob/main/reactRouterNotes.md)

### Official Documentation:
- [React Router Modes](https://reactrouter.com/start/modes)
- [Nested Routes](https://reactrouter.com/6.28.0/start/overview#nested-routes)
- [React Router Examples](https://github.com/hiteshchoudhary/chai-aur-react/tree/main/07reactRouter)

## Tailwind CSS Setup with Vite
- [Tailwind + Vite Installation Guide](https://tailwindcss.com/docs/installation/using-vite)
- [Tailwind v3 + Vite](https://v3.tailwindcss.com/docs/guides/vite)
- [Tailwind v3 Installation](https://v3.tailwindcss.com/docs/installation)

## `<Link>` vs `<a>` in React Router
In React Router, we use the `<Link>` component instead of the `<a>` (anchor) tag because:
- Anchor (`<a>`) tags cause full-page reloads, breaking the Single Page Application (SPA) behavior.
- `<Link>` prevents full-page reloads and enables client-side navigation.

### `<NavLink>` Features
`<NavLink>` is an advanced version of `<Link>` that adds an **active class** when the link is active.
- In `<a>`, we use `href` to navigate.
- In `<Link>` and `<NavLink>`, we use `to`.

#### Customization Props:
1. **`className`** - Adds a custom class to the link.
2. **`style`** - Applies inline styles.
3. **`activeClassName`** *(Deprecated in React Router v6)* - Previously used for active styling.
4. **`activeStyle`** - Adds inline styles when active.
5. **`isActive`** - Function that applies styles conditionally.
6. **`aria-current`** - Improves accessibility by indicating the current page.

⚠️ Note: In React Router v6:
- `activeClassName` and `exact` are **removed**.
- Instead, `className` can be a function for conditional styling.

## Layout Component
A **Layout Component** is used to wrap common UI elements (e.g., header, footer) to avoid redundant code.

**Advantages of using a Layout Component:**
✔ Code reusability  
✔ Cleaner and more readable structure  
✔ Easier maintenance  
✔ Scalable architecture  
✔ Improved efficiency  

## Setting Up React Router with Vite

### **Check Node.js Version**
```sh
node -v
# Output: v20.12.2
```

### **Create a React App with Vite**
```sh
npm create vite@latest folder_name -- --template react
cd folder_name
code .
```

### **Vite Setup and Installation**
```sh
PS C:\Users\SUDIP BHATTACHARYA\Desktop\React-Frontend> npm create vite@latest

> npx
> create-vite

◇  Project name: reactrouter
◇  Select a framework: React
◇  Select a variant: JavaScript
◇  Scaffolding project in C:\Users\SUDIP BHATTACHARYA\Desktop\React-Frontend\reactrouter...

└  Done. Now run:

cd reactrouter
npm install
npm run dev
```

### **Navigate to the Project Folder**
```sh
cd reactrouter
```

### **Install Dependencies**
```sh
npm install
```
```sh
npm install -D tailwindcss@3 postcss autoprefixer
```
```sh
npm install react-router-dom
```

### **Check Installed Version of React Router**
```sh
npm list react-router-dom
# Output:
# reactrouter@0.0.0 C:\Users\SUDIP BHATTACHARYA\Desktop\React-Frontend\reactrouter
# └── react-router-dom@7.3.0
```
```markdown
# Resources:
- [React Router Nested Routes](https://reactrouter.com/6.28.0/start/overview#nested-routes)
```


## Files

### .gitignore

This file contains patterns for files and directories that should be ignored by Git.

### index.html

This file is the entry point for the web application. It includes the necessary scripts.

### package.json

This file contains metadata about the project, including dependencies and scripts.

### README.md

This file provides a description of the project and any instructions for setting it up and running.

### src/components/

This directory contains the React components for the application.

### src/App.css

This file contains the global CSS styles for the application.

### src/App.jsx

This is the main React component file. It imports other components.

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
