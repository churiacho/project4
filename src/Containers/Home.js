import React, { Component } from 'react';
import './Home.css';
import { Jumbotron, Button } from 'react-bootstrap';






export class Home extends Component {


  render() {
    return (
      <div>
        <Jumbotron fluid className="homeJumbo">
          <h1>This is where the intro will go</h1>
          <Button variant="outline-light">
            <h1>
            <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="20pt" height="20pt" viewBox="0 0 1280.000000 1172.000000"
 preserveAspectRatio="xMidYMid meet">
<metadata>
Created by potrace 1.15, written by Peter Selinger 2001-2017
</metadata>
<g transform="translate(0.000000,1172.000000) scale(0.100000,-0.100000)"
fill="white" stroke="none">
<path d="M5820 6563 l0 -4578 -2413 2413 -2412 2412 -413 -413 -412 -412 2993
-2993 2992 -2992 245 0 245 0 2992 2992 2993 2993 -412 412 -413 413 -2412
-2412 -2413 -2413 0 4578 0 4577 -580 0 -580 0 0 -4577z"/>
</g>
</svg>

            </h1> 
          </Button>
        </Jumbotron>

      </div>
    )
  }
}




export default Home;
