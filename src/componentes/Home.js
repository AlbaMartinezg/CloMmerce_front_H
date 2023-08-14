import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'tailwindcss/tailwind.css'; // Importamos Tailwind CSS
import noche from "./images/sabanas/cubrelecholuna.jpeg"
import cubrelechonegro from "./images/sabanas/cubrelechonegro.jpeg"
import mariposa from "./images/sabanas/ya/mariposas.jpg"
import Navbar from "./Navbar";
import Footer from './Footer';

const Home = () => {
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
    <Footer/>
    </>
  );
};

export default Home;