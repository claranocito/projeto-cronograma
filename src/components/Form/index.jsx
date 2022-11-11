import "./styles.css";
import React, { useState } from "react";
import Modal from "../Modal";

const Form = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="container-form">
      <h3 className="h3-form"> Preecha os dados abaixo:</h3>
      <label className="enun-timeline">1. Qual seu nome?</label>
      <p></p>
      <input
        type="text"
        className="input"
        id="inputNome"
        placeholder="Digite seu nome"
      ></input>
      <p></p>
      <label className="enun-timeline">
        2. Quantas horas você tem para estudar por dia?
      </label>
      <p></p>
      <select className="input">
        <option value="ate-duas-horas">Até 2 horas</option>
        <option value="entre-duas-e-quatro-horas">Entre 2 e 4 horas</option>
        <option value="mais-de-quatro-horas">Mais de 4 horas</option>
      </select>
      <p></p>
      <label className="enun-timeline">
        3. Você prefere estudar em qual parte do dia?
      </label>
      <p></p>
      <input type="radio" className="periudoDia" id="manha"></input>
      <label>Manhã</label>
      <input type="radio" className="periudoDia" id="tarde"></input>
      <label>Tarde</label>
      <input type="radio" className="periudoDia" id="noite"></input>
      <label>Noite</label>
      <p></p>
      <label className="enun-timeline">
        4. Você quer estudar quantos dias na semana?
      </label>
      <p></p>
      <select className="input">
        <option value="doisDias">Até 2 dias</option>
        <option value="doisEquatroDias">Entre 2 e 4 dias</option>
        <option value="cincoDias">5 dias</option>
      </select>
      <p></p>
      <div>
        <button className="button-form" onClick={() => setOpenModal(true)}>
          Criar meu cronograma
        </button>
        <Modal open={openModal} onClose={() => setOpenModal(false)} />
      </div>
    </div>
  );
};
export { Form };
