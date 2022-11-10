import React from "react";

const Modal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div onClick={onClose} className="overlay">
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="modalContainer"
      >
        <div className="modalRight">
          <h2 onClick={onClose} className="closeBtn">
            x
          </h2>
          <div className="content">
            <h2>
              Por ultimo, para finalizar seu cronograma, nos informe seu email e
              telefone:
            </h2>
            <label>Email:</label>
            <input type="email" className="email"></input>
            <label>Telefone (00-000000000):</label>
            <input type="tel" className="phone"></input>
          </div>
          <div className="btnContainer">
            <button type="submit" value="Submit" className="btnPrimary">
              Pronto!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
