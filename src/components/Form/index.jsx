import "./styles.css";
const Form = () => {
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
        <option value="manha">Manhã</option>
        <option value="tarde">Tarde</option>
        <option value="noite">Noite</option>
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
      <button className="button-form" type="">Criar meu cronograma</button>
    </div>
  );
};
export { Form };
