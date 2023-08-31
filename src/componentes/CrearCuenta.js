import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import crud from '../conexiones/crud';
import NavLogo from "./navlogo";
import Navbar from "./Navbar";

const CrearCuenta = ()=>{
    const navigate = useNavigate();
    const [usuario, setUsuario] = useState({
        nombre:'',
        email:'',
        password:'',
        confirmar:''
    });

    const {nombre, email, password, confirmar} = usuario;

    const onChange = (e)=>{
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    }

    const crearCuenta = async()=>{
        //los dos password deben ser iguales
        // instalamos la librería npm i sweetalert para las ventanas emergentes de alertas y el llamado de la librería se realiza con import swal from 'sweetalert'
        if(password!== confirmar){
            console.log('Diferentes');

            const mensaje = "Las contraseñas son diferentes";
            swal ({
                title:'Error',
                text: mensaje,
                icon:'error',
                buttons:{
                    confirm:{
                        test:'OK',
                        value: true,
                        visible: true,
                        className: 'btn btn-danger',
                        closeModal: true
                    }
                }
            })

        }else{
            const data ={
                nombre: usuario.nombre,
                email: usuario.email,
                password:usuario.password
            }
            console.log(data);
            const response = await crud.POST(`/api/usuarios`, data);
            const mensaje = response.msg;
            //console.log(mensaje);
            if(mensaje==="El usuario ya existe"){
                const mensaje ="El usuario ya existe"
                swal ({
                    title:'Error',
                    text: mensaje,
                    icon:'error',
                    buttons:{
                        confirm:{
                            test:'OK',
                            value: true,
                            visible: true,
                            className: 'btn btn-danger',
                            closeModal: true
                        }
                    }
                });
            }else{
                const mensaje ="El usuario ha sido creado correctamente"
                swal ({
                    title:'Información',
                    text: mensaje,
                    icon:'success',
                    buttons:{
                        confirm:{
                            test:'OK',
                            value: true,
                            visible: true,
                            className: 'btn btn-primary',
                            closeModal: true
                        }
                    }
                });

                setUsuario({
                    nombre:'',
                    email:'',
                    password:'',
                    confirmar:''
                })
                //REDIRECCIONAR NUEVAMENTE A LA PÁGINA DE LOGIN
                navigate("/");
            };
        }
    } 

    const onSubmit = (e)=>{
        e.preventDefault();
        crearCuenta();
    }

    return(

        <>     
        <Navbar/>
      
        <main className=" flex-1 bg-gray-300 mx-auto p-3 md:flex md:justify-center"> 
            <div className="md:w-2/3 lg:w-2/5">  
                <form 
                className="my-10 bg-white shadow rounded-lg p-7"
                onSubmit={onSubmit}
                >
                    <div className=" text-center ">
                            <p className="bg-indigo-900 mr-1 w-15 py-3 text-center text-white font-bold text-4xl  hover:cursor-pointer hover:bg-emerald-900 transition-colors rounded-xl ">               
                        Crear Cuenta</p>
                    </div>          
                    <div className="my-5">
                        <label className="uppercase text-gray-600 block text-lx font-bold">Nombre</label>
                        <input 
                        type="nombre"
                        id="nombre"
                        name="nombre"
                        placeholder="Ingrese su nombre"
                        className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
                        value={nombre}
                        onChange={onChange}
                        /><br/><br/>
                        <label className="uppercase text-gray-600 block text-lx font-bold">Email</label>
                        <input 
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email de Registro"
                        className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
                        value={email}
                        onChange={onChange}
                        /><br/><br/>
                
                        <label className="uppercase text-gray-600 block text-lx font-bold">Password</label>
                        <input 
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Password de Registro"
                        className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
                        value={password}
                        onChange={onChange}
                        /><br/><br/>
                        
                        <label className="uppercase text-gray-600 block text-lx font-bold">Confirme su Password</label>
                        <input 
                        type="password"
                        id="confirmar"
                        name="confirmar"
                        placeholder="Confirmación Password"
                        className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
                        value={confirmar}
                        onChange={onChange}
                        />
                    </div>
                    
                    <div flex-1>
                        <input 
                        type="submit"
                        value="Registrar Usuario"
                        className="bg-indigo-800 mb-5 w-full py-3 text-white text-2xl font-bold rounded-xl hover:cursor-pointer hover:bg-violet-500 transition-colors"
                        />

                    </div>
                    <div  flex-1>
                        <Link
                            className="flex justify-center bg-indigo-700 mb-5 w-full h-10  text-white font-light text-2xl rounded-xl hover:cursor-pointer hover:bg-indigo-900 transition-colors"
                            to={"/"}
                            >
                        Regresar al Inicio
                        </Link>
                    </div> 
                </form>
            </div> 
        </main>
        </>    
    );
}
  
export default CrearCuenta;