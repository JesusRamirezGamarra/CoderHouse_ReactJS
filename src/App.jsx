import React, { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/atoms/NavBar'
import { BannerContainer } from "./containers/BannerContainer";
import { ItemListContainer } from './containers/ItemListContainer';
import { ItemDetailContainer } from './containers/ItemDetailContainer';

import { Page404 } from "./pages/error/page404";
import { Home } from './pages/home';
// import { Catalog } from './pages/catalog';
// import { Detail } from './pages/detail';

import './App.css';

export function App() {

    const greeting = 'SALUDO !!!  Productos!!! ItemListContainer'
    return (
        <>
            <div className="App">
            <BrowserRouter>      
                <BannerContainer />
                <header>
                    <NavBar />
                </header>
                <Routes>
                    <Route path="*" element={<Page404 />} />
                    <Route path="/" element={<Home/>}  /> 
                    <Route path="/home" element={<Home/>}  /> 
                    <Route path="/store" element={<ItemListContainer/>}  /> 
                    <Route path="/store/:category" element={<ItemListContainer/>}  /> 
                    <Route path="/store/detail/:itemId" element={<ItemDetailContainer/>}  /> 
                    {/* <Route path="/store" components={<ItemListContainer/>}  />  */}
                    {/* <Route path="/catalogo" components={Catalogo} />
                    <Route path="/detalle" components={Detalle} />
                    <Route path="*" element={<div>404</div>} /> */}
                </Routes>                
            </BrowserRouter>                
            {/* <ItemListContainer greeting={greeting}  /> */}
                {/* <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header> */}
            </div>
        </>
    );
}