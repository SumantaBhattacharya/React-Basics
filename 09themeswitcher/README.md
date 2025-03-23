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