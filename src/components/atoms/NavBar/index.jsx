import React,{ useState } from 'react'
import {Link} from 'react-router-dom';
import './NavBar.css';
// import imgLOGO from './images/BFFs-LOGO-SB.png';  
import imgLOGO from './images/BFF_LOGO_Negro.png';  
import { CartWidget } from '../Widget/Cart';

const NavBar = (props) => {

    // const cantidad ='4';
    const [inputSearch, setInputSearch] = useState('')
return (

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
                        <Link className="nav-link" to="/">About US</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Store">Store</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Ofertas</Link>
                    </li> 
                </ul>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={event => setInputSearch(event.target.value)}   />
                    <Link className="btn btn-outline-success-poke" to={`/Store/${inputSearch}`}>Store</Link>
                </form>
            </div>
            {/* <Link className="navbar-brand  mx-auto" to="/Store"> */}
                <CartWidget />
            {/* </Link> */}
        </div>
    </nav>
</div>
);
};

export default NavBar;