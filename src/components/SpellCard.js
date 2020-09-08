import React, { Component } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import GenericInput from "./GenericInput";
import DamageIndicator from "./DamageIndicator";
import { SpellContext } from "../contexts/spell-context";
import HiddenTextInput from "./HiddenTextInput";

class SpellCard extends Component {
  static contextType = SpellContext;
  constructor(props) {
    super(props);
    this.handleDamageChange = this.handleDamageChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.deleteSpell = this.deleteSpell.bind(this);
  }
  deleteSpell() {
    const [, dispatch] = this.context;
    dispatch({ type: "DEL_SPELL", payload: this.props.spell.id });
  }

  handleNameChange(value){
    const [, dispatch] = this.context;
    dispatch({
      type: "UPDATE_SPELL",
      payload: {
        ...this.props.spell,
        name: value,
      },
    });
  }

  handleDamageChange(value) {
    const [, dispatch] = this.context;
    dispatch({
      type: "UPDATE_SPELL",
      payload: {
        ...this.props.spell,
        base: value,
      },
    });
  }

  calculateDamage = (base, percent, flat, buffs) => {
    let dam = Math.floor(
      (1 + Number(percent) / 100) * Number(base) + Number(flat)
    );
    for (let i = 0; i < buffs.length; i++) {
      dam *= 1 + buffs[i] / 100;
      dam = Math.floor(dam);
    }
    return dam;
  };

  render() {
    const [state, ] = this.context;
    let damage = this.calculateDamage(
      this.props.spell.base,
      state.character.percent,
      state.character.flat,
      state.character.buffs
    );
    return (
      <Card className="mt-4">
        <Card.Header>
          <Row>
            <Col className="">
              <HiddenTextInput value={this.props.spell.name} handleChange={this.handleNameChange}></HiddenTextInput>
            </Col>
            <Col className="col-sm-3 col-md-2 col-lg-2">
              <Button
                onClick={this.deleteSpell}
                className="btn-danger float-right"
              >
                X
              </Button>
            </Col>
          </Row>
        </Card.Header>
        <Card.Body>
          <GenericInput
            label="Base Damage"
            target="base"
            data={this.props.spell}
            handleChange={this.handleDamageChange}
          />
          <DamageIndicator damage={damage} />
        </Card.Body>
      </Card>
    );
  }
}

export default SpellCard;
