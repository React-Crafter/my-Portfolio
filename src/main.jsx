import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

 import { 
     createBrowserRouter,
     RouterProvider
 } from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import Block from './components/Block/Block.jsx';
import About from './components/About/About.jsx';
import Contacts from './components/Contacts/Contacts.jsx';

 const router = createBrowserRouter([
   {
     path: '/',
     element: <App></App>,
     children: ([
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/Home',
        element: <Home></Home>
      },
      {
        path: '/Block',
        element: <Block></Block>
      },
      {
        path: '/About',
        element: <About></About>
      },
      {
        path: '/Contacts',
        element: <Contacts></Contacts>
      },
     ])
   },
 ])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={ router}></RouterProvider>
  </StrictMode>,
)
