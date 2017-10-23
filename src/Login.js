import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';
import axios from 'axios';

import {
  Form,
  FormGroup,
  Col,
  ControlLabel,
  FormControl,
  Button
} from 'react-bootstrap';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      sessionID: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    axios.defaults.withCredentials = true;
    axios.post('http://patientfinder-api.herokuapp.com/login', {
      email: this.state.email,
      password: this.state.password
    })
    .then(response => {

      localStorage.setItem('token', response.data.token);
      this.setState({
        sessionID: response.data
      })
      this.props.history.push('/hospitals');
    })
    .catch(error => {
      console.log(error);
    });
  }

  render() {
    return (
      <div className="container">
        <h2>Login</h2>
        <div>
          <Form horizontal onSubmit={this.handleSubmit}>
            <FormGroup controlId="formHorizontalEmail">
              <Col componentClass={ControlLabel} sm={2}>
                Email
              </Col>
              <Col xs={12} md={6} mdPull={6}>
                <FormControl name="email" type="email" placeholder="Email" value={this.state.email} onChange={this.handleChange}/>
              </Col>
            </FormGroup>

            <FormGroup controlId="formHorizontalPassword">
              <Col componentClass={ControlLabel} sm={2}>
                Password
              </Col>
              <Col xs={12}>
                <FormControl name="password" type="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} />
              </Col>
            </FormGroup>
            <FormGroup>
              <Col smOffset={2} sm={10}>
                <Button type="submit">
                  Sign in
                </Button>
              </Col>
            </FormGroup>
            <FormGroup>
              <Col smOffset={2} sm={10}>
                <Link to="/register">
                  <p>Need to register?</p>
                </Link>
              </Col>
            </FormGroup>
          </Form>
        </div>
      </div>
    )
  }
}

/*
<form onSubmit={this.handleSubmit}>
  <label>
    Email:
    <input name="email" type="text" value={this.state.email} onChange={this.handleChange} />
  </label>
  <br/>

  <label>
    Password:
    <input name="password" type="password" value={this.state.password} onChange={this.handleChange} />
  </label>
  <br/>
  <input type="submit" value="Login" />
</form>
*/
