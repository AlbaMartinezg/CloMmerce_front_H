import React, { useEffect, useState } from "react";
import { Link, useNavigate} from 'react-router-dom';
import crud from '../conexiones/crud';
import Navbar from "./Navbar";
import Footer from "./Footer";
import swal from "sweetalert";


const Contactenos = () =>{

  const navigate = useNavigate();

  const [contacto, setContacto] = useState({
      nombre:'',
      email:'',
      telefono:'',
      mensaje:''
  });

  const { nombre, email, telefono, mensaje} = contacto;

  const onChange = (e)=>{
      setContacto({
          ...contacto,
          [e.target.name]: e.target.value
      })
  };
  
  const enviarMensaje = async () =>{
    const data = {
      nombre: contacto.nombre,
      email: contacto.email,
      telefono: contacto.telefono,
      mensaje: contacto.mensaje
    
    }
      //redireccionar nuevamente a la pagina de home
    navigate(`/`);

   //console.log(data);
   const response = await crud.POST(`/api/contactenos`, data);
   //const mensaje = response.msg;
   const mensaje1 = "El mensaje fue enviado correctamente";
    swal({
      title:'Información',
      text: mensaje1,
      icon: 'success',
      buttons:{
        confirm:{
          text: 'OK',
          value: true,
          visible: true,
          className: 'btn btn-primary',
          closeModal: true
        }
      }
    });   
  };

  const onSubmit = (e) =>{
    e.preventDefault();
    enviarMensaje();
    
  }

    return(  
      <>     
      <Navbar/>
      <main className=" flex-1 bg-gray-300 mx-auto p-3 sm: flex  justify-center"> 
          <div className="md:w-2/3 lg:w-2/5">             
          <form 
          action="/send-email"
          method="POST"
          onSubmit={onSubmit} 
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
                <textarea 
                type="text"
                id="mensaje"
                name="mensaje"
                placeholder="Digite el mensaje"
                className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
                value={mensaje}
                onChange={onChange}
                /><br/><br/>
            </div>    

            <input 
                type="submit" 
                placeholder="Enviar" 
                className="bg-violet-700 mb-5 w-full py-3 text-white uppercase 
                font-bold rounded-xl hover:cursor-pointer hover:bg-violet-900 transition-colors"/>


            
          </form>
          </div> 
      </main>         
    <Footer/>
    </>             
  );
}

export default Contactenos;