// import React from 'react'

import { Outlet } from "react-router-dom"
import LearnermentorHeader from "./LearnermentorHeader"
import LearnermentorFooter from "./LearnermentorFooter"


function LearnermentorMasterLayout() {
  return (
   <>
    <LearnermentorHeader/>  
    <Outlet/>
    <LearnermentorFooter/>

   </>
  )
}

export default LearnermentorMasterLayout
