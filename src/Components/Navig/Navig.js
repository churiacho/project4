import React, { Component } from 'react';
import {  Nav, Navbar, Container } from 'react-bootstrap';
import { NavLink, Route, Switch } from 'react-router-dom';
import Home from '../../Containers/Home/Home';
import About from '../../Containers/About';
import Contact from '../../Containers/Contact';
import Notfound from '../../Containers/Notfound';
import Scura from '../../Containers/Scura/Scura';
import './Navig.css';


export class Navig extends Component {
  render() {
    return (
      <div>
        <Navbar id="navbar" expand='xl' variant="dark" fixed="top" collapseOnSelect>
        <Container fluid>
          <Navbar.Toggle aria-controls="overlay-menu" id="toggle" data-toggle="overlay" data-target="#overlay-menu"/>
          <Navbar.Collapse id="overlay-menu" className="overlay">
            <Nav>

              <Nav.Item className="nback my-4">
                <Nav.Link eventKey="1" as={NavLink} to="/" >
                  <p className="nlink display-4">Julia</p>      
                </Nav.Link>

              </Nav.Item>

              <Nav.Item className="nback my-4">
              <Nav.Link eventKey="2" as={NavLink} to="/about" >
                  <p className="nlink display-4">About</p>      
                </Nav.Link>
              </Nav.Item>

              <Nav.Item className="nback my-4">
              <Nav.Link eventKey="3" as={NavLink} to="/contact" >
                  <p className="nlink display-4">Contact</p>      
                </Nav.Link>
              </Nav.Item>
              

              <Nav.Item className="nback my-4">
              <Nav.Link eventKey="4" as={NavLink} to="/scura" >
                  <p className="nlink display-4">Scura</p>      
                </Nav.Link>
              </Nav.Item>
              
            </Nav>
          </Navbar.Collapse>
        </Container>



      </Navbar>      

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/scura" component={Scura} />}
        <Route component={Notfound} />
      </Switch>  
      </div>
    )
  }
}

export default Navig;
