import React, { useState, useRef, useEffect } from "react";
import "./ContentStyle.css";
import Workcard from "../WorkCard/Workcard";
import DayList from "../DayList/DayList";
import axios from "axios";
import { BsCheck2 } from "react-icons/bs";

function Content() {
  const url = "http://localhost:5001/api/workinfo";

  const [workInfo, setWorkInfo] = useState([]);
  const [done, setDone] = useState();

  const isDone = (done) => {
    setDone((done) => !done);
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

  return (
    <>
      <DayList />
      {workInfo.map((value) => (
        <div className="hexagon">
          <Workcard val={value} isdone={isDone} valDone={done}></Workcard>
          <BsCheck2></BsCheck2>
        </div>
      ))}
      {console.log(done)}
    </>
  );
}

export default Content;
