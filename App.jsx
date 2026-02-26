import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "./App.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./components/pages/Home"
import About from "./components/pages/About"
import Gallery from './components/pages/Gallery';
import MasterLayout from './components/layout/MasterLayout';
import Contact from './components/pages/Contact';

function App() {

  return (
    <>

      <BrowserRouter>

        <Routes>



          <Route path='/' element={<MasterLayout></MasterLayout>}>


            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/about' element={<About></About>}></Route>

            <Route path='/gallery' element={<Gallery></Gallery>}></Route>

            <Route path='/contact' element={<Contact></Contact>}></Route>

          </Route>



        </Routes>

      </BrowserRouter>


    </>
  )
}

export default App
