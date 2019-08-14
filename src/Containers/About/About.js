import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './About.css';
import SideProfile from './SideProfile';
import Bio from './Bio';



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
      </div>

    )
  }
}

export default About;