import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './About.css';
import SideProfile from './SideProfile';
import Bio from './Bio';
import Footer from '../../Components/Footer/Footer.js';



export class About extends Component {
  render() {
    return (
      <div className="about">
        

        <Container fluid>
          <Row>
          <SideProfile />
            <Col className="my-5">
              <h1 className="display-4" id="AAboutMe">About <span id="MAboutMe">Me</span></h1>            
            </Col>

          </Row>

          <Row>
            <Col>
              <Bio />
            </Col>

          </Row>
          <Row>

          </Row>

        </Container>  
        <Footer 
          bg={footerstyle}
        />
      </div>

    )
  }
}

const footerstyle = {
  background: "rgb(159,242,203)",
  background: "linear-gradient(90deg, rgba(159,242,203,1) 0%, rgba(20,101,150,1) 100%)"
}

export default About;