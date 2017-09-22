import React, { Component } from 'react';
import axios from 'axios';
import {
  Form,
  FormGroup,
  Col,
  ControlLabel,
  FormControl,
  Button,
} from 'react-bootstrap';

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      confirmPassword: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    axios.defaults.withCredentials = true;
    axios.post('http://patientfinder-api.herokuapp.com/register', {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword
    })
    .then(response => {
      console.log(response.data);
      this.props.history.push('/profile');
    })
    .catch(error => {
      console.log(error);
    });

  }

  render() {
    return (
      <div className="container">
        <h2>Register</h2>
        <div>
          <Form horizontal onSubmit={this.handleSubmit}>
            <FormGroup>
              <Col componentClass={ControlLabel} sm={2}>
                Name
              </Col>
              <Col sm={10}>
                <FormControl name="name" type="name" placeholder="Name" value={this.state.name} onChange={this.handleChange}/>
              </Col>
            </FormGroup>

            <FormGroup controlId="formHorizontalEmail">
              <Col componentClass={ControlLabel} sm={2}>
                Email
              </Col>
              <Col sm={10}>
                <FormControl name="email" type="email" placeholder="Email" value={this.state.email} onChange={this.handleChange}/>
              </Col>
            </FormGroup>

            <FormGroup controlId="formHorizontalPassword">
              <Col componentClass={ControlLabel} sm={2}>
                Password
              </Col>
              <Col sm={10}>
                <FormControl name="password" type="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} />
              </Col>
            </FormGroup>

            <FormGroup controlId="formHorizontalPassword">
              <Col componentClass={ControlLabel} sm={2}>
                Confirm Password
              </Col>
              <Col sm={10}>
                <FormControl name="confirmPassword" type="password" placeholder="Password" value={this.state.confirmPassword} onChange={this.handleChange} />
              </Col>
            </FormGroup>

            <FormGroup>
              <Col smOffset={2} sm={10}>
                <Button type="submit">
                  Register
                </Button>
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
    Name:
    <input name="name" type="text" value={this.state.name} onChange={this.handleChange} />
  </label>
  <br/>

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

  <label>
    Confirm Password:
    <input name="confirmPassword" type="password" value={this.state.confirmPassword} onChange={this.handleChange} />
  </label>
  <br/>
  <input type="submit" value="Register" />
</form>
*/
