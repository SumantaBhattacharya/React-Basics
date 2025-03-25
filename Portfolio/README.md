# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

### ***📝 Project: Cloning Anzo Studio Website***

#### **🌐 Live Website:**  
[Anzo Studio](https://www.anzo.studio/)  

#### **🛠️ Technologies & Libraries Used:**  
- **Frontend:** React.js  
- **Styling:** CSS, GSAP Animations  
- **Icons:** Remix Icons  

#### **📦 Installed Packages:**  
```bash
npm create vite@latest
npm i
npm install remixicon --save
npm i gsap
npm install @gsap/react
```

#### **🎨 Icons Source:**  
- [Remix Icons](https://remixicon.com/)  
- [GitHub Repository](https://github.com/Remix-Design/RemixIcon)  

#### **📌 Features to Implement:**  
* *Smooth animations using GSAP*
* *Proper icon usage from Remix Icon* 
* *Interactive effects and transitions*  

🚀 **Let's build an awesome clone!** 🔥

# 03tailwindprops Project Structure

This project was created using Tailwind CSS and React.

## Directory Structure

```
src/
├── components/
│   └── (Component files)
├── App.css
├── App.jsx
├── index.css
├── main.jsx
```

## Files

### App.css

This file contains the global CSS styles for the application.

### App.jsx

This is the main React component file. It imports other components and sets up the application's routing.

### index.css

This file contains the global CSS styles for the application.

### main.jsx

This file is the entry point of the application. It renders the `App` component into the DOM.

## Adding a New Component

To add a new component to the project, follow these steps:

1. Create a new file in the `src/components/` directory with a descriptive name (e.g., `NewComponent.jsx`).
2. In the new file, import React and any necessary dependencies.
3. Define the new component as a function or a class component.
4. Export the new component using the `export default` statement.
5. Import the new component in the file where you want to use it (e.g., `App.jsx`).
6. Use the new component in the desired location within the parent component.

For example, to create a new component called `Header`, follow these steps:

1. Create a new file called `Header.jsx` in the `src/components/` directory.
2. In `Header.jsx`, import React:

```jsx
import React from 'react';
```

3. Define the `Header` component:

```jsx
const Header = () => {
  return (
    <header className="bg-blue-500 text-white p-4">
      <h1>My App</h1>
    </header>
  );
};
```

4. Export the `Header` component:

```jsx
export default Header;
```

5. Import the `Header` component in `App.jsx`:

```jsx
import React from 'react';
import Header from './components/Header';

const App = () => {
  return (
    <div>
      <Header />
      {/* Other components */}
    </div>
  );
};

export default App;
```

6. Use the `Header` component in the desired location within the `App` component.

Remember to add any necessary CSS styles to the `App.css` file or create a new CSS file for the new component.