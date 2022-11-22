import "./styles.css";
import React, { useState } from "react";
import FormStap1 from "./FormStap1";
import FormStap2 from "./FormStap2";
import FormStap3 from "./FormStap3";
import FormStap4 from "./FormStap4";
import FormStap5 from "./FormStap5";
import FormStapFinal from "./ForStapFinal";
import * as yup from "yup";

function Form() {
  const [page, setPage] = useState(0);

  const [formData, setFormData] = useState({
    name: yup.string().required(),
    horas: "",
    periudo: "",
    dias: "",
    email: yup.string().email().required(),
    tel: yup.number().required,
  });

  const FormTitles = [
    "Preencha os dados abaixo:",
    "Preencha os dados abaixo:",
    "Preencha os dados abaixo:",
    "Preencha os dados abaixo:",
    "Preencha os dados abaixo:",
    "Confirme seus dados antes do envio:",
  ];

  const SubTitles = [
    "1. Qual o seu nome?",
    "2. Quantas horas você tem para estudar por dia?",
    "3. Você prefere estudar em qual parte do dia?",
    "4. Você quer estudar quantos dias por semana? ",
    "5. Para finalizar seu cronograma nos informe um telefone válido:",
    "6. E um email válido:",
  ];

  const PageDisplay = () => {
    if (page === 0) {
      return <FormStap1 formData={formData} setFormData={setFormData} />;
    }
    if (page === 1) {
      return <FormStap2 formData={formData} setFormData={setFormData} />;
    }
    if (page === 2) {
      return <FormStap3 formData={formData} setFormData={setFormData} />;
    }
    if (page === 3) {
      return <FormStap4 formData={formData} setFormData={setFormData} />;
    } else if (page === 4) {
      return <FormStap5 formData={formData} setFormData={setFormData} />;
    } else {
      return <FormStapFinal formData={formData} setFormData={setFormData} />;
    }
  };

  return (
    <div className="form">
      <div className="form-container">
        <div className="header">
          <h1>{FormTitles[page]}</h1>
          <h3>{SubTitles[page]}</h3>
        </div>
        <div className="body">{PageDisplay()}</div>
        <div className="footer">
          <button
            disabled={page == 0}
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
          >
            Prev
          </button>
          <button
            onClick={() => {
              if (page === FormTitles.length - 1) {
                alert("FORM SUBMITTED");
                console.log(formData);
              } else {
                setPage((currPage) => currPage + 1);
              }
            }}
          >
            {page === FormTitles.length - 1 ? "Submit" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
}
export { Form };
