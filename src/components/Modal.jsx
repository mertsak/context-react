import React from "react";

const Modal = ({ setIsOpen, weapon }) => {
  return (
    <>
      <div className="darkBG" onClick={() => setIsOpen(false)} />

      <div className="centered">
        <div className="modal">
          <div className="modalHeader">
            <h5 className="heading">{weapon.displayName} Skins</h5>
          </div>
          <button className="closeBtn" onClick={() => setIsOpen(false)}>
            x
          </button>
          <div className="modalContent">
            {weapon.skins.map((skin) => (
              <div key={skin.uuid} className="skin-container">
                <p>{skin.displayName}</p>
                <img src={skin.displayIcon} alt="Avatar" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
