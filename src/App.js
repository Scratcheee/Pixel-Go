import "./scss/custom.scss"
import Editor from "./components/Editor";
import LaunchPage from "./components/LaunchPage";
import React, { useState } from "react";

function App() {

  const [editing, setEditing] = useState(false)

  const startEditor = () => {
    
    setEditing(true)
    


  }

  return (
    <div className="App container">

      {editing ? (<Editor />) : (<LaunchPage startEditor={startEditor} />)}
      
    </div>
  );
}

export default App;
