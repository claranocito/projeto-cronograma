import React from "react";

function FormStap4({ formData, setFormData }) {
  return (
    <div className="sign-up-container">
      <select
        type="option"
        placeholder="Quantidade de horas entre 2 e 5"
        value={formData.dias}
        onChange={(event) =>
          setFormData({ ...formData, dias: event.target.value })
        }
      >
        <option value="option1">Até 2 dias por semana</option>
        <option value="option2">Entre 2 e 4 dias por semana</option>
        <option value="option3">5 dias por semana</option>
      </select>
    </div>
  );
}

export default FormStap4;
