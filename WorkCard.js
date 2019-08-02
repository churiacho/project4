import React, { Component } from 'react';
import { Carousel, Container, Row } from 'react-bootstrap';

export class workCard extends Component {
  render() {
    return (
      <Container>
        <Row className="justify-content-xs-center">
         <Carousel style={cardStyle}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={this.props.slide1}
              alt={this.props.firstSlide}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={this.props.slide2}
              alt={this.props.secondSlide}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={this.props.slide3}
              alt={this.props.thirdSlide}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={this.props.slide4}
              alt={this.props.fourthSlide}
            />
          </Carousel.Item>
        </Carousel>          
        </Row>

      </Container>


    )
  }
}

const cardStyle = {
  margin: '4rem',
  width: '80vw',
}

export default workCard;
