import React, { Component } from "react";
import CharacterCard from "./CharacterCard";
import SpellCard from "./SpellCard";
import AddSpell from "./AddSpell";
import { SpellContext } from "../contexts/spell-context";
import { Container, Row, Col } from "react-bootstrap";

class Main extends Component {
  static contextType = SpellContext;
  render() {
    const [state, ] = this.context;
    return (
      <Container>
        <Row>
          <Col>
            <CharacterCard />
          </Col>
          <Col>
            {state.spells.map((ele) => (
              <SpellCard key={ele.id} spell={ele}></SpellCard>
            ))}
            <AddSpell />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Main;
