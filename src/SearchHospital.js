import React, {Component} from 'react';
import {
  FormGroup,
  FormControl,
} from 'react-bootstrap';

export default class SearchHospital extends Component {

  render() {
    return (
      <div className="hospital-search">
        <FormGroup>
          <FormControl id="search-box" name="searchResult" type="text" placeholder="Search Hospitals" onChange={this.props.findHospital}/>
        </FormGroup>
      </div>
    )
  }
}
