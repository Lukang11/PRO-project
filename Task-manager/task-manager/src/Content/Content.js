import React, { useState, useRef, useEffect } from "react";
import "./ContentStyle.css";
import Workcard from "../WorkCard/Workcard";
import DayList from "../DayList/DayList";
import axios from "axios";
import AddWorkcard from "../AddWorkcard/AddWorkcard";
import { AiOutlinePlus } from "react-icons/ai";

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

  const editWorkcard = (ele_id) => setId((ele_id) => ele_id);

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
      <DayList />
      <button onClick={openAddForm}>
        <AiOutlinePlus />
      </button>
      <div style={{ width: "100%" }}>
        {add ? <AddWorkcard refresh={refreshWorkcards} /> : null}
      </div>
      {workInfo.map((value) => (
        <div className="hexagon">
          <Workcard
            val={value}
            isdone={isDone}
            valDone={done}
            remove={removeWorkcard}
            refresh={refreshWorkcards}
          ></Workcard>
        </div>
      ))}
      {console.log(clicked)}
    </>
  );
}

export default Content;
