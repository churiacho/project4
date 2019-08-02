import React, { Component } from 'react';
import { Container, Row, Col, Image, Jumbotron } from 'react-bootstrap';

export class About extends Component {
  render() {
    return (
      <Container>
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
    )
  }
}

export default About;
