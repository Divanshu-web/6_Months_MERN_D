// import React from 'react'

import { Outlet } from "react-router-dom"
import AdminHeader from "./AdminHeader"
import AdminFooter from "./AdminFooter"



function AdminMasterLayout() {
  return (
   <>
   <AdminHeader></AdminHeader>
   <Outlet></Outlet>
   <AdminFooter></AdminFooter>
   </>
  )
}

export default AdminMasterLayout
