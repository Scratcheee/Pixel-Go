import "./scss/custom.scss"
import Editor from "./components/Editor";
import LaunchPage from "./components/LaunchPage";
import React, { useState } from "react";

function App() {

  //Launch the launchpage on startup, switch to the editor when button is pressed on the launch page.
  const [editing, setEditing] = useState(false)
  const startEditor = () => { 
    setEditing(true)
}

  return (
    <div className="App">

      {editing ? (<Editor />) : (<LaunchPage  startEditor={startEditor} />)}
      
    </div>
  );
}

export default App;
