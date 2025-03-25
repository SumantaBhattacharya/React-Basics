# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

```sh

PS C:\Users\SUDIP BHATTACHARYA\Desktop\React-Frontend> npm create vite@latest

> npx
> create-vite

│
◇  Project name:
│  09themeswitcher
│
◇  Select a framework:
│  React
│
◇  Select a variant:
│  JavaScript
│
◇  Scaffolding project in C:\Users\SUDIP BHATTACHARYA\Desktop\React-Frontend\09themeswitcher...
│
└  Done. Now run:

  cd 09themeswitcher
  npm install
  npm run dev

PS C:\Users\SUDIP BHATTACHARYA\Desktop\React-Frontend> cd 09themeswitcher
PS C:\Users\SUDIP BHATTACHARYA\Desktop\React-Frontend\09themeswitcher> npm install

added 149 packages, and audited 150 packages in 3m

30 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
PS C:\Users\SUDIP BHATTACHARYA\Desktop\React-Frontend\09themeswitcher> npm install -D tailwindcss@3 postcss autoprefixer

added 93 packages, and audited 243 packages in 55s

58 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
PS C:\Users\SUDIP BHATTACHARYA\Desktop\React-Frontend\09themeswitcher> npx tailwindcss init -p

Created Tailwind CSS config file: tailwind.config.js
Created PostCSS config file: postcss.config.js

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
