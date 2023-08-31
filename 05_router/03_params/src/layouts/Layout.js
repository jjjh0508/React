import Header from "../components/Header";
import Navber from "../components/Navber";
import {Outlet} from "react-router-dom";


function Layout(){
    return(
        <>
            <Header/>
            <Navber/>
            <Outlet/>
        </>
    )
}


export default Layout