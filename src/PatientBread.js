import React from 'react';
import {
  Breadcrumb,
} from 'react-bootstrap';

const PatientBread = () => (
  <Breadcrumb className="bread-nav">
    <Breadcrumb.Item href="/">
      Home
    </Breadcrumb.Item>
    <Breadcrumb.Item href="/hospitals">
      Hospitals
    </Breadcrumb.Item>
    <Breadcrumb.Item active>
      Patients
    </Breadcrumb.Item>
  </Breadcrumb>
)

export default PatientBread;
