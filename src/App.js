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
import Navbar from './componentes/Navbar'
import ViewCategorias from './componentes/categorias/ViewCategorias';
import ViewProductos from './componentes/productos/ViewProductos';
import Contactenos from './componentes/Contactenos';
import ActualizarProductos from './componentes/productos/ActualizarProductos';
import NewProduct from './componentes/productos/NewProduct';

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
        <Route path="/actualizar-producto/:idCategoria" exact element= {<ActualizarProductos/>}/>
        <Route path="/contactenos" exact element= {<Contactenos/>}/>
        <Route path="/navbar" exact element= {<Navbar/>}/>
        <Route path="/view-categorias" exact element= {<ViewCategorias/>}/>
        <Route path="/view-productos" exact element= {<ViewProductos/>}/>
        <Route path="/new-product" exact element= {<NewProduct/>}/>
      </Routes>
    </Router>
  );
}


export default App;