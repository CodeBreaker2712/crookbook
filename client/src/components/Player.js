import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
export const Player = ({ name, role, onClick }) => (
  <Card className="col-6 col-md-4">
    <Card.Body>
      <Card.Title>{`Name: ${name}`}</Card.Title>
      <Card.Text>{`Role: ${role}`}</Card.Text>
    </Card.Body>
    <Card.Footer>
      <Button onClick={onClick} variant="warning">
        Select
      </Button>
    </Card.Footer>
  </Card>
);
