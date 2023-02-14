import React from "react";
import ValoContext from "../context/ValoContext";
import { useContext } from "react";
import Weapon from "../components/Weapon";

const WeaponsPage = () => {
  const { weapons } = useContext(ValoContext);

  return (
    <div className="weapons-container">
      {weapons.map((weapon) => (
        <div key={weapon.uuid} className="weapon-container">
          <Weapon weapon={weapon} />
        </div>
      ))}
    </div>
  );
};

export default WeaponsPage;
