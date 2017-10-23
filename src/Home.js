import React, {Component} from 'react';
//import axios from 'axios';

import {
  Jumbotron
} from 'react-bootstrap';

import LoginButton from './LoginButton';
import EnterButton from './EnterButton';

export default class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };

    this.handleLoginClick = this.handleLoginClick.bind(this);
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true})
  }

  componentDidMount() {

    //
    const token = localStorage.getItem('token');
    if (token) {
      this.setState({
        isLoggedIn: true
      });
    }
    //

    /*
    axios.defaults.withCredentials = true;
    axios.get('http://patientfinder-api.herokuapp.com/profile')
      .then(response => {
        console.log(response.data);
        this.setState({
          isLoggedIn: true
        });
      })
      .catch(error => {
        console.log('Error fetching data', error);
    });
    */
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    return (
      <div className="container">
        <Jumbotron>
          <h1>Clerk.</h1>
          <h2>Your pocket patient directory</h2>
          <p>Get out the library, put down the textbook and go see a real patient. Clerk is your tool for finding great patients and even better learning opportunities. Start clerking now.</p>
          <p>{isLoggedIn ? (
                <EnterButton />
              ) : (
                <LoginButton onClick={this.handleLoginClick} />
              )}
          </p>
        </Jumbotron>
      </div>
    )
  }
}
