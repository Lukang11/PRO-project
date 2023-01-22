import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { BsCheck2 } from "react-icons/bs";

function Workcard(props) {
  const [done, setDone] = useState(0);

  return (
    <div onClick={props.isdone}>
      <Card.Body>
        <Card.Title>{props.val.name}</Card.Title>
        <Card.Subtitle>{props.val.task_start}</Card.Subtitle>
        <Card.Subtitle>{props.val.task_end}</Card.Subtitle>
        <Card.Text>{props.val.task_type}</Card.Text>
        <Button variant="primary">
          {props.valDone ? <BsCheck2 /> : "Zrobione"}
        </Button>
      </Card.Body>
    </div>
  );
}

export default Workcard;
