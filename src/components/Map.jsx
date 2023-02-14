import React from "react";

const Map = ({ map }) => {
  return (
    <>
      <div className="flip-card map-flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={map.splash} alt="Avatar" />
          </div>
          <div className="flip-card-back">
            <h3>{map.displayName}</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Map;
