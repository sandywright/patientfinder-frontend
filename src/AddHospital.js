import React, {Component} from 'react';
import {
  Form,
  FormGroup,
  FormControl,
  Col,
  ControlLabel,
  Button,
  Modal,
  Glyphicon
} from 'react-bootstrap';

export default class AddHospital extends Component {

  render() {
    return (
      <div>
        <div id="add-patient-button" onClick={this.props.open}>
          <h3 className="add-patient-button-text"><Glyphicon glyph="plus" /> Add Hospital</h3>
        </div>
        <Modal show={this.props.showModal} onHide={this.props.close}>
          <Modal.Header closeButton>
            <Modal.Title>Add Hospital</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form horizontal onSubmit={this.props.handleSubmit}>
              <FormGroup controlId="formHorizontalHospital">
                <Col componentClass={ControlLabel} sm={2}>
                  Hospital Name
                </Col>
                <Col sm={10}>
                  <FormControl name="hospital" type="hospital" placeholder="The Good Hospital" value={this.props.hospital} onChange={this.props.handleChange} />
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
