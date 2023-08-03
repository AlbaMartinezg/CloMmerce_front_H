import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

function Layout(children){

    return(    
        <div className="h-screen">
            <Navbar/>
            {children}
        </div>
    )
}

export default Layout;   

/*
<Link
                className="bg-violet-500 w-full p-3 text-white uppercase font-bold mt-12 text-center rounded-lg"
                to={"/login"}
                >
                    Iniciar Sesión 
            </Link>
*/