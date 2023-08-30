import React from "react";
import { Link } from "react-router-dom";
import Linkedin from "./images/Linkedin.png";


const Footer = () =>{
 
   return(
    <main className="flex-1">
        <div className="">
            <nav className="justify-evenly space-x-10 content-center  ">
                <div className=" text-white"> 
                    <div className="bg-black mr-1 w-15 py-3 p-2 text-center text-white font-light text-xl hover:cursor-pointer hover:bg-slate-700 transition-colors rounded-xl"> 
                        Contáctenos en:<br/>
                        Cel.: 311 485 6410

                        
                        ©2023. Todos los derechos reservados <br/>
                        Desarrollado por: 
                        <a href="https://www.linkedin.com/in/allumagu/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-slate-300 px-3 py-2" > 
                      <img className="w-auto h-12" src={Linkedin}/>
                    </a>Alba Martinez <br/>
                
                    </div>
                </div>
            </nav>
        </div>
    </main>
    )
}

export default Footer;