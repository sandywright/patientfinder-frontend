import React, { Component } from 'react';
import axios from 'axios';

import BreadcrumbNav from './BreadcrumbNav';
import AddHospital from './AddHospital';
import SearchHospital from './SearchHospital';
import HospitalContainer from './HospitalContainer';

export default class Hospitals extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hospitals: [],
      filteredHospitals: [],
      hospital: '',
      searchResult: '',
      showModal: false,
      atHospital: true
    };

    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.axiosGet = this.axiosGet.bind(this);
    this.findHospital = this.findHospital.bind(this);
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
    console.log(token);
    //

    axios.defaults.withCredentials = true;
    axios.get(url, config)
      .then(response => {
        console.log(response.data);
        this.setState({
          hospitals: response.data,
          filteredHospitals: response.data
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
    });
  }

  //Test function for searching hospital list
  /*
  findHospital() {
    let name = this.state.searchResult
    const result = this.state.hospitals.find(p => p.name == name)
    console.log(result)
  }
  */

  findHospital(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name
    this.setState({
      [name]: value
    });
    let hospitalList = this.state.hospitals
    const filteredList = hospitalList.filter((hospital) => {
      return hospital.name.toLowerCase().includes(this.state.searchResult.toLowerCase())
    });
    console.log(filteredList)
    this.setState({
      filteredHospitals: filteredList
    })
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
    axios.post('http://patientfinder-api.herokuapp.com/hospitals', {
      name: this.state.hospital
    }, config)
    .then(response => {
      console.log(response.data);
      this.axiosGet('http://patientfinder-api.herokuapp.com/hospitals');
    })
    .catch(error => {
      console.log(error);
    });
  }

  componentDidMount() {
    this.axiosGet('http://patientfinder-api.herokuapp.com/hospitals');
  }

  render() {
    return (
      <div>
        <BreadcrumbNav atHospital={this.state.atHospital}/>
        <AddHospital hospital={this.state.hospital}
                     handleChange={this.handleChange}
                     handleSubmit={this.handleSubmit}
                     showModal={this.state.showModal}
                     open={this.open}
                     close={this.close}/>
        <div className="container">
          <SearchHospital findHospital={this.findHospital}/>
          <HospitalContainer filteredHospitals={this.state.filteredHospitals}/>
        </div>
      </div>
    );
  }
}
