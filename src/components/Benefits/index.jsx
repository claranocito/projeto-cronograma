import './styles.css'
import React from 'react'
import './img-benefits.png'

const Benefits = () => {
    return (
        <div className='benefits-container'>
            <div className='benefits-text'>
                <h2 className='h2-benefits'><strong>BENEFÍCIOS</strong> DE TER UM CRONOGRAMA DE ESTUDOS</h2>
                <ul>
                    <li>melhora da gestão de tempo;</li>
                    <li>maior aproveitamento dos estudos;</li>
                    <li>ânimo para continuar a estudar com acompanhamento dos avanços obtidos;</li>
                    <li>aprendizado sobre organização para projetos futuros.</li> 
                </ul>
            </div>

            <div className='benefits-img'>
                <img src= "img-benefits.png" />
            </div>
        </div>
    )
}

export {Benefits}