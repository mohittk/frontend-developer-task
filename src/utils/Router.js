import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Home from '../pages/Home'

export default function Router() {
  return (
    <>
    
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/signup" element={<Signup />}></Route>
        
        </Routes>
      </BrowserRouter>
    </>
  );
}
