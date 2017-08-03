import React from 'react';
import {
  Breadcrumb
} from 'react-bootstrap';

const HospitalBread = () => (
  <Breadcrumb className="bread-nav">
    <Breadcrumb.Item href="/">
      Home
    </Breadcrumb.Item>
    <Breadcrumb.Item active>
      Hospitals
    </Breadcrumb.Item>
  </Breadcrumb>
)

export default HospitalBread;
