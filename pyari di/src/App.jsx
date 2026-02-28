// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './component/layout/Footer'
import Header from './component/layout/Header'
import MasterLayout from './component/layout/MasterLayout'
import Home from './component/pages/Home'
import About from './component/pages/About'
import Service from './component/pages/Service'
import Menu from './component/pages/Menu'
import Booking from './component/pages/Booking'
import Team from './component/pages/Team'
import Testimonial from './component/pages/Testimonial'
import Contact from './component/pages/Contact'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
     {/* <h1>love you so much meri pyari di</h1> */}
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<MasterLayout/>}>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/service' element={<Service/>}></Route>
      <Route path='/menu' element={<Menu/>}></Route>
      <Route path='/booking' element={<Booking/>}></Route>
      <Route path='/team' element={<Team/>}></Route>
      <Route path='/testimonial' element={<Testimonial/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      
      </Route>
     </Routes>
     </BrowserRouter>
     
    </>
  )
}

export default App
