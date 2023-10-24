import React,{ useEffect, useState } from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";
import { Link, useParams } from 'react-router-dom';
import crud from "../../conexiones/crud";
import ViewProductos from "./ViewProductos";


const HomeProductos = () => {
  

  const { idCategoria} = useParams();

  const [producto, setProductos] = useState([]);

  const cargarProducto = async () => {
    const response = await crud.GET(`/api/productos/${idCategoria}`);
    setProductos(response.producto);
  };
  //console.log(productos);
  useEffect(() =>{
    cargarProducto();
  },[]);

  return (
    <>
      <Header/>
      <div className="md:flex md:min-h-screen">
        <Sidebar/>
        <main className="flex-1">
          <div className="mt-10 flex justify-center">
          <h1 className="inline bg-gradient-to-r from-indigo-200 via-violet-700 to-indigo-200 bg-clip-text font-display text-5xl tracking-tight text-transparent">
            Lista de Productos
          </h1>
          </div>
          <div className="p-10">
              <Link
                  to={`/crear-producto/${idCategoria}`}
                  className="bg-violet-600 w-full p-3 text-white uppercase font-bold mt-5 text-center rounded-lg"
              >
                  Crear Producto
              </Link>
          </div>
          <div className="bg-gray-600 shadow mt-10 rounded-lg">         

          </div>
        </main> 
      </div>
    </>
  );
}

export default HomeProductos;
/*
 <div className=" bg-gray-600 shadow mt-10 rounded-lg">
              {productos.map(producto=>
              <ViewProductos
              key={producto._id}
              producto={producto}
              />
              )};            
            </div>

            
    <div>
      <img src={imagen} width="150" height="150" alt='' />
    </div>
    <div className="flex-1 items-center p-2">
      <p className='mb-1 text-xl text-black font-bold'> {nombre} </p>
      <p className='mb-1 text-sm text-black font-semibold uppercase'> {descripcion} </p>
      <p className='mb-1 text-black font-bold text-xl'>Unidades: {stock} </p>
      <p className='mb-1 text-black font-bold text-xl'>$ {precio.toLocaleString()} </p>
    </div>

*/