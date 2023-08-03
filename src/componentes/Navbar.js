import React from "react";
import { Link } from "react-router-dom";

function Navbar(children){

    return(    
        <nav className="flex justify-between item-center h-16 bg-white text-black ">
            <Link to="/"className="pl-8"> Logo </Link>
            <div className="px-4 cursor-pointer md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={1.5} 
                stroke="currentColor" 
                className="w-6 h-6"
            >
            <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>


            </div>
        </nav>
    )
}

export default Navbar;   