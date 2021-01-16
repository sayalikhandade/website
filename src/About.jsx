import React from "react";
import "./index.css";
import web from "./Images/fedex-home-del.svg";
import { NavLink } from "react-router-dom";
const About = () =>{
  return(
    <div className="container">
    <p className="heading"> Welcome to LEO</p><br/><br/>
    <div className="row d-grid gap-3">
    <div className="p-3 col top-50 translate-middle ">
      
      <p> LEO is Logistics Enhanced Operations which completely works on the pickup and delivery scenarios of FedEx Application.
          It utilises advanced devices. LEO has packages, sort, admin, transit, timecard applications which makes management of diffrent activities easier.
          For more information, click button below.
      </p>
      <br/>
      <button className="btn btn-outline-primary nav-link"><NavLink exact to="/services">Get Started</NavLink></button>
    </div>
    <div className="col">
    <img src={web} height="100%" width="100%" alt="fedex Image"/>
    </div>
    </div>
    </div>
    
  );

}

export default About;