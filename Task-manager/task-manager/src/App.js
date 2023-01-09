import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Content from "./Content/Content";
import Login from "./Login/Login";
import Register from "./Register/Register";
<<<<<<< HEAD
import DayList from "./DayList/DayList"

function App() {
  return (
    <div className="App">
      <Header></Header>
      <DayList></DayList>
      <Content/>
      <Footer></Footer>
    </div>
  );
=======
import React from "react";

function App() {
  return (
    <React.Fragment>
    <BrowserRouter>
      {/* <div className="App">
        <Header></Header>
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/login" element={<Login />}>
            <Route path="/register" element={<Register />}>
            </Routes>
            <Footer></Footer>
          </div> */}
      <Routes>
        <Route path="/"></Route>
          <Route index element={<Content/>}></Route>
          <Route path="login" element={<Login/>}></Route>
          <Route path="register" element={<Register/>}></Route>
      </Routes>
    </BrowserRouter>
    </React.Fragment>
        );
>>>>>>> c28a9c904024e006a3fe47102e887d25da1c31db
}

export default App;