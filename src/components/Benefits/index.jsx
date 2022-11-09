import './styles.css'
import Img from './img-benefits.png'

const Benefits = () => {
    return (
        <div className='benefits-container'>
            <div className='benefits-text'>
                <h2 className='h2-benefits'><strong>BENEFÍCIOS</strong> DE TER UM CRONOGRAMA DE ESTUDOS</h2>
                <ul className='topics'>
                    <li>melhora da gestão de tempo;</li>
                    <li>maior aproveitamento dos estudos;</li>
                    <li>ânimo para continuar a estudar com acompanhamento dos avanços obtidos;</li>
                    <li>aprendizado sobre organização para projetos futuros.</li> 
                </ul>
            </div>

            <div className='benefits-img'>
                <img className='img-b' src={Img} />
            </div>
        </div>
    )
}

export {Benefits}