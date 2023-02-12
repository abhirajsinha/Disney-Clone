import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Details from "./components/Details";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path='/details/:id' element={<Details />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
