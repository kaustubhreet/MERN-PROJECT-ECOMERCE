import React from 'react';
import Darkmode from './Darkmode.jsx';
import { NavLink,Link, useHistory } from 'react-router-dom';


const Navbar = () => {
 let history=useHistory();
    const handleLogout=()=>{
      localStorage.removeItem('token');
      history.push('./login');
  }
    return (
        <>
        <div className="col-12 max-auto">
 

            <div className="row">
            <div className="container-fliud "> 

                
            <nav className="navbar navbar-expand-lg navbar-light  bg-light"  >
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">
                    DEVELOPERS</NavLink>
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
                            <NavLink activeClassname="menu_active" exact className="nav-link" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item ">
                            <NavLink activeClassname="menu_active" exact className="nav-link" to="/service">Service</NavLink>
                        </li>
                        <li className="nav-item "> 
                            <NavLink activeClassname="menu_active" exact className="nav-link" to="/contact">Contact</NavLink>
                        </li>

                        <li className="nav-item ">
                           {/* <NavLink activeClassname="menu_active" exact className="nav-link" to="/blog"></NavLink>*/}
                      
                        <div class="dropdown">
  <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
   Blog
                    </button>
  <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
    <li><Link class="dropdown-item active" to="/blog">Blog</Link></li>
    <li><Link class="dropdown-item" to="/Blog1">Website Development</Link></li>
    <li><Link class="dropdown-item" to="/Blog2">App Development</Link></li>
    <li><Link class="dropdown-item" to="/Blog3">Software Development</Link></li>
  </ul>
</div>  </li>
                        
                       
                        
                    </ul>
                    
    </div>
                </div>
                {!localStorage.getItem('token')? <form className="d-flex"> 
                    <NavLink  className="btn btn-primary mx-1" to="/login" role="button">Login</NavLink>
                    <NavLink className="btn btn-primary mx-1" to="/Signup" role="button">Signup</NavLink>
    </form>: <button onClick={handleLogout} className="btn btn-primary">logout</button>}
                <span style={{float:"right"}}><Darkmode/></span>
</nav>

           
            
            </div>
            </div>
            </div>
           
        </>

    );
};
export default Navbar;