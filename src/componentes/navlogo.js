
import React from "react";
import clommerce from "./images/clommerce.png"

const NavLogo = () =>{
 
   return(  
    <div className="flex-1">
        <nav className="bg-gray-700 flex justify-stretch content-evenly space-x-6 h-20 py-6">
            {/* Aquí se establece la altura */}
                <div className="flex justify-center mx-auto items-center md:w-1/4 lg:w-2/5 ">
                    <img className="w-auto h-12" src={clommerce} />
                </div>
                    
                <div>                        

                </div>                       
            </nav>
        </div>
    )
}

export default NavLogo;