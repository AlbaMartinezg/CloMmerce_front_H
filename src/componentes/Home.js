import React, {useEffect, useState} from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'tailwindcss/tailwind.css'; // Importamos Tailwind CSS
import noche from "./images/sabanas/cubrelecholuna.jpeg"
import cubrelechonegro from "./images/sabanas/cubrelechonegro.jpeg"
import mariposa from "./images/sabanas/ya/mariposas.jpg"
import Navbar from "./Navbar";
import Footer from './Footer';
import crud from '../../src/conexiones/crud';


const Home = () => {

  const [categoria, setCategoria] = useState([]);

  const cargarCategorias = async () =>{
    const response = await crud.GET(`/api/categorias`);
    setCategoria(response.categoria);
  }
  useEffect(()=>{
    cargarCategorias();
  },[]);

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
    <div className="w-full max-w-3xl mx-auto py-5">
      <Carousel showArrows={true} showThumbs={false} infiniteLoop={true}>
        <div className="relative h-50"> <img src={noche}/> </div>
         <div className="relative">
          <p className="legend absolute bottom-2 left-2 text-white bg-fuchsia bg-opacity-50 p-2">
            Sabanas Noche de luna confort para un buen sueño
          </p>
          <img src={cubrelechonegro} />
          <p className="legend absolute bottom-2 left-2 text-white bg-black bg-opacity-50 p-2">
          Cubrelechos máximo confort para tu hogar
          </p>
        </div>
        <div className="relative">
          <img src={mariposa} />
          <p className="legend absolute bottom-2 left-2 text-white bg-black bg-opacity-50 p-2">
            Sabanas la magia de tu sueño
          </p>
        </div>
      </Carousel>
    </div>
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
                className="relative h-80 w-56 flex-col overflow-hidden p-5 hover:opacity-75 xl:w-auto rounded-lg"
              >
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
                    <p className="text-center text-xl font-semibold text-black">{product.precio}</p>
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

export default Home;