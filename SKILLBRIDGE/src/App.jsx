
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './component/pages/Home'
import MasterLayout from './component/layout/MasterLayout'
import About from './component/pages/About'
import Service from './component/pages/Service'
import Contact from './component/pages/Contact'
import Appointment from './component/pages/Appointment'
import Feature from './component/pages/Feature'
import Blog from './component/pages/Blog'
import Team from './component/pages/Team'
import Testimonial from './component/pages/Testimonial'
import AdminMasterLayout from './component/Admin/AdminMasterLayout'
import AdminHome from './component/adminpages/AdminHome'
import Error404 from './component/pages/error404'
import Beauty_and_Makeup from './component/adminpages/Beauty_and_Makeup'
import Animation from './component/adminpages/Animation'
import DigitalMarketing from './component/adminpages/DigitalMarketing'
import FashionDesigning from './component/adminpages/FashionDesigning'
import VideoEditing from './component/adminpages/VideoEditing'
import AdminContact from './component/adminpages/AdminContact'
import Login from './component/auth/Login'
import AddSkills from './component/adminpages/AddSkills'
import ManageSkills from './component/adminpages/ManageSkills'
import Register from './component/auth/Register'
import { ToastContainer } from 'react-toastify'
import UpdateSkills from './component/adminpages/UpdateSkill'
import AddLearnerMentor from './component/adminpages/AddLearnerMentor'
import ManageLearnerMentor from './component/adminpages/ManageLearnerMentor'
import UpdateLearnerMentor from './component/adminpages/UpdateLearnerMentor'

import LearnermentorMasterLayout from './component/learnermentor/LearnermentorMasterLayout'
import Dashboard from './component/learnermentor/Dashboard'
import Addsession from './component/learnermentor/Addsession'
import Managesession from './component/learnermentor/Managesession'
import UpdateSession from './component/learnermentor/Updatesession'


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MasterLayout />}>
            <Route path='/' element={<Home />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/service' element={<Service />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
            <Route path='/appointment' element={<Appointment />}></Route>
            <Route path='/feature' element={<Feature />}></Route>
            <Route path='/blog' element={<Blog />}></Route>
            <Route path='/team' element={<Team />}></Route>
            <Route path='/testimonial' element={<Testimonial />}></Route>
            <Route path='/error404' element={<Error404 />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/register' element={<Register />}></Route>
          </Route>

          <Route path='/admin' element={<AdminMasterLayout />}>
            <Route path='/admin/home' element={<AdminHome />}></Route>
            <Route path='/admin/beauty' element={<Beauty_and_Makeup />}></Route>
            <Route path='/admin/animation' element={<Animation />}></Route>
            <Route path='/admin/digitalmarketing' element={<DigitalMarketing />}></Route>
            <Route path='/admin/fashiondesigning' element={<FashionDesigning />}></Route>
            <Route path='/admin/videoediting' element={<VideoEditing />}></Route>
            <Route path='/admin/contact' element={<AdminContact />}></Route>
            <Route path='/admin/addskills' element={<AddSkills />}></Route>
            <Route path='/admin/manageskills' element={<ManageSkills />}></Route>
            <Route path='/admin/updateskills/:_id' element={<UpdateSkills />}></Route>
            {/* <Route path='/admin/addlearnermentor' element={<AddLearnerMentor />}></Route> */}
            <Route path='/admin/managelearnermentor' element={<ManageLearnerMentor />}></Route>
            <Route path='/admin/updatelearnermentor/:_id' element={<UpdateLearnerMentor />}></Route>
          </Route>

          <Route path='/learnermentor' element={<LearnermentorMasterLayout/>}>
          <Route path='/learnermentor/dashboard' element={<Dashboard/>}></Route>
          <Route path='/learnermentor/addsession' element={<Addsession/>}></Route>
          <Route path='/learnermentor/managesession' element={<Managesession/>}></Route>
          <Route path='/learnermentor/updataesession/:_id' element={<UpdateSession/>}></Route>
          
          </Route>

        </Routes>
      </BrowserRouter>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"

      />

    </>
  )
}

export default App

