import React, { Component } from 'react';
import { Container, Row, Col, Image, Jumbotron } from 'react-bootstrap';
import BoffBg from './boffbg.jpg';
import './Boff.css';
import Footer from '../../Components/Footer/Footer.js';


export class Boff extends Component {
  render() {
    return (
      <div className="boff">
        <header>
          <h1 className="display-3">BrooklynOFF.com</h1>
        </header>
        <Container fluid>
          <Row className="m-5 justify-content-center">
            <Col xs={10}>
              <Jumbotron className="p-5" id="blurb">
                Using  
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
	 viewBox="0 0 64 64" enable-background="new 0 0 64 64" id="boots">
<g>
	<path d="M32.2,34.8h-6.5V45h6.5c5.4,0,5.7-3.8,5.7-5.2C38,38.6,37.5,34.8,32.2,34.8z"/>
	<path d="M55.4,0H8.6C3.8,0,0,3.8,0,8.6v46.8C0,60.2,3.8,64,8.6,64h46.8c4.7,0,8.6-3.8,8.6-8.6V8.6
		C64,3.8,60.2,0,55.4,0z M34.6,52H15.4V12h18.7c10.6,0,12.9,7.5,12.9,10.5c0,6-3.4,7.5-5.1,8.2c2.6,0.7,6.8,2.9,6.8,10.6
		C48.6,43.4,48.3,52,34.6,52z"/>
	<path d="M36.1,23.5c0-1.2-0.8-3.9-4.6-3.9h-5.8v8h5.7C35.6,27.6,36.1,24.9,36.1,23.5z"/>
</g>
</svg>Bootstrap, the web-design encouraged pre-registration
                via the site, and aimed at exuding the allure of a summer's night.
                
              </Jumbotron>
            </Col>

          </Row>

          <Row className="justify-content-center">
            <Col xs={10}>
              <Image src={BoffBg} responsive fluid/>                  
            </Col>

          </Row>
        </Container>

        <Footer />

      </div>
    )
  }
}




export default Boff;
