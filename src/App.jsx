import React, { Fragment } from "react";
import NavBar from './components/atoms/NavBar'
import {BannerContainer} from "./containers/BannerContainer";
import {ItemListContainer} from './containers/ItemListContainer';
import './App.css';

export function App() {

    const greeting = 'SALUDO !!!'
    return (
        <>
            <div className="App">
                HOLA
                <BannerContainer />
                <NavBar />
                <ItemListContainer greeting={greeting}  />
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