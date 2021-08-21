import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [people, setPeople] = useState([
    { name: "Lebron James", url: "", age: 20, notes: "Hi" },
    { name: "Kobe Bryant", url: "", age: 36 },
  ]);

  return (
    <div className="App">
      <h1>People invited to my party</h1>
    </div>
  );
}

export default App;
