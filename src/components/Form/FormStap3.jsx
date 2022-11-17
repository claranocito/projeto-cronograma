import React from "react";

function FormStap3({ formData, setFormData }) {
  return (
    <div className="sign-up-container">
      <select
        type="option"
        value={formData.periudo}
        onChange={(event) =>
          setFormData({ ...formData, periudo: event.target.value })
        }
      >
        <option value="option1">Manhã</option>
        <option value="option2">Tarde</option>
        <option value="option3">Noite</option>
      </select>
    </div>
  );
}

export default FormStap3;
