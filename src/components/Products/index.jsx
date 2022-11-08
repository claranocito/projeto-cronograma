import './styles.css'

const Products = () => {
    return (
        <div className="products-container">
            <div className='products'>
            <h2 className='h2-products'>Enem e Vestibulares</h2>
            <ul className='list'>
                <li>Enem</li>
                <li>Medicina</li>
                <li>Inscrições Enem</li>
                <li>Gabarito Enem</li>
                <li>Questões Gabarito Enem</li>
                <li>Simulador Sisu</li>
                <li>Simulador Enem</li>
                <li>Aprovados Enem</li>
            </ul>
            </div>

            <div className='products'>
            <h2 className='h2-products'>Graduação</h2>
            <ul className='list'>
                <li>Educação</li>
                <li>Engenharia</li>
                <li>Gestão</li>
                <li>Tecnologia</li>
                <li>Processo Seletivo </li>
                <li>Faculdade</li>
                <li>Teste Gratuito Faculdade</li>
            </ul>
            </div>

            <div className='products'>
            <h2 className='h2-products'>Pós - Graduação</h2>
            <ul className='list'>
                <li>Pós em Direito</li>
                <li>Pós em Direito</li>
                <li>Pós em Educação</li>
                <li>Pós em Tecnologia</li>
                <li>Pós em Marketing</li>
                <li>Pós em Engenharia</li>
                <li>Pós em Saúde</li>
            </ul>
            </div>

            <div className='products'>
            <h2 className='h2-products'>Concursos Públicos</h2>
            <ul className='list'>
                <li>Concursos Jurídicos</li>
                <li>Concursos Analistas</li>
                <li>Concursos Policiais</li>
            </ul>
        </div>
        </div>
    )
}

export {Products}