import React,{ useState } from 'react'
import {Link} from 'react-router-dom';
import './NavBar.css';
import imgLOGO from './images/BFFs-LOGO-SB.png';  
import { CartWidget } from '../Widget/Cart';

const NavBar = (props) => {

    const cantidad ='4';
    const [inputSearch, setInputSearch] = useState('')
return (
    // <div>
    //   <ul className='nav'>
    //       <a href="#">Superheroes</a>
    //       <a href="#">Drama</a>
    //       <a href="#">Accion</a>
    //   </ul>
    // </div>
    // navbar-dark bg-dark
<div>
    <nav className="navbar navbar-expand-lg  bg-poke">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">
                <img src={imgLOGO} height="42" alt="BFFs - Best Friend Forever" />  POKE-eCommerce
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" 
                    aria-controls="navbarSupportedContent" aria-expanded="false"  aria-label="Toggle navigation" >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mx-auto">
                <li className="nav-item">
                    <Link className="nav-link" to='/' >Home</Link>
                </li>
                <li className="nav-item">
                    <a className="nav-link" to="/hombres">About US</a>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/Store">Store</Link>
                </li>
                {/* <li className="nav-item">
                    <a className="nav-link" to="/boys">Category</a>
                </li> */}
                <li className="nav-item">
                    <a className="nav-link" to="/girls">Ofertas</a>
                </li> 
                </ul>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={event => setInputSearch(event.target.value)}   />
                    {/* <button className="btn btn-outline-success-poke" type="submit">Search</button> */}
                    <Link className="btn btn-outline-success-poke" to={`/Store/${inputSearch}`}>Store</Link>
                </form>
            </div>
            <a className="navbar-brand  mx-auto" to="/">
                <CartWidget cantidad={cantidad} />
            </a>
        </div>
    </nav>
</div>
);
};

export default NavBar;