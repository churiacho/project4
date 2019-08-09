import React, { Component } from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import { Jumbotron, Nav } from 'react-bootstrap';
import Home from '../../Containers/Home/Home';
import About from '../../Containers/About';
import Contact from '../../Containers/Contact';
import Notfound from '../../Containers/Notfound';
import Scura from '../../Containers/Scura/Scura';
import './NavFull.css';



class NavFull extends Component {
  
  render() {

    return (

      <div>

        <Jumbotron fluid id="overlay">
          <Nav>
            <Nav.Item className="nback my-3">
              <Nav.Link>
                <NavLink to={this.props.to1} className="nlink"><p className="display-4">{this.props.link1}</p></NavLink>            
              </Nav.Link>           
            </Nav.Item>        

            <Nav.Item className="nback my-3">
              <NavLink to={this.props.to2} className="nlink"><p className="display-4">{this.props.link2}</p></NavLink>            
            </Nav.Item>       

            <Nav.Item className="nback my-3">
              <NavLink to={this.props.to3} className="nlink"><p className="display-4">{this.props.link3}</p></NavLink>            
            </Nav.Item>           
          </Nav>



        </Jumbotron>

      </div>

    )
  }
}


export default NavFull;

