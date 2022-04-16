import React, { Fragment } from "react";
import NavBar from './Assets/components/NavBar'

import logo from './images/logo.svg';
import './css/App.css';

export function App() {

    return (
        <Fragment>
            <div className="App">
                HOLA
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
        </Fragment>
    );
}