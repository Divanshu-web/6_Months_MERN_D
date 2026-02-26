import Header from "./Header"
import Footer from "./Footer"
import { Outlet } from "react-router-dom"

function MasterLayout(){
    return(
        <>
            <Header></Header>

            <Outlet></Outlet>
            
            <Footer></Footer>

        </>
    )
}

export default MasterLayout