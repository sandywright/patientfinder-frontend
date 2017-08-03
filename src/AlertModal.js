import React, { Component } from 'react';

import {
  Alert,
  Button,
} from 'react-bootstrap';

export default class AlertModal extends Component {


  render() {
    return (
        <Alert bsStyle="warning">
          <p><strong>Holy guacamole!</strong> Are you sure this patient has been discharged?</p>
          <p>
            <Button bsStyle="danger"
                    onClick={() => this.props.handleClickDelete(this.props.id)}>
                    Yup
            </Button>
            <span> </span>
            <Button onClick={this.props.closeAlert}>Narp</Button>
          </p>
        </Alert>
    )
  }
}
