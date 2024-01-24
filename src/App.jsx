import React from "react";
import {Routes,Route, BrowserRouter} from "react-router-dom";
import Home from "./pages/Home";
import Delivery from "./pages/Delivery";
import Storage from "./pages/Storage";

export default function App(){
  return(
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" exact element= {<Home/>}></Route>
        <Route path="/Delivery" exact element= {<Delivery/>}></Route>
        <Route path="/Storage" exact element= {<Storage/>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}