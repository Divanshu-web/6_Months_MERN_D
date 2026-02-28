import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import MasterLayout from './component/layout/MasterLayout'
import Home from './component/pages/Home'
import About from './component/pages/About'
import Contact from './component/pages/Contact'
import Course from './component/pages/Course'
import Team from './component/pages/Team'
import Testimonial from './component/pages/Testimonial'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<MasterLayout/>}>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/course' element={<Course/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/team' element={<Team/>}></Route>
      <Route path='/testimonial' element={<Testimonial/>}></Route>
      </Route>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
