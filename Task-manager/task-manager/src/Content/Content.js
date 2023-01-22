import React, { useState, useRef, useEffect } from "react";
import "./ContentStyle.css";
import Workcard from "../WorkCard/Workcard";
import DayList from "../DayList/DayList";
import axios from "axios";
import AddWorkcard from "../AddWorkcard/AddWorkcard";
import { AiOutlinePlus } from "react-icons/ai";
import "../WorkCard/Workcard.css";
import Button from "react-bootstrap/esm/Button";

function Content() {
  const url = "http://localhost:5001/api/workinfo";

  const [workInfo, setWorkInfo] = useState([]);
  const [done, setDone] = useState();
  const [clicked, setClicked] = useState();
  const [add, setAdd] = useState(false);
  const [refresh, setRefresh] = useState();
  const [id, setId] = useState();

  const openAddForm = (add) => {
    setAdd((add) => !add);
  };

  const isDone = (done) => {
    setDone((done) => !done);
  };
  const isClicked = (clicked) => {
    setClicked((clicked) => !clicked);
  };
  const setDay = (day) => {
    setWorkInfo((workInfo) => workInfo.filter((item) => item.day !== day));
  };

  const removeWorkcard = (id) => {
    // setWorkInfo((workInfo) => workInfo.filter((item) => item._id !== id));
    axios
      .delete(`http://localhost:5001/api/workinfo/del/${id}`)
      .then((response) => {
        refreshWorkcards(refresh);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const refreshWorkcards = (refresh) => {
    setRefresh((refresh) => !refresh);
  };

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setWorkInfo(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setWorkInfo(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [refresh]);

  return (
    <>
      <DayList day={setDay} />
      <Button className="button" variant="dark" onClick={openAddForm}>
        <AiOutlinePlus />
      </Button>
      <div className="addForm">
        {add ? (
          <AddWorkcard className="addForm" refresh={refreshWorkcards} />
        ) : null}
      </div>
      <div className="card-list">
        {workInfo.map((value) => (
          <div className="card">
            <Workcard
              val={value}
              isdone={isDone}
              valDone={done}
              remove={removeWorkcard}
              refresh={refreshWorkcards}
            ></Workcard>
          </div>
        ))}
      </div>
    </>
  );
}

export default Content;
