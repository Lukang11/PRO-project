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
  const [selectedOption, setSelectedOption] = useState("Monday");

  const url = "http://localhost:5001/api/workinfo/add";
  function onSubmit(e) {
    e.preventDefault();
    axios
      .put(url, { name, taskStart, taskEnd, taskType, selectedOption })
      .then((response) => {
        alert(response.status);
        props.refresh();
      })
      .catch((err) => {
        alert("Coś poszło nie tak" + err);
      });
  }

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const options = [
    { value: "Monday", label: "Monday" },
    { value: "Tuesday", label: "Tuesday" },
    { value: "Wednesday", label: "Wednesday" },
    { value: "Thursday", label: "Thursday" },
    { value: "Friday", label: "Friday" },
  ];
  return (
    <Card>
      <Card.Body>
        <Form onSubmit={onSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Imię i nazwisko pracownika</Form.Label>
            <Form.Control
              type="text"
              placeholder="Wprowadz imię i nazwisko"
              onChange={(e) => setName(e.target.value)}
              required
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
            <Form.Label>Typ zadania</Form.Label>
            <Form.Control
              type="text"
              placeholder="Rodzaj zadania"
              onChange={(e) => setTaskType(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label> Dzień </Form.Label>
            <select options={selectedOption} onChange={handleChange}>
              {options.map((option) => (
                <option value={option.value} defaultValue={options.at(0).value}>
                  {option.label}
                </option>
              ))}
            </select>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}
