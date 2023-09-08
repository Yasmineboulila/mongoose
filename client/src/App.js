import {BrowserRouter, Routes,Route } from "react-router-dom"

import './App.css';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { get_post } from "./redux/action/action";
function App() {
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(get_post())
  },[dispatch])
  const post=useSelector((state)=>state.post)
  return (
    <div className="App">
      {console.log(post)} 
     
       
    </div>
  );
}

export default App;
