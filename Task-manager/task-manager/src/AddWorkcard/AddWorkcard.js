import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import axios from "axios";

export default function AddWorkcard(props) {
  const [name, setName] = useState();
  const [taskStart, setTaskStart] = useState();
  const [taskEnd, setTaskEnd] = useState();
  const [taskType, setTaskType] = useState();
  const url = "http://localhost:5001/api/workinfo/add";
  function onSubmit(e) {
    e.preventDefault();
    axios
      .put(url, { name, taskStart, taskEnd, taskType })
      .then((response) => {
        alert(response.status);
      })
      .catch((err) => {
        alert("Coś poszło nie tak" + err);
      });
    props.refresh();
  }
  return (
    <Card style={{ width: "40%" }}>
      <Card.Body>
        <Form onSubmit={onSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Imię i nazwisko pracownika</Form.Label>
            <Form.Control
              type="text"
              placeholder="Wprowadz imię i nazwisko"
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Start zadania</Form.Label>
            <Form.Control
              type="time"
              placeholder="Przewidywany czas zadania"
              onChange={(e) => setTaskStart(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Koniec zadania</Form.Label>
            <Form.Control
              type="time"
              placeholder="Przewidywany czas zadania"
              onChange={(e) => setTaskEnd(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Type zadania</Form.Label>
            <Form.Control
              type="text"
              placeholder="Rodzaj zadania"
              onChange={(e) => setTaskType(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}
