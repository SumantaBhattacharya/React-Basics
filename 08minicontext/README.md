# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
Here’s your Markdown-formatted notes:  

# Context API Crash Course with 2 Projects 🚀  

[![Context API Crash Course with 2 Projects](https://img.youtube.com/vi/JQVBGtZMqgU/maxresdefault.jpg)](https://youtu.be/JQVBGtZMqgU?si=IlbXQASPFOkDKrD8)  

[Context API Crash Course with 2 Projects](https://youtu.be/JQVBGtZMqgU?si=IlbXQASPFOkDKrD8)

# ***Prop Drilling and State Management Solutions***

## **Prop Drilling**
- **Issue**: We had to pass the prop to the right side, then to the top component, and finally to the card where it was actually needed.
- **Definition**: Passing a prop through multiple intermediate components just to get it where it's actually needed.

## **Solutions to Avoid Prop Drilling**

### 1. *Context API*  
- If the prop is needed by multiple components at different levels, React's **Context API** can help avoid excessive prop drilling.

### 2. *State Management Libraries*
If the data is **global state** (like user data or theme settings), a state management library can help.

#### Popular Libraries:
- **Redux / React-Redux**
- **Redux Toolkit (RTK)**
- **Zustand**

```md
# Vite Project Setup Notes

## Packages Installed
- `npm create vite@latest`
- `npm install`

## Commands Used in Terminal
```sh
npm create vite@latest
cd 08minicontext
npm install
npm run dev
```

## ***Track of terminal***
```
Windows PowerShell
Copyright (C) Microsoft Corporation. All rights reserved.

PS C:\Users\SUDIP BHATTACHARYA\Desktop\React-Frontend> npm create vite@latest

> npx
> create-vite

│
◇  Project name:
│  08minicontext
│
◇  Select a framework:
│  React
│
◇  Select a variant:
│  JavaScript
│
◇  Scaffolding project in C:\Users\SUDIP BHATTACHARYA\Desktop\React-Frontend\08minicontext...
│
└  Done. Now run:

  cd 08minicontext
  npm install
  npm run dev

PS C:\Users\SUDIP BHATTACHARYA\Desktop\React-Frontend> cd 08minicontext

PS C:\Users\SUDIP BHATTACHARYA\Desktop\React-Frontend\08minicontext> npm install

added 149 packages, and audited 150 packages in 2m

30 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```
Notes
---

https://react.dev/reference/react/useContext

`Context API is a library`

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
