import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Content from './Content/Content';
import ContentNoAuth from './Content/ContentNoAuth';
import Login from './Login/Login';
import Register from './Register/Register';
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import './App.css';
import { Pricing } from './Pricing/Pricing';
// import DayList from "./DayList/DayList"
// import TaskForm from "./TaskForm/TaskForm";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      // Sprawdź ważność tokenu
      axios.post('http://localhost:5001/api/verify', { token })
        .then(res => {
          if (res.data.isValid) {
            setIsLoggedIn(true);
            setUser(res.data.login);
          }
        })
        .catch(err => console.error(err));
    }
  }, []);
  
  return (
    <React.Fragment>
      <Header isLoggedIn={isLoggedIn} user={user}/>
        <BrowserRouter>
          <Routes>
            <Route path='/'></Route>
            <Route index element={isLoggedIn ? (<Content />) : (<ContentNoAuth />)}></Route>
            <Route path='pricing' element={<Pricing />}></Route>
            <Route path='login' element={<Login />}></Route>
            <Route path='register' element={<Register />}></Route>
          </Routes>
        </BrowserRouter>
      <Footer />
    </React.Fragment>
  );
  
}

export default App;
