// import React from 'react'

import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"

function MasterLayout() {
  return (
   <>
   <Header></Header>
   <Outlet></Outlet>
   <Footer></Footer>
   </>
  )
}

export default MasterLayout
