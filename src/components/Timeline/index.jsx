import "./styles.css";
import { Form } from "../Form";
import Modal from "../Modal";

const Timeline = () => {
  return (
    <div className="container-timeline">
      <h2 className="h2-timeline">
        MONTE AQUI SEU <strong>CRONOGRAMA DE ESTUDOS PERFEITO</strong>
      </h2>
      <div className="timeline">
        <Form />
        <Modal />
      </div>
    </div>
  );
};

export { Timeline };
