
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Content from "./Content/Content";
import Login from "./Login/Login";
import Register from "./Register/Register";
import TaskForm from "./TaskForm/TaskForm";
import "./App.css"
// import DayList from "./DayList/DayList"


import React from "react";

function App() {
  return (
    <React.Fragment>
    <BrowserRouter>
      <Routes>
        <Route path="/"></Route>
          <Route index element={<Content/>}></Route>
          <Route path="login" element={<Login/>}></Route>
          <Route path="register" element={<Register/>}></Route>
          <Route path="task-form" element={<TaskForm/>}></Route>
      </Routes>
    </BrowserRouter>
    </React.Fragment>
        );
}

export default App;