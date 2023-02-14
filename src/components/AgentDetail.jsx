import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import { useNavigate } from "react-router-dom";

const AgentDetail = ({ agentDetail }) => {
  const { isDarkMode } = useContext(ThemeContext);
  const navigate = useNavigate();
  return (
    <>
      {agentDetail && (
        <>
          <div
            className={
              isDarkMode === true
                ? "agent-detail-container dark"
                : "agent-detail-container light"
            }
          >
            <button
              onClick={() => navigate("/agents")}
              className="back-main"
              type="button"
            >
              back to all agents
            </button>
            <img
              className="agent-img"
              src={agentDetail.fullPortrait}
              alt="Avatar"
            />
            <div className="agent-detail-inner">
              <h1>{agentDetail.displayName} skill set</h1>
              {agentDetail.abilities.map((detail, key) => {
                return (
                  <div className="ability-box-container" key={key}>
                    <img src={detail.displayIcon} alt="Avatar" />

                    <div className="ability-desc">
                      <p className="abilit-slot-con">
                        <span>Ability Slot: {detail.slot}</span>
                        <span className="ability-slot">
                          Ability Name: {detail.displayName}
                        </span>
                      </p>
                      <p>
                        <span>Ability Description:</span>
                        {detail.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default AgentDetail;
