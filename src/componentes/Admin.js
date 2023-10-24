import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import crud from "../conexiones/crud";
import Header from "./Header";
import Sidebar from "./Sidebar";
import swal from 'sweetalert';

const Admin = () => {
  
  const navigate = useNavigate();

  

  useEffect(() =>{
    const autenticarUsuario = async () =>{
      const token = localStorage.getItem('token')
      //console.log(token)
      if(!token){
        navigate("/login");
      }

    }
    autenticarUsuario()
  },[navigate]);//[] se ejecuta solo una vez
  
  
  const [categoria, setCategoria] = useState([]);
  
  const cargarCategorias = async () => {
    const response = await crud.GET(`/api/categorias`);
    console.log(response);
    setCategoria(response.categoria);
  }

  useEffect(() => {
    cargarCategorias();
  },[]);


  const borrarCategoria = async (e, idCategoria) => {

    swal({
      title: "Estas seguro de eliminar esta categoria?",
      text: "Una vez eliminado, no podra recuperar esta categoria",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        e.preventDefault();
        const response = crud.DELETE(`/api/categorias/${idCategoria}`);

        //console.log(response.msg);
        const mensaje = response.msg;
        if(response){
          swal("Tu categoria a sido eliminada correctamente", {
            icon: "success",
          });
        }
        cargarCategorias();
      } else {
        swal("Se canceló la acción");
      }
    });
   
  }

  const actualizarCategoria = async ( idCategoria) =>{

   
    
    navigate(`/actualizar-categoria/${idCategoria}`)

  }  

  const crearProductos = async (idCategoria) =>{
    navigate(`/new-product/${idCategoria}`);
  }

  return (
    <>
    <Header/>
      <div className="md:flex md:min-h-screen">
        <Sidebar/>
        <main className="flex-1">
          <div className="mt-10 flex justify-center">
              <h1 className="inline bg-gradient-to-r from-indigo-200 via-violet-700 to-indigo-200 bg-clip-text mb-3 font-display text-5xl tracking-tight text-transparent">
              Lista de Categorias
              </h1>                        
          </div> <br/>
          <div className="flex-1 p-4">
            <div className="flex justify-center p-3">
            <table>
              <thead className="bg-purple-700 mt-10 font-display" >        
                <tr className="text-center text-white uppercase font-bold ">
                  <th className="py-2">Imagen</th>
                  <th className="py-2">Nombre</th>
                  <th className="py-2">ID</th>
                  <th className="py-2">Opciones</th>
                </tr>
          
              </thead>

              <tbody className="bg-white">
                
                {            
                  categoria.map(
                    item => 
                    <tr key={item._id}>
                      <td className="p-4"><img src={item.imagen} width="150" height="150"></img></td>
                      <td className="p-4">{item.nombre}</td>
                      <td className="p-4">{item._id}</td>
                      <td>
                      <input 
                      type="submit"
                      value="Eliminar"
                      className="bg-orange-600 mb-5 w-full py-2 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-indigo-300 transition-colors"
                    onClick={(e) => borrarCategoria(e, item._id)}
                  />
                  <input 
                      type="submit"
                      value="Actualizar"
                      className="bg-indigo-600 mb-5 w-full py-4 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-indigo-300 transition-colors"
                      onClick={(e) => actualizarCategoria(item._id)}
                  />
                  <input 
                      type="submit"
                      value="Crear Producto"
                      className="bg-teal-700 mb-5 w-full py-4 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-indigo-300 transition-colors"
                      onClick={(e) => crearProductos(item._id)}
                  />
                      </td>
                    </tr>
                  )
                }

              </tbody>

            </table>
            </div>
          </div>
        </main>
      </div>
    </>
    );
}

export default Admin;