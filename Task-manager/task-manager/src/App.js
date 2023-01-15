<<<<<<< HEAD

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Content from "./Content/Content";
import Login from "./Login/Login";
import Register from "./Register/Register";
import TaskForm from "./TaskForm/TaskForm";
import "./App.css"
=======
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Content from './Content/Content';
import Login from './Login/Login';
import Register from './Register/Register';
import './App.css';
>>>>>>> ebef6804ba200e9c2b95f8ec2d822d1283790192
// import DayList from "./DayList/DayList"

import React from 'react';
import { Pricing } from './Pricing/Pricing';

function App() {
  return (
    <React.Fragment>
<<<<<<< HEAD
    <BrowserRouter>
      <Routes>
        <Route path="/"></Route>
          <Route index element={<Content/>}></Route>
          <Route path="login" element={<Login/>}></Route>
          <Route path="register" element={<Register/>}></Route>
          <Route path="task-form" element={<TaskForm/>}></Route>
      </Routes>
    </BrowserRouter>
=======
      <BrowserRouter>
        <Routes>
          <Route path='/'></Route>
          <Route index element={<Content />}></Route>
          <Route path='/pricing' element={<Pricing />}></Route>
          <Route path='login' element={<Login />}></Route>
          <Route path='register' element={<Register />}></Route>
        </Routes>
      </BrowserRouter>
>>>>>>> ebef6804ba200e9c2b95f8ec2d822d1283790192
    </React.Fragment>
  );
}

export default App;
