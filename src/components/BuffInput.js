import React, { Component } from "react";
import { FormControl, FormGroup } from "react-bootstrap";

class BuffInput extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  parseBuffs(text) {
    let buffs = text.split("\n");
    buffs = buffs.map((element) => element.split(" ")[0]);
    return buffs;
  }

  handleChange(event) {
    let buffs = this.parseBuffs(event.target.value);
    this.props.handleChange(buffs);
  }

  render() {
    return (
      <FormGroup>
        <FormControl
          placeholder="Percent Damager Modifiers"
          as="textarea"
          rows="13"
          onChange={this.handleChange}
        />
      </FormGroup>
    );
  }
}

export default BuffInput;
