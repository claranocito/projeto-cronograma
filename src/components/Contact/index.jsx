import './styles.css'
import instagram from './icons/social-media/icon.png'
import facebook from './icons/social-media/facebook.png'
import youtube from './icons/social-media/youtube.png'
import twitter from './icons/social-media/twitter.png'

const Contact = () => {
    return (
        <div className='contact-container'>
           <div className='contacts'>
            <div className='oi'><a href='https://atendimento.descomplica.com.br/hc/pt-br' target='_blank'>Central de Ajuda</a></div>
            <div className='oi'><a href='https://descomplica.com.br/sobre/quem-somos/' target='_blank'>Quem Somos</a></div>
            <div className='oi'><a href='https://descomplica.com.br/sobre/politica-de-privacidade/' target='_blank'>Politica de Privacidade</a></div>
            <div className='oi'><a href='https://descomplica.com.br/sobre/termos-de-uso/' target='_blank'>Termos de Uso</a></div>
            <div className='oi'><a href='https://boards.greenhouse.io/descomplica' target='_blank'>Trabalhe Conosco</a></div>
           </div>

           <div className='redes'>
           <a><img className='icone' src={instagram} /></a>
            <a><img className='icone' src={facebook} /></a>
            <a><img className='icone' src={youtube}/></a>
            <a><img className='icone' src={twitter} /></a>
           </div>
        </div>
    )
}

export {Contact}