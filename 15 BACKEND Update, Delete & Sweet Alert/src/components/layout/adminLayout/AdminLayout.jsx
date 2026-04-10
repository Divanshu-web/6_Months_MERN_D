import { Outlet, useNavigate } from "react-router-dom";
import AdminHeader from "./AdminHeader";
import AdminFooter from "./AdminFooter";
import { useEffect } from "react";
import { toast } from "react-toastify";

export default function AdminLayout() {


// useEffect(()=>{
//     // side effects
//     // what to do
// }, [dependencies]) // to handle side effects 


// dependencies => when to do

// 1 - do on the first render
// useEffect(()=>{

// }, [])

// 2 - do whenever the component changes
// useEffect(()=>{

// })

// 3 - do whenever the dependency changes
// useEffect(()=>{

// }, [count]) // let dependency is count
// this will execute whenever count changes




const nav = useNavigate()

useEffect(()=>{
    let userType = localStorage.getItem("userType")
    let token = localStorage.getItem("token")
    if(userType != 1 || !token){
        toast.error("Unauthorized")
        nav('/login')
    }
}, [])

    return (
        <>
            <AdminHeader />
            <Outlet />
            <AdminFooter></AdminFooter>
        </>
    )

}