import './styles.css'
import Img from './steps.png'

const Steps = () => {
    return (
        <div className='steps-container'>
            <div className='steps-img'>
                <img src={Img} />
            </div>

            <div className='steps-text'>
                <h2 className='h2-steps'>OS <strong>TRÊS PASSOS</strong> PARA MONTAR UM CRONOGRAMA DE ESTUDOS</h2>
                <h3><strong>1.</strong> Conheça sua rotina</h3>
                <p className='p-steps'>Defina o horário que você acorda,
                toma café da manhã, almoça, janta e lancha, 
                vai à escola ou ao trabalho. </p>

                <h3><strong>2.</strong> Defina seus horários de estudos</h3>
                <p className='p-steps'>Preencha  os horários vagos com as aulas que irá assistir. É importante identificar qual é o melhor horário de estudo para você.</p>

                <h3><strong>3.</strong> Descanso e lazer</h3>
                <p className='p-steps'>Ninguém é uma máquina de estudar. 
                Adicione no seu cronograma períodos para descansar, além de separar outros momentos para o lazer.</p>
            </div>

            
        </div>
    )
}

export {Steps}