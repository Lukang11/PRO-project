import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { BsCheck2 } from "react-icons/bs";
import { TiMinus } from "react-icons/ti";

function Workcard(props) {
  return (
    <div>
      <Card.Body>
        <Card.Title>{props.val.name}</Card.Title>
        <Card.Subtitle>{props.val.task_start}</Card.Subtitle>
        <Card.Subtitle>{props.val.task_end}</Card.Subtitle>
        <Card.Text>{props.val.task_type}</Card.Text>
        <Button variant="primary" onClick={props.isdone}>
          {props.valDone ? <BsCheck2 /> : "Zrobione"}
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            props.remove(props.val._id);
          }}
        >
          <TiMinus></TiMinus>
        </Button>
      </Card.Body>
    </div>
  );
}

export default Workcard;
