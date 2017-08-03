import React, {Component} from 'react';
import {
  Link
} from 'react-router-dom';

import {
  Button
} from 'react-bootstrap';

export default class EnterButton extends Component {

  render() {
    return (
      <Link to="/hospitals">
        <Button bsStyle="primary">Find a Patient</Button>
      </Link>
    )
  }
}
