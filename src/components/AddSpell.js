import React, { useContext } from "react";
import { SpellContext } from "../contexts/spell-context";
import { Button } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import { Row, Col } from "react-bootstrap";

const AddSpell = () => {
  const [, dispatch] = useContext(SpellContext);

  const handleChange = () => {
    dispatch({
      type: "ADD_SPELL",
      payload: { id: uuidv4(), name: "", base: 0 },
    });
  };
  return (
    <Row className="mt-4">
      <Col className="text-center">
        <Button onClick={handleChange}>Add Spell</Button>
      </Col>
    </Row>
  );
};

export default AddSpell;
