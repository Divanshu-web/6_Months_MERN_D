import "./assets/style.css"

import { BrowserRouter, Route, Routes } from "react-router-dom"
import CustomerLayout from "./components/layout/customerLayout/CustomerLayout"
import AdminLayout from "./components/layout/adminLayout/AdminLayout"
import Home from "./components/customer/Home"
import About from "./components/customer/About"
import Dashboard from "./components/admin/Dashboard"
import ManageUsers from "./components/admin/users/ManageUsers"
import Login from "./components/auth/Login"
import AddUser from "./components/admin/users/AddUser"
import Counter from "./components/customer/Counter"
import { ToastContainer } from "react-toastify"
import Register from "./components/auth/Register"
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* .........Customer Routes .........................*/}
          <Route path="/" element={<CustomerLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/counter" element={<Counter />} />
          </Route>

          {/* ...........Admin Routes............................. */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/users/manage" element={<ManageUsers />} />
            <Route path="/admin/user/add" element={<AddUser />} />
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

