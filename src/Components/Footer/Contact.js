import React, { Component } from 'react';
import { Form, Col, Container, Row, Button } from 'react-bootstrap';
import FormErrors from './FormErrors';

export class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      First_Name: '',
      Last_Name: '',
      Email: '',
      Message: '',
      formErrors: {First_Name: '', Last_Name: '', Email: '', Message: ''},
      firstNameValid: false,
      lastNameValid: false,
      emailValid: false, 
      msgValid: false,
      msgSent: false
    }
  }

  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value},
                  () => { this.validateField(name, value) });
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let firstNameValid = this.state.firstNameValid;
    let lastNameValid = this.state.lastNameValid;
    let emailValid = this.state.emailValid;
    let msgValid = this.state.msgValid;

    switch(fieldName) {
      case 'First Name':
        firstNameValid = value.length >= 1;
        break;
      case 'Last Name':
        lastNameValid = value.length >= 1;
        break;
      case 'Email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        break;
      case 'Message':
        msgValid = value.length >= 5;
        break;
      default:
        break;
    }
    this.setState({
      formErrors: fieldValidationErrors,
      firstNameValid: firstNameValid,
      lastNameValid: lastNameValid,
      emailValid: emailValid,
      msgValid: msgValid
    }, this.validateForm);
  }

  validateForm() {
    this.setState({
      formValid: this.state.firstNameValid && this.state.lastNameValid && this.state.emailValid && this.state.msgValid});
  }

  errorClass(error) {
    return(error.length === 0 ? '' : 'has-error');
  }

  render() {

    return (
      <Container id='form'>
        <Form className='p-10' style={{textAlign: 'left'}}>
          <Row>
          <div className="panel panel-default">
                <FormErrors formErrors={this.state.formErrors} />
              </div>  
          </Row>
          <Row className="mb-2">
            <Col xs={6}>
              <h1>Say Hi!</h1>          
            </Col>

          </Row>
              <Row>
                <Col>
                  <Form.Group className="${this.errorClass(this.state.formErrors.firstName)}">
                    <Form.Label htmlFor="First Name">First Name</Form.Label>
                    <Form.Control 
                      value={this.state.firstName}
                      onChange={this.handleUserInput}
                      placeholder="John" 
                      type="text"
                      name="First Name"
                      required
                    />
                  </Form.Group>                
                </Col>

                <Col>
                  <Form.Group className="${this.errorClass(this.state.formErrors.lastName})">
                      <Form.Label htmlFor="Last Name">Last Name</Form.Label>
                      <Form.Control
                        value={this.state.lastName}
                        onChange={this.handleUserInput}
                        placeholder="Smith"
                        name="Last Name"
                        type="text"
                        required
                      />
                  </Form.Group>                
                </Col>

              </Row>
              <Row>
                <Col>
                  <Form.Group className="${this.errorClass(this.state.formErrors.email)}">
                    <Form.Label htmlFor="Email">Email address</Form.Label>
                    <Form.Control
                    value={this.state.email}
                    onChange={this.handleUserInput}
                    name="Email"
                    type="email" 
                    placeholder="jsmith@example.com" 
                    required
                    />
                  </Form.Group>                
                </Col>

              </Row>
             
              <Row>
                <Col>
                  <Form.Group className="${this.errorClass(this.state.formErrors.msg)}">
                    <Form.Label htmlFor="Message">Message here</Form.Label>
                    <Form.Control 
                    value={this.state.msg}
                    onChange={this.handleUserInput}
                    name="Message"
                    as="textarea" 
                    rows="3" 
                    required
                    />
                  </Form.Group>                             
                </Col>
   
              </Row>

              <Row>
                <Col>
                  <Button 
                    type="submit"
                    disabled={!this.state.formValid}  
                  >
                    Send Message                
                  </Button>                
                </Col>

              </Row>


        
        </Form>
      </Container>

    )
  }
}

export default Contact;
