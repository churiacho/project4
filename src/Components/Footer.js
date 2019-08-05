import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Col, Row, Button } from 'react-bootstrap';

export class Footer extends Component {
  render() {
    return (
      <footer style={footerStyle}>

        <Row style={{border: '1px solid orange', margin: '1rem'}}>
            <Col md={3} >
             <h1>Footer Stuff</h1> 
            </Col>
          </Row>
        <Row className="justify-content-md-center" style={{ marginTop: '2rem'}}>
            <Col lg={1}>
              <Button variant="outline-light" href="https://www.linkedin.com/in/julia-ohyoon-jo/" block>
                <FontAwesomeIcon icon={['fab', 'linkedin-in']} size="2x" />
              </Button>

            </Col>
            <Col lg={1}>
              <Button variant='outline-light' href="https://github.com/churiacho" block>
                <FontAwesomeIcon icon={['fab', 'github']} size="2x"/>
              </Button>
            </Col>
            <Col lg={1}>
              <Button variant='outline-light' href="https://www.instagram.com/churiacho/" block>
                <FontAwesomeIcon icon={['fab', 'instagram']} size="2x" />
              </Button>
            </Col>
          </Row>

      </footer>

    )
  }
}

const footerStyle = {
  backgroundColor: 'grey',
  border: '1px solid black',
  textAlign: 'center',
  padding: '1rem'
}

export default Footer;
