import React from "react";

function FormStap5({ formData, setFormData }) {
  return (
    <div className="personal-info-container">
      <input
        type="tel"
        placeholder="Digite seu telefone com ddd..."
        value={formData.tel}
        onChange={(event) =>
          setFormData({ ...formData, tel: event.target.value })
        }
      />
    </div>
  );
}

export default FormStap5;
