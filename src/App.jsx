import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Services from "./Services";
import Navbar from "./Navbar";

const App = () =>{
 return(
  <React.Fragment>
  <Navbar/>
    <Switch>
    <Route exact path="/about" component={About}/>
    <Route exact path="/services" component={Services}/>
      <Route exact path="/contact" component={Contact}/>
      <Redirect to="/about" />
    </Switch>
  </React.Fragment>
 );
}

export default App;