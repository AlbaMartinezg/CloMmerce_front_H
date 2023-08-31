import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import crud from '../conexiones/crud';
import swal from "sweetalert";
import NavLogo from "./navlogo";
import Navbar from "./Navbar";

const Login = () =>{
    const navigate = useNavigate();

    const [usuario, setUsuario] = useState({
        email:'',
        password:''
    });

    const { email, password} = usuario;

    const onChange = (e)=>{
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    };
       
    const ingresarCuenta = async () =>{
        // los dos password deben ser iguales
        const data = {
          email: usuario.email,
          password: usuario.password
        }
        console.log(data);
        const response = await crud.POST(`/api/auth`, data);
        const mensaje = response.msg;
          //console.log(mensaje);
          if(mensaje === "El usuario NO existe"){
            const mensaje = "El usuario NO existe";
          swal({
            title:'Error',
            text: mensaje,
            icon: 'error',
            buttons:{
              confirm:{
                text: 'OK',
                value: true,
                visible: true,
                className: 'btn btn-danger',
                closeModal: true
              }
            }
          });
          }else if(mensaje === "¡El usuario o la contraseña son incorrectos!. Intentalo de nuevo!"){
            const mensaje = "¡El usuario o la contraseña son incorrectos!. Intentalo de nuevo!";
            swal({
              title:'Error',
              text: mensaje,
              icon: 'error',
              buttons:{
                confirm:{
                  text: 'OK',
                  value: true,
                  visible: true,
                  className: 'btn btn-danger',
                  closeModal: true
                }
              }
            });
    
          }else{
            const jwt = response.token;
    
            //guardar la informacion en el localStorage
            localStorage.setItem('token', jwt);
            
            //redireccionar nuevamente a la pagina de login
            navigate("/admin");
          }
      };

      const onSubmit = (e) =>{
        e.preventDefault();
        ingresarCuenta();
      }    
    
    return(
        //la siguiente instrucción es para hacerlo responsive //container mx-auto mt-5 md:mt-20
        // PARA BUSCAR DEGRADES EN TAILWIND Backgrounds // Gradient Color Stops//
        //https://tailwindcss.com/docs/gradient-color-stops
        <>     
        <Navbar/>
          <main className=" flex-1 bg-gray-300 mx-auto p-3 sm: flex  justify-center"> 
          <div className="md:w-2/3 lg:w-2/5">             
          <form 
          onSubmit={onSubmit} 
          className="my-10 bg-white shadow rounded-lg p-10">
            <div className=" text-center  pt-5">
              <p className="bg-violet-900 mr-1 w-15 py-3 p-2 text-center text-white font-light text-4xl hover:cursor-pointer hover:bg-slate-700 transition-colors rounded-xl">               
                Iniciar Sesión</p>
            </div>         
              
            <div className="my-5">
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
            </div>    

            <input 
                type="submit" 
                placeholder="Iniciar Sesión" 
                className="bg-violet-700 mb-5 w-full py-3 text-white uppercase font-bold rounded-xl hover:cursor-pointer hover:bg-violet-900 transition-colors"/>

              <label 
                className ="text-gray-600 block text-2xl font-bold p-6">¿No tienes una cuenta?</label> 

            <div className="flex justify-center">

              <Link  
                className="bg-violet-600 mr-6 w-50 py-3 px-7 text-white uppercase font-bold rounded-xl hover:cursor-pointer hover:bg-violet-900 transition-colors p-5"
                to ={"/crear-cuenta"}>
                Registrate
              </Link> 

              <Link  
                  className="bg-violet-500 mx-5 w-50 py-3 px-10 text-white uppercase font-bold rounded-xl hover:cursor-pointer hover:bg-violet-900 transition-colors "
                  to ={"/"}>
                  Salir
              </Link> 
            </div>
          </form>
          </div> 
      </main>   
    </>              
  );
}

export default Login;