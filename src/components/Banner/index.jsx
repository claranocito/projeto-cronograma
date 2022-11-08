import './styles.css'

const Banner = () => {
    return (
        <div>
            <div className="banner-container">
                <h1 className='h1-banner'>CRONOGRAMA DE ESTUDOS PERFEITO</h1>
                <div className="text-container">
                    <p className="p-banner">
                    Montar um cronograma de estudos não é fácil né? Ele deve ser específico e adequado ao tempo que você possui para estudar. O cronograma perfeito é o seu cronograma. <strong>Pensando nisso e usando nossas dicas, desenvolvemos um gerador de cronograma de estudos perfeito para você!</strong>
                    </p>
                </div>
                <button className="button-banner">
                Criar meu cronograma
                </button>
            </div>
        </div>
    )
}

export {Banner}