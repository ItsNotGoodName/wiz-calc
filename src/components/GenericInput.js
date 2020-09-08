import React, { Component } from "react";
import { FormGroup, FormLabel, FormControl } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";

class GenericInput extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.handleChange(event.target.value);
  }

  render() {
    return (
      <FormGroup>
        <Row>
          <Col className="text-right">
            <FormLabel>{this.props.label}</FormLabel>
          </Col>
          <Col>
            <FormControl
              type="number"
              value={this.props.data[this.props.target]}
              onChange={this.handleChange}
            />
          </Col>
        </Row>
      </FormGroup>
    );
  }
}

export default GenericInput;
