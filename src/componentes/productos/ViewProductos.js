import React, {useEffect, useState} from 'react';
import Footer from '../Footer';
import crud from '../../conexiones/crud';
import Navbar from '../Navbar';


const ViewProductos = () => {

  const [productos, setProductos] = useState([]);

    const cargarProductos = async () =>{
      const response = await crud.GET(`/api/productos`);
      setProductos(response.productos);
    }
    useEffect(()=>{
      cargarProductos();
    },[]);

  return (
    <>     
    <Navbar/>
      <div className="bg-gray-300">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h1 className="text-xl font-bold text-gray-900">Nuestros Productos</h1>
          <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
            {productos.map((product) => (
              <div key={product.id}>
                <div className="relative">
                  <div className="relative h-72 w-full overflow-hidden rounded-lg ">
                    <img
                      src={product.imagen}
                      alt={product.imageAlt}
                      className="h-full w-full object-cover object-center overflow-hidden p-1 hover:opacity-75"
                    />
                  </div>
                  <div className="relative mt-4">
                    <h3 className="text-center text-2xl font-bold text-gray-900">{product.nombre}</h3>
                    <p className="text-center text-xl font-semibold text-black">{product.precio.toLocaleString()}</p>
                    <p className="mt-1 text-center text-xl text-gray-500">{product.stock}</p>
                  </div>
                  <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
                    <div
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                    />
                  </div>
                </div>
                
              </div>
            ))}
          </div>
        </div>
      </div>    
    <Footer/>
    </>
  );
};

export default ViewProductos;