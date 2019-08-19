import React from 'react';
import { Image, Card, Container, Row, Col } from 'react-bootstrap';
import Pic from './pic.jpg';
import './Bio.css';


function Bio() {
  return (
    <Container id="bio" fluid>
      <Row className="justify-content-center">
        <Col xs={4} md={3} className="mt-4">
          <Image fluid responsive src={Pic} rounded id="pic"/>        
        </Col>
        <Col sm={12} md={6}>
        <Card>
          <Card.Header>
            <h2>Julia Jo:</h2>
            <h3>Full Stack Developer</h3>
          </Card.Header>
          <Card.Body>
            Currently a full-time customer service professional working in the Canadian Legal industry. <br></br>Knowing that this isn't
            the ideal path for my mind, I am now pursuing Full Stack Development to play into my analytical and creative 
            strengths.
          </Card.Body>
          </Card>      
        </Col>          
  
        </Row>


    </Container>
  )
}

export default Bio;
