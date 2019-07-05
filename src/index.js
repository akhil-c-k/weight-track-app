import React from "react";
import ReactDOM from "react-dom";
import bootstrap from "bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Weightrack from "../src/components/containers/weightrack-container";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Weightrack />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
