import React from "react";
import Navig from "../Components/Navig/Navig.js";
import "./App.css";
import ScrollTop from 'react-scrolltop-button';



function App() {
  return (
    <div className="App">
      <Navig />
      <ScrollTop
        id="scroll"
      />
    </div>
  );
}

export default App;
