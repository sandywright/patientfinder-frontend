import React, {Component} from 'react';
import {
  Link
} from 'react-router-dom';

import {
  Button
} from 'react-bootstrap';

export default class LoginButton extends Component {

  render() {
    return (
      <Link to="/login">
        <Button
          bsStyle="primary">
          Login
        </Button>
      </Link>
    )
  }
}
