import React from "react";
import "../containers/weightrack.scss";
import Weightinput from "../weightinput";
import bootstrap from "bootstrap";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
class Weightrack extends React.Component {
  render() {
    return (
      <div className="container ">
        {/* container for all component */}

        <div className="row">
          <Weightinput />
        </div>
        <div className="row">One of three columns</div>
      </div>
    );
  }
}

export default Weightrack;
