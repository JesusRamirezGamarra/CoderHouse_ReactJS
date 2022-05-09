import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/atoms/NavBar'
import { BannerContainer } from "./containers/BannerContainer";
import { ItemListContainer } from './containers/ItemListContainer';
import { ItemDetailContainer } from './containers/ItemDetailContainer';

import { Page404 } from "./pages/error/page404";
import { Home } from './pages/home';
import { Cart } from './pages/cart';
import './App.css';

export function App() {

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
                    <Route path="/cart" element={<Cart/>}  /> 
                    <Route path="/" element={<Home/>}  /> 
                    <Route path="/home" element={<Home/>}  /> 
                    <Route path="/store" element={<ItemListContainer/>}  /> 
                    <Route path="/store/:category" element={<ItemListContainer/>}  /> 
                    <Route path="/store/detail/:itemId" element={<ItemDetailContainer/>}  /> 
                </Routes>                
            </BrowserRouter>                
            </div>
        </>
    );
}