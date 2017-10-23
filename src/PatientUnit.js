import React, {Component} from 'react';
import Time from 'react-time-format';
import axios from 'axios';
import {
  Label,
  Badge,
  Button,
  Accordion,
  Panel,
  Glyphicon,
  Well
} from 'react-bootstrap';

import AlertModal from './AlertModal';

export default class PatientUnit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisabled: false,
      showAlert: false
    }

    this.handleClickClerk = this.handleClickClerk.bind(this);
    this.handleClickDelete = this.handleClickDelete.bind(this);
    this.showAlert = this.showAlert.bind(this);
    this.closeAlert = this.closeAlert.bind(this);
  }

  handleClickClerk(patientID) {

    //
    const token = localStorage.getItem('token');
	  const config = {
	     headers: { 'x-access-token': `${token}` }
    };
    //
    axios.post(`http://patientfinder-api.herokuapp.com/hospitals/${this.props.hID}/patients/`+patientID+`/clerk-up`, {}, config)
    .then(response => {
      console.log(response);
      this.props.axiosGet(`http://patientfinder-api.herokuapp.com/hospitals/${this.props.hID}/patients`)
    })
    .catch(error => {
      console.log(error);
    });
    this.setState({isDisabled: true});
  }

  handleClickDelete(patientID) {
    //
    const token = localStorage.getItem('token');
	  const config = {
	     headers: { 'x-access-token': `${token}` }
    };
    //
    axios.delete(`http://patientfinder-api.herokuapp.com/hospitals/${this.props.hID}/patients/`+patientID, config)
    .then(response => {
      console.log(response);
      this.props.axiosGet(`http://patientfinder-api.herokuapp.com/hospitals/${this.props.hID}/patients`)
    })
    .catch(error => {
      console.log(error);
    });
  }

  showAlert() {
    this.setState({
      showAlert: true
    })
  }

  closeAlert() {
    this.setState({
      showAlert: false
    })
  }

  render() {
    let isDisabled = this.state.isDisabled;
    return (
      <div className="patient-div" key={this.props.id}>
        <div className="patient-name-div">
          <h3 id="patient-name-text"><Glyphicon glyph="user"/> {this.props.gender.toUpperCase()} PATIENT</h3>
          <div className="patient-age-div">
            <h3 id="patient-name-text">{this.props.age}</h3>
          </div>
        </div>
        <div>
          <h3><strong>Location</strong> {this.props.location} (bed {this.props.bed})</h3>
          <h3><strong>Added by</strong> {this.props.addedBy}</h3>
          <h3><strong>Added at</strong> <Label className="update-label"><Time value={this.props.createdAt} format="hh:mm DD/MM/YYYY"/></Label></h3>
          <h3><strong>Number of clerks</strong> <Badge className="number-badge">{this.props.clerks}</Badge></h3>
          <h3><strong>Background</strong><br/><br/><Well>{this.props.background}</Well></h3>
          <Accordion>
            <Panel header="Actions" eventKey="1" bsStyle="info">
              <Button
                bsStyle="primary"
                block
                onClick={!isDisabled ? () => this.handleClickClerk(this.props.id) : null}
                disabled={isDisabled}>
                {isDisabled ? 'Clerked' : 'Clerk'}
              </Button>
              <Button
                bsStyle="danger"
                block
                onClick={this.showAlert}>
                Discharged
              </Button>
              {this.state.showAlert ?
              <AlertModal handleClickDelete={this.handleClickDelete} closeAlert={this.closeAlert} id={this.props.id}/>
              : null}
            </Panel>
          </Accordion>
        </div>
      </div>
    )
  }

}
