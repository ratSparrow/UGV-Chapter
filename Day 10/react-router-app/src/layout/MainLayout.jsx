import { Outlet } from "react-router-dom"
import Footer from "../components/shared/Footer"
import Navbar from "../components/shared/Navbar"

function MainLayout () {
    return(
        <>
            <Navbar></Navbar>
             <Outlet></Outlet>
            <Footer></Footer>
        </>
    )
}

export default MainLayout