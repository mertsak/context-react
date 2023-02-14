import Maps from "../components/Map";
import { useContext } from "react";
import ValoContext from "../context/ValoContext.js";

const MapsPage = () => {
  const { maps } = useContext(ValoContext);

  return (
    <div className="maps-container">
      {maps.map((map) => (
        <div className="map-container">
          <Maps map={map}></Maps>
        </div>
      ))}
    </div>
  );
};

export default MapsPage;
