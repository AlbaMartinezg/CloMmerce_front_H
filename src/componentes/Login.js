import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import crud from '../conexiones/crud';
import swal from "sweetalert";

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
        <main className="container mx-auto mt-5 md:mt-20 p-5 md:flex md:justify-center"> 
            <div className="md:w-2/3 lg:w-2/5">                
                <h1 
                className="inline bg-gradient-to-r from-indigo-200 via-violet-700 to-indigo-200 bg-clip-text font-display text-5xl tracking-tight text-transparent ">
                    Clo-Mmerce <br/>
                    Iniciar Sesión 2</h1>
                <form 
                onSubmit={onSubmit} 
                className="my-10 bg-white shadow rounded-lg p-10">
                    
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
                        className="bg-violet-600 mb-5 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-violet-900 transition-colors"/>
                     <label 
                        className ="text-gray-600 block text-lx font-bold">¿No tienes una cuenta?</label>
                    <Link  
                        className="block text-center my-5 "
                        to ={"/crear-cuenta"}>
                        Registrate
                    </Link> 
                </form>
            </div> 
        </main>               
    );
}

export default Login;