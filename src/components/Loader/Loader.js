import React from "react";
import "./Loader.css";

function Loader({ showText }) {
  return (
    <div>
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>

      {showText && (
        <div className="loadingTxt">
          <p>Loading...</p>
        </div>
      )}
    </div>
  );
}

export default Loader;
