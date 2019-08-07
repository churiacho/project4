import React, { Component } from 'react';
import {  Nav, Navbar } from 'react-bootstrap';
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
      <Navbar id="navbar" expand='md' variant="dark">
        <Navbar.Brand>
        <Nav.Item>
              <NavLink to="/">
              <svg version="1.0" id="icon" xmlns="http://www.w3.org/2000/svg"
 width="50pt" height="50pt" viewBox="0 0 1271.000000 1280.000000"
 preserveAspectRatio="xMidYMid meet" >

<g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
 stroke="none">
<path d="M9229 12104 c-99 -107 -464 -364 -734 -517 -538 -304 -1038 -497
-1289 -497 l-72 0 -22 -62 c-60 -174 -92 -375 -92 -573 0 -142 18 -211 70
-260 17 -16 30 -36 30 -45 0 -32 57 -97 99 -114 173 -69 471 75 1000 482 472
363 688 586 892 923 87 144 209 411 235 512 10 41 -8 33 -88 -37 -40 -36 -73
-64 -75 -63 -1 1 20 61 47 132 27 71 46 133 44 137 -9 14 -20 9 -45 -18z"/>
<path d="M6915 9128 c-83 -9 -501 -91 -662 -129 -51 -12 -93 -26 -93 -31 0 -6
13 -27 30 -48 40 -50 95 -169 117 -250 47 -175 -1 -693 -128 -1379 -36 -194
-369 -1883 -599 -3031 -193 -967 -327 -1537 -447 -1902 -55 -169 -189 -444
-289 -593 -235 -351 -486 -535 -806 -591 -114 -20 -274 -14 -364 14 -180 56
-368 208 -442 357 -43 87 -57 171 -56 338 0 89 -4 157 -9 157 -5 0 -22 -9 -37
-20 -16 -11 -31 -16 -34 -12 -3 5 -1 45 4 88 5 44 5 83 0 88 -19 19 -308 -213
-451 -361 -240 -251 -308 -463 -215 -669 40 -87 173 -279 228 -329 59 -54 185
-139 267 -180 348 -175 829 -209 1284 -90 335 87 670 261 982 511 211 168 542
517 687 724 312 444 586 1175 792 2110 24 113 114 558 200 990 85 432 236
1195 335 1697 252 1271 284 1477 285 1823 1 240 -9 285 -103 460 -95 180 -148
228 -279 256 -74 15 -83 15 -197 2z"/>
</g>
</svg>

              </NavLink>
            </Nav.Item>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav fill>
            <Nav.Item>
             <NavLink className="nlink" to="/">Julia Jo</NavLink>
            </Nav.Item>

            <Nav.Item>
                <NavLink className="nlink" to="/about">About</NavLink>
            </Nav.Item>

            <Nav.Item>
                <NavLink className="nlink" to="/contact">Contact</NavLink>
            </Nav.Item>
            

            <Nav.Item>
                <NavLink className="nlink" to="/scura">Scura</NavLink>
            </Nav.Item>
            
          </Nav>


        </Navbar.Collapse>


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
