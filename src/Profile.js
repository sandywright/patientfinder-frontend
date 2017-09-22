import React, { Component } from 'react';
import axios from 'axios';

import {
  Button
} from 'react-bootstrap';

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    axios.defaults.withCredentials = true;
    axios.get('http://patientfinder-api.herokuapp.com/logout')
    .then(response => {
      console.log(response);
      this.props.history.push('/');
    })
    .catch(error => {
      console.log(error);
    });
  }

  render() {
    return (
      <div className="container">
        <h2>Profile</h2>
        <Button onClick={this.handleSubmit}>Logout</Button>
      </div>
    )
  }
}
