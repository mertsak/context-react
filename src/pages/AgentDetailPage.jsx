import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import AgentDetail from "../components/AgentDetail";

const AgentDetailPage = () => {
  const { uuid } = useParams();
  const [agentDetail, setAgentDetail] = useState();

  const getAgentDetail = async () => {
    const { data: agentDetail } = await axios.get(
      `https://valorant-api.com/v1/agents/${uuid}`
    );
    setAgentDetail(agentDetail.data);
  };

  useEffect(() => {
    getAgentDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="detailpage-container">
        <AgentDetail agentDetail={agentDetail} />
      </div>
    </>
  );
};

export default AgentDetailPage;
