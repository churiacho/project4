import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import './Header.css';

class Header extends React.Component {
  render() {
    return (
      <div>
        <Jumbotron fluid id="header" className="py-3" style={this.props.bg}>
          <p>{this.props.title}</p>
        </Jumbotron>       
      </div>
    )

  }
}

export default Header;
