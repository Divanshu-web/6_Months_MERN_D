import { Outlet } from "react-router-dom";
import AdminFooter from "./AdminFooter";
import AdminHeader from "./AdminHeader";

export default function AdminMasterLayout( ){
    return(
        <>
        <AdminHeader></AdminHeader>

       <Outlet></Outlet>

        <AdminFooter></AdminFooter>
        </>
    )
}