import React, { Component } from 'react';
import './Footer.css';

import { Container, Col, Row, Button } from 'react-bootstrap';

export class Footer extends Component {
  render() {
    return (
      <footer>
        <Container>
                  <Row style={{border: '1px solid orange', margin: '1rem'}}>
            <Col>
             <h1>Footer Stuff</h1> 
            </Col>
          </Row>
        <Row className="justify-content-md-center" style={{ marginTop: '2rem'}}>
            <Col>
              <Button variant="outline-light" href="https://www.linkedin.com/in/julia-ohyoon-jo/" >
                LInkedIn
              </Button>

            </Col>
            <Col >
              <Button variant='outline-light' href="https://github.com/churiacho" >
                Github
              </Button>
            </Col>
            <Col >
              <Button variant='outline-light' href="https://www.instagram.com/churiacho/" >
                instagram
              </Button>
            </Col>
          </Row>
        </Container>



      </footer>

    )
  }
}



export default Footer;
