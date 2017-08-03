import React, { Component } from 'react';
import Time from 'react-time-format';
import { Link } from 'react-router-dom';
import {
  Label,
  Badge,
  Glyphicon
} from 'react-bootstrap';

export default class HospitalContainer extends Component {

  render() {
    let hospitalsList = this.props.filteredHospitals.map((hospital) => {
      return (
        <Link className="hospital-link" to={`/hospitals/${hospital._id}/patients`} key={hospital._id} >
          <div className="hospital-div" key={hospital._id}>
            <div className="hospital-name-div">
              <h3 id="hospital-name-text"><Glyphicon glyph="home"/> {hospital.name.toUpperCase()}</h3>
            </div>
            <h3>Number of patients <Badge className="number-badge">{hospital.patients.length}</Badge></h3>
            <h3>Last updated <Label className="update-label"><Time value={hospital.updatedAt} format="DD/MM/YYYY"/></Label></h3>
          </div>
        </Link>
      )
    })
    return (
      <div>
        {hospitalsList}
      </div>
    )
  }
}
