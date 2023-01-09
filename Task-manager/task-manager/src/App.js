import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Content from "./Content/Content";
import Login from "./Login/Login";
import Register from "./Register/Register";
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
}

export default App;