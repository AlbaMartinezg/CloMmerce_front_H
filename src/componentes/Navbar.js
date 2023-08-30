import React from "react";
import { Link } from "react-router-dom";
import clommerce from "./images/clommerce.png";
import facebook from "./images/facebook.png";
import instagram from "./images/instagram.png";
import WhatsApp from "./images/WhatsApp.png";

const Navbar = () =>{
 
   return(  
    <main className="flex-1">
        <div className="">
            <nav className="justify-evenly space-x-12 content-center  ">
                <div className="flex h-[20mm] py-7 mb-4 px-4" > {/* Aquí se establece la altura */}
                  <div className="container mx-auto items-center md:w-1/4 lg:w-2/5 ">
                      <img className="w-auto h-12" src={clommerce} />
                  </div>
                            
                  <div className="md:w-1/4 ">
                    <a href="/" className="text-2xl font-light px-3 py-2 text-white rounded-lg hover:bg-fuchsia-900 hover:text-slate-300">
                        Home
                    </a>
                    <a href="/view-categorias" className="text-2xl font-light px-3 py-2 text-white rounded-lg hover:bg-fuchsia-900 hover:text-slate-300">Categorias</a>

                    <a href="/view-productos" className="text-2xl font-light px-3 py-2 text-white rounded-lg hover:bg-fuchsia-900 hover:text-slate-300">Productos</a>

                    <a href="/contactenos" className="text-2xl font-light px-3 py-2 text-white rounded-lg hover:bg-fuchsia-900 hover:text-slate-300">Contáctenos</a>
                  </div> 

                  <div className="flex x-2 md:w-1/4 ">
                    <a href="https://www.facebook.com/Edilmamg/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-slate-300 px-3 py-2">
                      <img className="w-auto h-12" src={facebook}/></a>
                    <a href="https://www.instagram.com/fasynga/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-slate-300 px-3 py-2" >
                      <img className="w-auto h-12" src={instagram}/>
                    </a>
                    <a href="https://wa.me/573114856410" target="_blank" rel="noopener noreferrer" className="text-white hover:text-slate-300 px-3 py-2" > 
                      <img className="w-auto h-12" src={WhatsApp}/>
                    </a>
                  </div>
                  <div >
                    <Link
                        className="bg-fuchsia-900 mr-2 w-full py-3 p-4 text-center text-white font-light text-2xl rounded hover:cursor-pointer hover:bg-indigo-900 transition-colors "
                        to={"/login"}
                        >
                        Iniciar Sesión
                    </Link>
                  </div>
                </div>
                </nav>
            </div>
        </main>
    )
}

export default Navbar;

/*import React from "react";
import { Link } from "react-router-dom";

function Navbar(){

    return(    

        <nav class="flex justify-center space-x-4">
            <a href="/" class="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Home</a>
            <a href="/categorias" class="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Team</a>
            <a href="/productos" class="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Projects</a>
            <a href="/contactenos" class="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Reports</a>
            </nav>
      
    )
}

export default Navbar;   

/*
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
        
*/