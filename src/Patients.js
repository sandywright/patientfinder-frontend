import React, { Component } from 'react';
import axios from 'axios';

import BreadcrumbNav from './BreadcrumbNav';
import AddPatient from './AddPatient';
import PatientContainer from './PatientContainer';

export default class Patients extends Component {

  constructor(props) {
    super(props);
    this.state = {
      patients: [],
      location: '',
      bed: '',
      gender: '',
      age: '',
      background: '',
      addedBy: '',
      showModal: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
    this.axiosGet = this.axiosGet.bind(this);
  }

  close() {
    this.setState({
      showModal: false
    });
  }

  open() {
    this.setState({
      showModal: true
    });
  }

  axiosGet(url) {
    //
    const token = localStorage.getItem('token');
	  const config = {
	     headers: { 'x-access-token': `${token}` },
    };
    //

    axios.defaults.withCredentials = true;
    axios.get(url, config)
      .then(response => {
        console.log(response.data);
        this.setState({
          patients: response.data,
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
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
    //
    const token = localStorage.getItem('token');
	  const config = {
	     headers: { 'x-access-token': `${token}` },
    };
    //

    event.preventDefault();
    axios.defaults.withCredentials = true;
    axios.post(`http://patientfinder-api.herokuapp.com/hospitals/${this.props.match.params.hID}/patients`, {
      location: this.state.location,
      bed: this.state.bed,
      gender: this.state.gender,
      age: this.state.age,
      background: this.state.background,
      addedBy: this.state.addedBy
    }, config)
    .then(response => {
      console.log(response);
      this.axiosGet(`http://patientfinder-api.herokuapp.com/hospitals/${this.props.match.params.hID}/patients`)
    })
    .catch(error => {
      console.log(error);
    });
    this.setState(this.baseState);
  }

  componentDidMount() {
    this.axiosGet(`http://patientfinder-api.herokuapp.com/hospitals/${this.props.match.params.hID}/patients`)
  }

  render() {
    return (
      <div>
        <BreadcrumbNav />
        <AddPatient location={this.state.location}
                    bed={this.state.bed}
                    age={this.state.age}
                    gender={this.state.gender}
                    addedBy={this.state.addedBy}
                    background={this.state.background}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    showModal={this.state.showModal}
                    open={this.open}
                    close={this.close}/>
        <div className="container">

          <PatientContainer patients={this.state.patients}
                            hID={this.props.match.params.hID}
                            axiosGet={this.axiosGet}/>
        </div>
      </div>
    );
  }
}

/*
shouldComponentUpdate(nextProps, nextState) {
  if(nextState.patients !== this.state.patients) {
    return true
  } else {
    return false
  }
}
*/
