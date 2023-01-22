import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import axios from "axios";

export default function EditWorkcard(props) {
  const [name, setName] = useState(props.val.name);
  const [taskStart, setTaskStart] = useState(props.val.task_start);
  const [taskEnd, setTaskEnd] = useState(props.val.task_end);
  const [taskType, setTaskType] = useState(props.val.task_type);
  const url = `http://localhost:5001/api/workinfo/edit/${props.id}`;
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
    <Card>
      <Card.Body>
        <Form onSubmit={onSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Imię i nazwisko pracownika</Form.Label>
            <Form.Control
              type="text"
              defaultValue={`${props.val.name}`}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Start zadania</Form.Label>
            <Form.Control
              type="time"
              defaultValue={`${props.val.task_start}`}
              onChange={(e) => setTaskStart(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Koniec zadania</Form.Label>
            <Form.Control
              type="time"
              defaultValue={`${props.val.task_end}`}
              onChange={(e) => setTaskEnd(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Typ zadania</Form.Label>
            <Form.Control
              type="text"
              defaultValue={`${props.val.task_type}`}
              onChange={(e) => setTaskType(e.target.value)}
              required
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
