// import { useState } from 'react'
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
import Login from './component/pages/Login'
import AdminMasterLayout from './component/layout/AdminMasterLayout'
import AdminHome from './component/admin/AdminHome'
import AddCategory from './component/admin/AddCategory'
import AllCategory from './component/admin/AllCategory'
import AdminContact from './component/admin/AdminContact'
import AdminLogin from './component/admin/AdminLogin'
import Demo from './component/pages/Demo'

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
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/demo' element={<Demo/>}></Route>
      </Route>

      <Route path='/admin' element={<AdminMasterLayout/>}>
      <Route path='/admin/home' element={<AdminHome/>}></Route>
      <Route path='/admin/addcategory' element={<AddCategory/>}></Route>
      <Route path='/admin/allcategory' element={<AllCategory/>}></Route>
      <Route path='/admin/contact' element={<AdminContact/>}></Route>
      <Route path='/admin/Login' element={<AdminLogin/>}></Route>

      </Route>



     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
