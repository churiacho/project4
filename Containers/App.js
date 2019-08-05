import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Notfound from './Notfound';
import Footer from '../Components/Footer.js';
import './App.css';
import { Button, Nav, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



function App() {
  return (
    <div className="App">
      <Navbar bg="dark" className="justify-content-between" expand='md'>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className='mr-auto'>
            <Nav.Item>
              <NavLink to="/" className="icon">
                <FontAwesomeIcon icon={['fas', 'seedling']} size='2x' />
              </NavLink>
            </Nav.Item>

          </Nav>

          <Nav className="justify-content-end" fill>
            <Nav.Item>
              <Button variant="outline-light" className="p-0 m-2">
                <NavLink className="nlink" to="/">Julia Jo</NavLink>
              </Button>
            </Nav.Item>

            <Nav.Item>
              <Button variant="outline-light" className="p-0 m-2">
                <NavLink className="nlink" to="/about">About</NavLink>
              </Button>
            </Nav.Item>

            <Nav.Item>
              <Button variant="outline-light" className="p-0 m-2">
                <NavLink className="nlink" to="/contact">Contact</NavLink>
              </Button>
            </Nav.Item>

          </Nav>


        </Navbar.Collapse>

      </Navbar>
  
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route component={Notfound} />
      </Switch>  
      <Footer />    
    </div>

  );
}

export default App;
