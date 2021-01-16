import React from "react";
import { NavLink } from "react-router-dom";
import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
const Navbar = () =>{
    return(
        
        <nav className="navbar navbar-expand-lg navbar-light bg-secondary ">
        <div className="container-fluid">
          <h1 className="navbar-brand text-light">Logistics Enhanced Operations</h1>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto mb-2 mb-lg-4">
              <li className="nav-item">
                <NavLink  exact to="/about" activeclassName="menu_active" className="nav-link text-light" aria-current="page"> <a>About </a> </NavLink> 
              </li>
              <li className="nav-item">
              <NavLink  exact   to="/services" activeclassName="menu_active" className="nav-link text-light" aria-current="page" > <a>Services </a></NavLink> 
              </li>
              
              <li className="nav-item">
              <NavLink  exact  to="/contact" activeclassName="menu_active" className="nav-link text-light" aria-current="page" > <a>Contact </a></NavLink> 
              </li>
            </ul>
            
          </div>
        </div>
      </nav>
    );
}

export default Navbar;