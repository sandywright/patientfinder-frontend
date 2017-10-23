import React, { Component } from 'react';
import axios from 'axios';

export default class Logout extends Component {
  constructor(props) {
    super(props);


    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {

    //
    const token = localStorage.getItem('token');
	  const config = {
	     headers: { 'x-access-token': `${token}` },
    };
    //
    
    axios.defaults.withCredentials = true;
    axios.get('http://patientfinder-api.herokuapp.com/logout', config)
    .then(response => {
      localStorage.removeItem('token');
      console.log(response);
      this.props.history.push('/');
    })
    .catch(error => {
      console.log(error);
    });
  }

  render() {
    return (
      <div>
        <h2>Profile</h2>
        <Button onClick={this.handleSubmit}>Logout</Button>
      </div>
    )
  }
}
