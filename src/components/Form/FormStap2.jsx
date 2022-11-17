import React from "react";

function FormStap2({ formData, setFormData }) {
  return (
    <div className="sign-up-container">
      <select
        type="option"
        value={formData.horas}
        onChange={(event) =>
          setFormData({ ...formData, horas: event.target.value })
        }
      >
        <option value="option1">Até 2 horas por dia</option>
        <option value="option2">Entre 2 e 4 horas por dia</option>
        <option value="option3">Mais de 4 horas por dia</option>
      </select>
    </div>
  );
}

export default FormStap2;
