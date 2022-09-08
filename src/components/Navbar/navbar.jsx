import React from 'react';
import { FcSportsMode } from "react-icons/fc";
import CartWidget from './cartWidget'
import {Link} from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
    return (
        <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <Link to='/' id='brand'><FcSportsMode/>Deportienda</Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
              </button>
            <div className="collapse navbar-collapse" id="navbarColor03">
              <ul className="navbar-nav me-auto">
                <li className="nav-item">
                  <a className="nav-link" href="#">Contacto</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Productos</a>
                <div className="dropdown-menu">
                <Link to={'/category/remera'}>Remeras</Link> <br />
                <Link to={'/category/campera'}>Camperas</Link> <br />
                <Link to={'/category/botines'}>Botines</Link>
                </div>
                </li>
              </ul>
            </div>
            <CartWidget/>
            </div>
        </nav>
    </div>
);
}

export default Navbar;