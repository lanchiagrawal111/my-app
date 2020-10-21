import React from "react";
import { List, ListItem } from "./index";
import Navbar from "./Navbar" ;

function App() {
  return (
    <div className="main-container">
       <Navbar />
      <div className="left-right">
      <div className="left-div">
        <List />
      </div>
      <div className="right-div">
        <ListItem />
      </div>
      </div>
    </div>
  );
}

export default App;