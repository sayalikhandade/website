import React from "react";
import Sdata from "./Sdata";
const Services = () =>{
  return(
    <React.Fragment>
    <p className="heading"> Welcome to Services</p><br/><br/>
    <div className="container">
        <div className="row gy-3">
    
    { Sdata.map((event) =>{
      return(
        
        <div className="col-4">
        <div className="card">
    <img src={event.imgsrc} className="card-img-top" alt="Random image" height="200px"/>
    <div className="card-body">
      <p className="card-text">{event.imgname}</p>
    </div>
  </div>
  </div>
    
      );
    }

    ) }

    </div>
    </div>
  
    </React.Fragment>
  ); 
}

export default Services;