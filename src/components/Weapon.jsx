import React, { useState } from "react";
import Modal from "./Modal";

const Weapon = ({ weapon }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen && <Modal weapon={weapon} setIsOpen={setIsOpen} />}
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={weapon.displayIcon} alt="Avatar" />
          </div>
          <div className="flip-card-back">
            <span>click on weapon button for skins</span>
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="skins-btn"
            >
              Weapons Skins
            </button>
            <h3>{weapon.displayName}</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Weapon;
