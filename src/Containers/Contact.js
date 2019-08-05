import React, { Component } from 'react';
import { Form, Col, Container, Row } from 'react-bootstrap';

export class Contact extends Component {
  render() {
    return (
      <Container>
        <Form className='p-10'>
          <Row className="justify-content-center">
            <Col md={6}>
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control placeholder="Name" />
              </Form.Group>
              <Form.Group>
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Please enter your email address" />
              </Form.Group>
              <Form.Group>
                <Form.Label>Message here</Form.Label>
                <Form.Control as="textarea" rows="3" />
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </Container>

    )
  }
}

export default Contact;
