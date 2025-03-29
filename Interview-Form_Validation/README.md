# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# [***React Interview Series 🎯 | Master Real-Life Challenges | Part 1 - Form Validation***](https://youtu.be/hYVroLLnwqg?si=FhBj2MGJrv8h68lF)

[![React Interview Series 🎯 | Master Real-Life Challenges | Part 1 - Form Validation](https://img.youtube.com/vi/hYVroLLnwqg/maxresdefault.jpg)](https://youtu.be/hYVroLLnwqg?si=FhBj2MGJrv8h68lF)  

In this video, dive into real-life React interview challenges, starting with **Form Validation**. Enhance your problem-solving skills and prepare for React job interviews! 🚀  

Here's the Markdown file with the contents:  


# React Interview Form Validation Setup  

## Creating a Vite Project  

```powershell
PS C:\Users\SUDIP BHATTACHARYA\Desktop\React-Frontend> npm create vite@latest
```

### Project Setup  

```powershell
◇  Project name: Interview-Form_Validation  
◇  Package name: form-validation  
◇  Select a framework: React  
◇  Select a variant: JavaScript  
◇  Scaffolding project in C:\Users\SUDIP BHATTACHARYA\Desktop\React-Frontend\Interview-Form_Validation...
```

#### Run the following commands to start:  

```powershell
cd Interview-Form_Validation
npm install
npm run dev
```

## Installing Dependencies  

Navigate to the project directory:  

```powershell
PS C:\Users\SUDIP BHATTACHARYA\Desktop\React-Frontend\Interview-Form_Validation> npm install
```


### Installing Tailwind CSS  

```powershell
PS C:\Users\SUDIP BHATTACHARYA\Desktop\React-Frontend\Interview-Form_Validation> npm install -D tailwindcss@3 postcss autoprefixer
```

Initialize Tailwind CSS:  

```powershell
npx tailwindcss init -p
```

## Installing Additional Dependencies  

### Boxicons  

```powershell
npm install boxicons --save
```

### React Toastify  

```powershell
npm i --save react-toastify
```

---

**React Interview Form Validation** project is now set up with **Vite, Tailwind CSS, Boxicons, and React Toastify**! 🚀

Run `npm run dev` to start development.  


[**font used**](https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap)

https://fkhadra.github.io/react-toastify/introduction/

https://github.com/saarthack/react-interview

```js
<div className="hidden ml-6 sm:flex flex-col gap-4 p-4 bg-gray-900 rounded-lg shadow-lg w-72">
        <h2 className="text-yellow-400 text-lg font-bold text-center">
          Registered Users
        </h2>
        {isUsers.length === 0 ? (
          <p className="text-gray-500 text-center">No users yet</p>
        ) : (
          isUsers.map((elem, index) => (
            <div key={index} className="bg-gray-800 p-3 rounded-md shadow-md">
              <p className="text-white font-semibold">{elem.name}</p>
              <p className="text-gray-400 text-sm">{elem.email}</p>
            </div>
          ))
        )}
      </div>
```