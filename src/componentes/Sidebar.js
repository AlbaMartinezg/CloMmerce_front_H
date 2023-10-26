import React from "react";
import { Link } from "react-router-dom";


const Sidebar = () =>{
 
   return(
        <aside className="md:w-75 lg:w-60 px-5 py-10 bg-violet-300">

            <div>
                <Link
                    className="bg-violet-500 w-full p-3 text-white uppercase font-bold mt-12 text-center rounded-lg"
                    to={"/crear-categoria"}
                    >
                        Crear Categoría 
                </Link>
            </div>
            <div className="py-10">
                <Link
                    className="bg-violet-500 w-full p-3 text-white uppercase font-bold mt-12 text-center rounded-lg"
                    to={"/admin"}
                    >
                        Admin  Categorias  
                </Link>
            </div>
            
 
        </aside>
    )
}

export default Sidebar;