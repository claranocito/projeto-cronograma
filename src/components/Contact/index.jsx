import './styles.css'

const Contact = () => {
    return (
        <div className='contact-container'>
           <div className='contacts'>
           <a href='#'>Central de Ajuda</a>
            <a href='#'>Quem Somos</a>
            <a href='#'>Politica de Privacidade</a>
            <a href='#'>Termos de Uso</a>
            <a href='#'>Trabalhe Conosco</a>
           </div>

           <div className='redes'>
           <a>Instagram</a>
            <a>Facebook</a>
            <a>Youtube</a>
            <a>Twitter</a>
           </div>
        </div>
    )
}

export {Contact}