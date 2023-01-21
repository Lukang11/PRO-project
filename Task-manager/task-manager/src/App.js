import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Content from './Content/Content';
import Login from './Login/Login';
import Register from './Register/Register';
import TaskForm from "./TaskForm/TaskForm";
import './App.css';
import { Pricing } from './Pricing/Pricing';
// import DayList from "./DayList/DayList"



function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      // Sprawdź ważność tokenu
      axios.post('http://localhost:5001/api/verify', { token })
        .then(res => {
          if (res.data.isValid) {
            setIsLoggedIn(true);
          }
        })
        .catch(err => console.error(err));
    }
  }, []);

  return (
    <React.Fragment>
    {/* <BrowserRouter>
      <Routes>
        <Route path="/"></Route>
          <Route index element={<Content/>}></Route>
          <Route path="login" element={<Login/>}></Route>
          <Route path="register" element={<Register/>}></Route>
          <Route path="task-form" element={<TaskForm/>}></Route>
      </Routes>
    </BrowserRouter> */}
      <BrowserRouter>
        <Routes>
          <Route path='/'></Route>
          <Route index element={<Content />}></Route>
          <Route path='/pricing' element={<Pricing />}></Route>
          <Route path='login' element={<Login />}></Route>
          <Route path='register' element={<Register />}></Route>
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
