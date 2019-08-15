import React from 'react';
import { Image, Card, Jumbotron, Container, Row, Col } from 'react-bootstrap';
import Pic from './pic.jpg';
import './Bio.css';


function Bio() {
  return (
    <Container id="bio" fluid>
      <Row className="justify-content-center">
        <Col xs={4} md={3}>
          <Image fluid responsive src={Pic} rounded id="pic"/>        
        </Col>
        <Col sm={12} md={6}>
        <Card>
          <Card.Header>
            Julia Jo: Full Stack Developer
          </Card.Header>
          <Card.Body>
            My Bio
          </Card.Body>
          </Card>      
        </Col>          
  
        </Row>

      <Row className="justify-content-center">
        <Jumbotron>Resume probably</Jumbotron>
      </Row>

    </Container>
  )
}

export default Bio;
