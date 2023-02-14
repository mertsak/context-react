import axios from "axios";
import { createContext, useState, useEffect } from "react";

const ValoContext = createContext();

const API = "https://valorant-api.com/v1/";

export const ValoProvider = ({ children }) => {
  const [agents, setAgents] = useState([]);
  const [maps, setMaps] = useState([]);
  const [weapons, setWeapons] = useState([]);

  useEffect(() => {
    const getAgentsData = async () => {
      const { data: agentsData } = await axios.get(
        `${API}agents?isPlayableCharacter=true`
      );
      setAgents(agentsData.data);
    };
    getAgentsData();
  }, []);

  useEffect(() => {
    const getMapsData = async () => {
      const { data: mapsData } = await axios.get(`${API}maps`);
      setMaps(mapsData.data);
    };
    getMapsData();
  }, []);

  useEffect(() => {
    const getWeaponsData = async () => {
      const { data: weaponsData } = await axios.get(`${API}weapons`);
      setWeapons(weaponsData.data);
    };
    getWeaponsData();
  }, []);

  return (
    <>
      <ValoContext.Provider
        value={{ agents, setAgents, maps, setMaps, weapons, setWeapons }}
      >
        {children}
      </ValoContext.Provider>
    </>
  );
};

export default ValoContext;
