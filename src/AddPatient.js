import React, { Component } from 'react';

import {
  Form,
  FormGroup,
  Col,
  ControlLabel,
  FormControl,
  Button,
  Modal,
  Glyphicon
} from 'react-bootstrap';

export default class AddPatient extends Component {

  render() {
    return (
      <div>
        <div id="add-patient-button" onClick={this.props.open}>
          <h3 className="add-patient-button-text"><Glyphicon glyph="plus" /> Add Patient</h3>
        </div>
        <Modal show={this.props.showModal} onHide={this.props.close}>
          <Modal.Header closeButton>
            <Modal.Title>Add Patient</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form horizontal onSubmit={this.props.handleSubmit}>
              <FormGroup controlId="formHorizontalLocation">
                <Col componentClass={ControlLabel} sm={2}>
                  Location
                </Col>
                <Col sm={10}>
                  <FormControl name="location" type="location" placeholder="e.g. Oak Ward" value={this.props.location} onChange={this.props.handleChange}/>
                </Col>
              </FormGroup>

              <FormGroup controlId="formHorizontalBed">
                <Col componentClass={ControlLabel} sm={2}>
                  Bed
                </Col>
                <Col sm={10}>
                  <FormControl name="bed" type="bed" placeholder="e.g. 22" value={this.props.bed} onChange={this.props.handleChange}/>
                </Col>
              </FormGroup>

              <FormGroup controlId="formHorizontalGender">
                <Col componentClass={ControlLabel} sm={2}>
                  Gender
                </Col>
                <Col sm={10}>
                  <FormControl name="gender" type="gender" placeholder="Gender" value={this.props.gender} onChange={this.props.handleChange}/>
                </Col>
              </FormGroup>

              <FormGroup controlId="formHorizontalAge">
                <Col componentClass={ControlLabel} sm={2}>
                  Age
                </Col>
                <Col sm={10}>
                  <FormControl name="age" type="age" placeholder="Age" value={this.props.age} onChange={this.props.handleChange}/>
                </Col>
              </FormGroup>

              <FormGroup controlId="formHorizontalBackground">
                <Col componentClass={ControlLabel} sm={2}>
                  <ControlLabel>Background</ControlLabel>
                </Col>
                <Col sm={10}>
                  <FormControl componentClass="textarea" name="background" type="background" placeholder="Respiratory patient. Ideal history and examination" value={this.props.background} onChange={this.props.handleChange}/>
                </Col>
              </FormGroup>

              <FormGroup controlId="formHorizontalAddedBy">
                <Col componentClass={ControlLabel} sm={2}>
                  Added By
                </Col>
                <Col sm={10}>
                  <FormControl name="addedBy" type="addedBy" placeholder="Dr Wright" value={this.props.addedBy} onChange={this.props.handleChange}/>
                </Col>
              </FormGroup>

              <FormGroup>
                <Col smOffset={2} sm={10}>
                  <Button type="submit" onClick={this.props.close}>Submit</Button>
                </Col>
              </FormGroup>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    )
  }
}


/*
<label>
  Location:
  <input name="location" type="text" value={this.state.location} onChange={this.handleChange} />
</label>

<label>
  Gender:
  <input name="gender" type="text" value={this.state.gender} onChange={this.handleChange} />
</label>

<label>
  Type:
  <input name="type" type="text" value={this.state.type} onChange={this.handleChange} />
</label>

<label>
  Added By:
  <input name="addedBy" type="text" value={this.state.addedBy} onChange={this.handleChange} />
</label>

<input type="submit" value="Submit" />

<FormGroup controlId="formHorizontalGender">
  <Col componentClass={ControlLabel} sm={2}>
    Gender
  </Col>
  <Col sm={10}>
    <FormControl name="gender" type="gender" placeholder="Gender" value={this.props.gender} onChange={this.props.handleChange}/>
  </Col>
</FormGroup>
*/
