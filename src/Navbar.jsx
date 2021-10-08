import React from 'react';
import Darkmode from './Darkmode.jsx';
import { NavLink } from 'react-router-dom';


const Navbar = (prop) => {
    return (
        <>
        <div className="col-12 max-auto">
 

            <div className="row">
            <div className="container-fliud "> 

                
            <nav className="navbar navbar-expand-lg navbar-light  bg-light"  >
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">
                    KAUSTUBH</NavLink>
                <button className="navbar-toggler" type="button" 
                data-bs-toggle="collapse"
                 data-bs-target="#navbarSupportedContent" 
                 aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                   aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon">

                    </span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto mb-2 mb-lg-0 ">
                        <li className="nav-item">
                            <NavLink activeClassname="menu_active" exact className="nav-link active" aria-current="page" to="/">Home</NavLink>
                        </li>
                        
                        <li className="nav-item ">
                            <NavLink activeClassname="menu_active" exact className="nav-link" to="/about">about</NavLink>
                        </li>
                        <li className="nav-item ">
                            <NavLink activeClassname="menu_active" exact className="nav-link" to="/service">service</NavLink>
                        </li>
                        <li className="nav-item ">
                            <NavLink activeClassname="menu_active" exact className="nav-link" to="/blog">blog</NavLink>
                        </li>
                        <li className="nav-item "> 
                            <NavLink activeClassname="menu_active" exact className="nav-link" to="/contact">contact</NavLink>
                        </li>
                        
                        
                    </ul>
                    
    </div>
                </div>
                <span style={{float:"right"}}><Darkmode/></span>
</nav>

           
            
            </div>
            </div>
            </div>
           
        </>

    );
};
export default Navbar;