import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from "./componentes/Login";
import CrearCuenta from "./componentes/CrearCuenta";
import Admin from './componentes/Admin';
import Home from './componentes/Home';
import CrearCategoria from './componentes/categorias/CrearCategoria';
import ActualizarCategoria from './componentes/categorias/ActualizarCategoria';
import HomeProductos from './componentes/productos/HomeProductos';
import CrearProductos from './componentes/productos/CrearProductos';
import Layout from './componentes/Layout';
import Navbar from './componentes/Navbar'


function App(){
  return (
    <Router>
      <Routes>
        <Route path="/" exact element= {<Home/>}/>
        <Route path="/login" exact element= {<Login/>}/>
        <Route path="/crear-cuenta" exact element= {<CrearCuenta/>}/>
        <Route path="/admin" exact element= {<Admin/>}/>
        <Route path="/crear-categoria" exact element= {<CrearCategoria/>}/>
        <Route path="/actualizar-categoria/:idCategoria" exact element= {<ActualizarCategoria/>}/>
        <Route path="/home-productos/:idCategoria" exact element= {<HomeProductos/>}/>
        <Route path="/crear-producto/:idCategoria" exact element= {<CrearProductos/>}/>
        <Route path="/layout" exact element= {<Layout/>}/>
        <Route path="/navbar" exact element= {<Navbar/>}/>
      </Routes>
    </Router>
  );
}


export default App;