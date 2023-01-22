import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { BsCheck2 } from "react-icons/bs";
import { TiMinus } from "react-icons/ti";
import { RxGear } from "react-icons/rx";
import EditWorkcard from "../EditWorkcard/EditWorkcard";

function Workcard(props) {
  const [clicked, setClicked] = useState(false);
  const [data, setData] = useState();
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
        <Button
          variant="primary"
          onClick={() => {
            setClicked((clicked) => !clicked);
            // props.edit(props.val._id);
          }}
        >
          <RxGear></RxGear>
        </Button>
      </Card.Body>
      <div>
        {clicked && props.val ? (
          <EditWorkcard
            id={props.val._id}
            val={props.val}
            refresh={props.refresh}
          />
        ) : null}
      </div>
    </div>
  );
}

export default Workcard;
