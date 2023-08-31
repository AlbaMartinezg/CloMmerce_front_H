import React, { useEffect, useState } from "react";
import { Link, useNavigate} from 'react-router-dom';
import crud from '../conexiones/crud';
import Navbar from "./Navbar";
import Footer from "./Footer";


const Contactenos = () =>{

  const navigate = useNavigate();

  const [usuario, setUsuario] = useState({
      nombre:'',
      email:'',
      telefono:'',
      mensaje:''
  });

  const { nombre, email, telefono, mensaje} = usuario;

  const onChange = (e)=>{
      setUsuario({
          ...usuario,
          [e.target.name]: e.target.value
      })
  };

    navigate("/");

   // const onSubmit = (e) =>{
      //e.preventDefault();
      //ingresarCuenta();    }  
   
    return(  
      <>     
      <Navbar/>
      <main className=" flex-1 bg-gray-300 mx-auto p-3 sm: flex  justify-center"> 
          <div className="md:w-2/3 lg:w-2/5">             
          <form 
          //onSubmit={onSubmit} 
          className="my-10 bg-white shadow rounded-lg p-10">
            <div className=" text-center  pt-5">
              <p className="bg-violet-900 mr-1 w-15 py-3 p-2 text-center text-white font-light text-4xl hover:cursor-pointer hover:bg-slate-700 transition-colors rounded-xl">               
                Contáctenos</p>
            </div>         
              
            <div className="my-5">
                <label className="uppercase text-gray-600 block text-lx font-bold">Nombre completo</label>
                <input 
                type="text"
                id="nombre"
                name="nombre"
                placeholder="Digite su Nombre"
                className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
                value={nombre}
                onChange={onChange}
                /><br/><br/>

                <label className="uppercase text-gray-600 block text-lx font-bold">Email</label>
                <input 
                type="email"
                id="email"
                name="email"
                placeholder="Digite su Email"
                className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
                value={email}
                onChange={onChange}
                /><br/><br/>
        
                <label className="uppercase text-gray-600 block text-lx font-bold">Teléfono de contacato</label>
                <input 
                type="number"
                id="telefono"
                name="telefono"
                placeholder="Digite el número de telefono"
                className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
                value={telefono}
                onChange={onChange}
                /><br/><br/>

                <label className="uppercase text-gray-600 block text-lx font-bold">Mensaje</label>
                <input 
                type="text"
                id="mensaje"
                name="mensaje"
                placeholder="digite el mensaje"
                className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
                value={mensaje}
                onChange={onChange}
                /><br/><br/>
            </div>    

            <input 
                type="submit" 
                placeholder="Digite el Mensaje" 
                className="bg-violet-700 mb-5 w-full py-3 text-white uppercase 
                font-bold rounded-xl hover:cursor-pointer hover:bg-violet-900 transition-colors" to={"allumagu@gmail.com"}/>


            <div className="flex justify-center">

              <Link  
                  className="bg-violet-500 mx-5 w-50 py-3 px-10 text-white uppercase font-bold rounded-xl hover:cursor-pointer hover:bg-violet-900 transition-colors "
                  to ={"/"}>
                  Inicio
              </Link> 
            </div>
          </form>
          </div> 
      </main>         
    <Footer/>
    </>             
  );
}

export default Contactenos;

/* El siguiente código es para colocar el link de dicionar al carro de compras

<div className="mt-6">
  <a
    href={product.href}
    className="relative flex items-center justify-center rounded-md border border-transparent bg-gray-100 py-2 px-8 text-sm font-medium text-gray-900 hover:bg-gray-200"
  >
    Add to bag<span className="sr-only">, {product.name}</span>
  </a>
</div>

 <div className="flex-1 bg-white">
          <div className="py-16 sm:py-24 xl:mx-auto xl:max-w-7xl xl:px-8">
            <div className="px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 xl:px-0">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">Navega por Categoría</h2>

              <a href="/" className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block">
                Más Categorías
                <span aria-hidden="true"> &rarr;</span>
              </a>
            </div>

          <div className="mt-4 flow-root rounded-r-full">
            <div className="-my-2">
              <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
              <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
               
                {categoria.map((category) => (
                  <a
                    key={category.nombre}
                    href={category.href}
                    className="relative flex h-80 w-56 flex-col overflow-hidden rounded-lg p-6 hover:opacity-75 xl:w-auto"
                  >
                    <span aria-hidden="true" className="absolute inset-0">
                      <img src={category.imagen} alt="" className="h-full w-full object-cover object-center" />
                    </span>
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"
                    /> <br/><br/>
                    <span className="relative mt-auto text-center text-xl font-bold text-white">{category.nombre}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>        
      </div>
      </div>

*/