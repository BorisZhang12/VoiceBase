import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navigation from "./pages/Navigation";
import Download from "./pages/Download";
import React from "react";
import RecordingMenu from "./pages/RecordingMenu";
import Home from "./pages/Home";

function App() {

  return (
      <div>
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Navigation/>}>
                      <Route path="/" element={<Home/>}/>
                      <Route path="/recordingmenu" element={<RecordingMenu/>}/>
                      <Route path="/download" element={<Download/>}/>
                  </Route>
              </Routes>
          </BrowserRouter>


      </div>
  )
}

export default App;