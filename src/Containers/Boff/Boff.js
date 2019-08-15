import React, { Component } from 'react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import BoffBg from './boffbg.jpg';
import './Boff.css';


export class Boff extends Component {
  render() {
    return (
      <div className="boff">
        <header>
          <h1 className="display-4">BrooklynOFF.com</h1>
        </header>
        <Container fluid>
          <Row>
            <Card className="bg-dark text-white">

            </Card>
          </Row>
          <Row className="justify-content-center">
            <Col xs={10}>
              <Image src={BoffBg} responsive fluid/>                  
            </Col>

          </Row>
        </Container>
    

      </div>
    )
  }
}

export default Boff;
