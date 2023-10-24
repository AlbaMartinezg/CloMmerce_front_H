import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import Header from "../Header";
import {useParams } from 'react-router-dom';
import crud from "../../conexiones/crud";
import swal from 'sweetalert';
import 'tailwindcss/tailwind.css'; // Importamos Tailwind CSS

const NewProduct = () => {
  
  const navigate = useNavigate();

  const {idCategoria} = useParams();

  const [producto, setProducto] = useState([]);
  
  const cargarProductos = async () => {
    const response = await crud.GET(`/api/productos/${idCategoria}`);
    console.log(response);
    setProducto(response.producto);
  }

  useEffect(() => {
    cargarProductos();
  },[]);


  const borrarProducto = async (e, idCategoria) => {

    swal({
      title: "Estas seguro de eliminar este producto?",
      text: "Una vez eliminado, no podra recuperar la información",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        e.preventDefault();
        const response = crud.DELETE(`/api/productos/${idCategoria}`);

        //console.log(response.msg);
        const mensaje = response.msg;
        if(response){
          swal("El producto ha sido eliminado correctamente", {
            icon: "success",
          });
        }
        cargarProductos();
      } else {
        swal("Se canceló la acción");
      }
    });
   
  }

  const actualizarProducto = async ( idCategoria) =>{
    
    navigate(`/actualizar-producto/${idCategoria}`)

  }  


  return (
        <>
        <Header/>
            <div className="md:flex md:min-h-screen">
                <main className="flex-1">
                    <div className="mt-10 flex justify-center">
                        <h1 className="inline bg-gradient-to-r from-indigo-200 via-violet-700 to-indigo-200 bg-clip-text mb-3 font-display text-5xl tracking-tight text-transparent">
                        Lista de Productos
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
                                        <th className='mb-1 text-sm text-gray-50 uppercase '>Descripción</th>
                                        <th className='mb-1 text-gray-50'>Stock</th>
                                        <th className='mb-1  text-gray-50'>Precio</th>
                                        <th className="py-2">Opciones</th>
                                    </tr>    
                                </thead>

                                <tbody className="bg-white">                        
                                    {            
                                        producto.map( item => 
                                            <tr key={item._id}>
                                                <td className="p-4"><img src={item.imagen} width="150" height="150"></img></td>
                                                <td className="p-4">{item.nombre}</td>
                                                <td className="p-4">{item._id}</td>
                                                <td className="p-4">{item.descripcion}</td>
                                                <td className="p-4">{item.stock}</td>
                                                <td className="p-4">{item.precio.toLocaleString()}</td>
                                                <td>
                                                    <input 
                                                        type="submit"
                                                        value="Eliminar"
                                                        className="bg-orange-600 mb-5 w-full py-2 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-indigo-300 transition-colors"
                                                        onClick={(e) => borrarProducto(e, item._id)}
                                                    />
                                                    <input 
                                                        type="submit"
                                                        value="Actualizar"
                                                        className="bg-indigo-600 mb-5 w-full py-4 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-indigo-300 transition-colors"
                                                        onClick={(e) => actualizarProducto(item._id)}
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

export default NewProduct;