import React, { useEffect, useState } from "react";
import crud from '../../conexiones/crud';
import Navbar from "../Navbar";
import Footer from "../Footer";


const ViewCategorias = () =>{
 
    const [categoria, setCategoria] = useState([]);

    const cargarCategorias = async () =>{
      const response = await crud.GET(`/api/categorias`);
      setCategoria(response.categoria);
    }
    useEffect(()=>{
      cargarCategorias();
    },[]);

   return(
    <>     
      <Navbar/>
      <div className="flex-1 bg-white">
        <div className="py-16 sm:py-15 xl:mx-auto xl:max-w-7xl xl:px-4">
          <div className="mt-4 flow-root rounded-r-lg">
            <div className="-my-2">
              <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8 shadow-gray-30">          
                  {categoria.map((category) => (
                    <div flex-1>
                      <div
                        key={category.nombre}
                        href={category.href}
                        className="relative h-80 w-56 flex-col overflow-hidden p-5 hover:opacity-75 xl:w-auto rounded-lg">
                          <p aria-hidden="true" className="absolute inset-0">
                            <img src={category.imagen} alt="" className="h-full w-full object-cover object-center" />
                          </p>
                      </div>
                        <a aria-hidden="true" className=" bottom-0 h-2/3 bg-gradient-to-t from-gray-800" > 
                          <p className="relative mt-auto text-center text-2xl font-bold text-violet-700">{category.nombre}</p>
                        </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>        
        </div>
      </div> 
      <Footer/>
    </>     
  )

}


export default ViewCategorias;