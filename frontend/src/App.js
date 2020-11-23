import React from "react";
import "./styles.css";
import Usuarios from "./components/Usuarios";

export default function App() {
  return (
    <div className="App">
      <Usuarios numero={4} />
    </div>
  );
}
