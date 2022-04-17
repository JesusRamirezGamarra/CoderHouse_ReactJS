import React, { Fragment } from "react";
import NavBar from './Assets/components/NavBar'
import BannerContainer from "./Assets/components/Banner";

import logo from './images/logo.svg';
import './css/App.css';

export function App() {

    return (
        <>
            <div className="App">
                HOLA
                <BannerContainer />
                <NavBar />
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