import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import ReactDOM from "react-dom/client";
// import { createBrowserRouter as Router } from 'react-router-dom'
// import { createBrowserRouter } from 'react-router-dom'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Components/Home.jsx'
import About from './Components/About.jsx'
import Contact from './Components/Contact.jsx'
import User from './Components/User/user.jsx'
import Github, { GitHubInfoLoader } from './Components/Github/Github.jsx'

// http://localhost:5173/user/100
// Create a browser-based router is method which takes array of routes as an argument
// and returns an instance of Router class from react-router-dom library

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "about",
        element: <About/>
      },{
        path: "contact",
        element: <Contact/>
      },{
        path: "user/:id",
        element: <User/>
      },{
        path: "/github",
        element: <Github/>,
        loader: GitHubInfoLoader // we could have fetched from here but we created a method to do the same

      },
      {
        path: "*",
        element: <h1>Page not found</h1>
      }
    ]
  }
])

/*
loader expects a function, but your original code placed the function inside an object { GitHubInfoLoader }, which is incorrect.
Instead, loader: GitHubInfoLoader should be used directly.
*/

// the we click the component then its fetches the data from the API again and again but when we use loader it stores the fetched data in the cached memory making it optimised reducing the loading time

/*
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='/' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
    </Route>
  )
)
*/

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}

    <RouterProvider router={router} /> 
    
  </StrictMode>,
)

/*
RouterProvider is a self-closing component
router is passed as a prop to RouterProvider
router is the instance of Router from react-router-dom library
The RouterProvider component wraps the entire application, making it easy to navigate between routes
and to provide the necessary context to its children.
This ensures that the routing system is correctly set up and accessible throughout the application.
This is a crucial component for managing the state of your application and routing between different pages.
The Router class provides the necessary functionality for managing the state of your application and routing between different pages.
The RouterProvider component provides the necessary context for the router to work correctly.
The router prop is an instance of the Router class from the react-router-dom library.
RouterProvider allows you to define routes, handle navigation, and provide the necessary context for your components to work correctly.
The router prop is passed to the RouterProvider component to provide the necessary context for the router to work correctly.
The router prop is an instance of the Router class from the react-router-dom library.*/