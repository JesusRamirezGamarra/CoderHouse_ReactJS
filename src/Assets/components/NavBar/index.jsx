import React from 'react';
import {Link} from 'react-router-dom';
import './css/NavBar.css';
import imgLOGO from './images/BFFs-LOGO-SB.png';  


const NavBar = (props) => {
  return (
    // <div>
    //   <ul className='nav'>
    //       <a href="#">Superheroes</a>
    //       <a href="#">Drama</a>
    //       <a href="#">Accion</a>
    //   </ul>
    // </div>
  <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
              <a className="navbar-brand" to="/">
                  <img src={imgLOGO} height="42" alt="Tu Web CO" />  e-Commerce
              </a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" 
                      aria-controls="navbarSupportedContent" aria-expanded="false"  aria-label="Toggle navigation" >
                  <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav mx-auto">
                    <li className="nav-item">
                        <a className="nav-link" to='/' >Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" to="/hombres">Hombres</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" to="/mujeres">Mujeres</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" to="/boys">Niños</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" to="/girls">Niñas</a>
                    </li> 
                  </ul>
                  <form className="d-flex">
                      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                      <button className="btn btn-outline-success" type="submit">Search</button>
                  </form>
              </div>
              {/* <a className="navbar-brand  mx-auto" to="/">
                  <img src={imgLOGO} height="42" alt="Tu Web CO" />  e-Commerce
              </a> */}
          </div>
      </nav>
  </div>



  );
};

export default NavBar;