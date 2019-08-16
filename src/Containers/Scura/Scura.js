import React, { Component } from "react";
import { Image, Container, Row, Col } from "react-bootstrap";
import ScuraBg from './scurabg.png';
import Footer from '../../Components/Footer/Footer.js';
import './Scura.css';
import Scroll from '../../Components/Scroll/Scroll.js';

export class Scura extends Component {
  render() {
    return (
      <div className="scura">
        <header id="scuraHead">
         <h1>SCURA Yoo</h1>
        </header>
        <Container className="py-5">
          <Row className="justify-content-center">
            <Col>
            
            </Col>
            <Image src={ScuraBg} fluid responsive/>
          </Row>
        </Container>
        <Scroll />

        <Footer />
      </div>
    );
  }
}

export default Scura;
