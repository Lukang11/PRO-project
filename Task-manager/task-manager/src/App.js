import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Content from './Content/Content';
import Login from './Login/Login';
import Register from './Register/Register';
import './App.css';
// import DayList from "./DayList/DayList"

import React from 'react';
import { Pricing } from './Pricing/Pricing';

function App() {
  return (
    <React.Fragment>
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
