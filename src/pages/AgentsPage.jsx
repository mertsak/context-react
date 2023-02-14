import React from "react";
import Agent from "../components/Agent";
import { useContext } from "react";
import ValoContext from "../context/ValoContext.js";

const AgentPage = () => {
  const { agents } = useContext(ValoContext);

  return (
    <div className="agents-container">
      {agents.map((agent) => (
        <div className="agent-container" key={agent.uuid}>
          <Agent agent={agent}></Agent>
        </div>
      ))}
    </div>
  );
};

export default AgentPage;
