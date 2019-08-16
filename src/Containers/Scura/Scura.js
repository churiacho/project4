import React, { Component } from "react";
import { Image, Container, Row, Col, Nav } from "react-bootstrap";
import ScuraBg from './scurabg.png';
import Footer from '../../Components/Footer/Footer.js';
import './Scura.css';
import Scroll from '../../Components/Scroll/Scroll.js';

export class Scura extends Component {
  render() {
    return (
      <div className="scura">
        <header id="scrollhere" data-spy="scroll" data-target={Scroll} data-offset='0'>
         <h1>SCURA Yoo</h1>
        </header>
        <Container className="py-5">
          <Row className="justify-content-center">
            <Col>
            
            </Col>
            <Image src={ScuraBg} fluid responsive/>
          </Row>
        </Container>
        <Nav.Item>
          <Nav.Link href="#scrollhere">
            <Scroll />
          </Nav.Link>
        </Nav.Item>
        <Footer />
      </div>
    );
  }
}

export default Scura;
