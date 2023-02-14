import React from "react";
import { Link } from "react-router-dom";

const Agent = ({ agent }) => {
  return (
    <>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={agent.fullPortrait} alt="Avatar" />
          </div>
          <div className="flip-card-back">
            <span>click on agent name for details</span>
            <Link className="agent-displayname" to={`${agent.uuid}`}>{agent.displayName}</Link>
            <p>{agent.description}</p>
            <h3>{agent.role.displayName}</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Agent;
