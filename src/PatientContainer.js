import React, { Component } from 'react';

import PatientUnit from './PatientUnit';

export default class PatientContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  };

  render() {
    let patientList = this.props.patients.map((patient) => {
      return (
        <PatientUnit id={patient._id}
                     key={patient._id}
                     gender={patient.gender}
                     age={patient.age}
                     location={patient.location}
                     bed={patient.bed}
                     background={patient.background}
                     addedBy={patient.addedBy}
                     createdAt={patient.createdAt}
                     clerks={patient.clerks}
                     axiosGet={this.props.axiosGet}
                     hID={this.props.hID}/>
      )
    })
    return (
      <div>
        {patientList}
      </div>
    )
  }
}
