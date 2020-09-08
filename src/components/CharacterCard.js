import React, { Component } from "react";
import { SpellContext } from "../contexts/spell-context";
import { Card } from "react-bootstrap";
import GenericInput from "./GenericInput";
import BuffInput from "./BuffInput";

class CharacterCard extends Component {
  static contextType = SpellContext;
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.deleteSpell = this.deleteSpell.bind(this);
  }

  deleteSpell() {
    const [, dispatch] = this.context;
    dispatch({
      type: "DEL_SPELL",
      payload: this.spell.id,
    });
  }

  handleChange(target) {
    return (value) => {
      const [state, dispatch] = this.context;
      let character = state.character;
      character[target] = value;
      dispatch({ type: "UPDATE_CHARACTER", payload: character });
    };
  }

  render() {
    const [state, ] = this.context;
    return (
      <Card className="mt-4">
        <Card.Header className="text-center">Character Stats</Card.Header>
        <Card.Body>
          <GenericInput
            label="Percent Damage"
            target="percent"
            data={state.character}
            handleChange={this.handleChange("percent")}
          />
          <GenericInput
            label="Flat Damage"
            target="flat"
            data={state.character}
            handleChange={this.handleChange("flat")}
          />
          <BuffInput
            target="buffs"
            character={state.character}
            handleChange={this.handleChange("buffs")}
          />
        </Card.Body>
      </Card>
    );
  }
}

export default CharacterCard;
