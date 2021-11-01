import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import './App.css';
import Home from './Home';
import About from './About';
import Service from './Service';
import Contact from './Contact';
import Navbar from './Navbar';
import Blog from './Blog';
import { Switch,Route,Redirect } from 'react-router';
import Cart from './cartScreen.jsx';
import ProductScreen from './screen/ProductScreen.js';
import Signup from './components/Signup.js';
import Login from './components/Login.js';
import NoteState from './context/notes/NoteState';
import Blog1 from './Blog-1.jsx';
import Blog2 from './Blog-2.jsx';
import Blog3 from './Blog-3.jsx';
import NotesHome from './NotesHome.js';
import Alert  from './components/Alert';

const App=()=>{
  
    
  return (
      <div>
        <NoteState>
        <Navbar />
        <Alert message="contents" />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/cart/:id?" component={Cart} />
          <Route exact path="/about" component={About} />
          <Route exact path="/product/:id" component={ProductScreen} />
          <Route exact path="/service" component={Service} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/login">
                <Login />
              </Route>
              <Route exact path="/signup">
                <Signup />
              </Route>
              <Route exact path="/home" component={NotesHome} />
              <Route exact path="/blog1" component={Blog1} />
              <Route exact path="/blog2" component={Blog2} />
              <Route exact path="/blog3" component={Blog3} />
          <Route exact path="/contact" component={Contact} />
        <Redirect to='/'></Redirect>  
        </Switch>
        </NoteState>
      </div>
  );
};
export default App;



