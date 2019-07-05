import React from "react";
import "../styles/weightinput.scss";
import "../";
const Weightinput = () => {
  return (
    <div className="weightinput">
      <div className="form-container row">
        <form>
          <input type="text" placeholder="enter weight" />
          <input type="date" placeholder="choose date" />
        </form>
      </div>
    </div>
  );
};

export default Weightinput;
