import React, { Component } from 'react';
import { Container, Row, Col, Image, Jumbotron } from 'react-bootstrap';
import './About.css';



export class About extends Component {
  render() {
    return (
      <div className="about">

        <Container>
          <Row className="justify-content-sm-center">
            <Col className="my-3">
              <h1 className="display-4">About Me</h1>            
            </Col>

          </Row>
          <Row>
            <Col>
              <Image style={{marginBottom: "-10%", width: "250px"}}src="http://mangalparinaymatrimony.com/images/site_images/profile/blank-profile.jpg" rounded />
              <Jumbotron fluid>
                Pretty little thang
              </Jumbotron>
            </Col>
          </Row>
          <Row>
            <Col md={9} xs={12}>
              <Jumbotron>
                Blurb
              </Jumbotron>
            </Col>
          </Row>

        </Container>    
      </div>

    )
  }
}

export default About;