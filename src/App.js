import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Carousel from 'react-bootstrap/Carousel';
import './App.css';
import Home from './Home';
import About from './About';
import Service from './Service';
import Contact from './Contact';
import Navbar from './Navbar';
import Blog from './Blog';
import { Switch,Route,Redirect } from 'react-router';


const App=()=>{
  
    
  return (
      <div>
        
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
        
          <Route exact path="/about" component={About} />
          
          <Route exact path="/service" component={Service} />
          <Route exact path="/blog" component={Blog} />
          
          <Route exact path="/contact" component={Contact} />
        <Redirect to='/'></Redirect>  
        </Switch>
       
      </div>
  );
};
export default App;



