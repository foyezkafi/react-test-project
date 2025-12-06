import React from 'react'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import Notfound from './pages/Notfound'
const App = () => {

const myroute = createBrowserRouter(createRoutesFromElements(
  <Route>


    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='*' element={<Notfound/>}/>

  </Route>
))





  return (
   <>
   
 <RouterProvider router={myroute}/>
   
  </>
  )
}

export default App
