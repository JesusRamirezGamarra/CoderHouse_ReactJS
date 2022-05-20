import './App.css';
import React, { useEffect }  from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/atoms/NavBar'
import { BannerContainer } from "./containers/BannerContainer";
import { ItemListContainer } from './containers/ItemListContainer';
import { ItemDetailContainer } from './containers/ItemDetailContainer';
import { Footer } from './components/atoms/Footer';

import { Page404 } from "./pages/error/page404";
import { Home } from './pages/home';
import { Cart } from './pages/cart';
import { Payment } from './pages/payment';



import { CartContextProvider } from "./context/CartContext";


export function App() {

    useEffect(() => {
        document.title = "BFFs eCommerce";
    }, []);

    return (
        <>
            <CartContextProvider>
                {/* <div className="App"> */}
                <div className="App min-h-screen flex flex-col ">                    
                <BrowserRouter>      
                    <BannerContainer />
                    <header>
                        <NavBar />
                    </header>
                    <Routes>
                        <Route path="/payment" element={<Payment/>} />
                        <Route path="*" element={<Page404 />} />
                        <Route path="/cart" element={<Cart/>}  /> 
                        <Route path="/" element={<Home/>}  /> 
                        <Route path="/home" element={<Home/>}  /> 
                        <Route path="/store" element={<ItemListContainer/>}  /> 
                        <Route path="/store/:category" element={<ItemListContainer/>}  /> 
                        <Route path="/store/detail/:itemId" element={<ItemDetailContainer/>}  /> 
                    </Routes>                
                <Footer />
                </BrowserRouter>                
                </div>
            </CartContextProvider>
        </>
    );
}