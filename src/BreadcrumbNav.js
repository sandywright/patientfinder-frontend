import React, {Component} from 'react';

import HospitalBread from './HospitalBread';
import PatientBread from './PatientBread';

export default class BreadcrumbNav extends Component {

  render() {
    const atHospital = this.props.atHospital;
    if(atHospital) {
      return <HospitalBread />
    } else {
      return <PatientBread />
    }
  }
}
