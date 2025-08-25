import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import { BrowserRouter } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './components/layout.jsx'
import Home from './components/home.jsx'
import About from './components/about.jsx'
import Contact from './components/contact.jsx'
import User from './components/user.jsx'
import Github, { gitInfo } from './components/github.jsx'

//Here, the layout is the wrapper under which the children would get rendered. Through outlet. path "/" means that's the root of the file, that is what's first rendered when the page loads.
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        //the first child to be rendered in outlet
        index: true,
        element: <Home/>
      },
      {
        //type /about and boom the about page opens! 
        path: "about",
        element: <About/>
      },
      {
        path: "contact",
        element: <Contact/>
      },
      {
        //Just to learn how parameters from the url are taken, we have created a User compoent. The userID here is image of the parameter taken.
        path: "user/:userid",
        element: <User/>
        //just type /user/{something} and see the concept in action
      },
      //A different way to fetch apis, as soon as the url changes the proses of fetching starts, more efficient that useEffect. 
      {
        loader: gitInfo,
        path: "github",
        element: <Github/>
      }
    ]
  }
])

//In this we are going to learn about "react-router" which is like a framework for react, it has more hooks, and components and many other things which are not of use to us as of right now.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <BrowserRouter> */}
    <RouterProvider router={router} />
    {/* </BrowserRouter> */}
  </StrictMode>,
)
