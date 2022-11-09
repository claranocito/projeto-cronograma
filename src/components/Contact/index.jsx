import './styles.css'
import instagram from './icons/social-media/icon.png'
import facebook from './icons/social-media/facebook.png'
import youtube from './icons/social-media/youtube.png'
import twitter from './icons/social-media/twitter.png'

const Contact = () => {
    return (
        <div className='contact-container'>
           <div className='contacts'>
                <div className='link'><a href='https://atendimento.descomplica.com.br/hc/pt-br' target='_blank'>Central de Ajuda</a></div>
                <div className='link'><a href='https://descomplica.com.br/sobre/quem-somos/' target='_blank'>Quem Somos</a></div>
                <div className='link'><a href='https://descomplica.com.br/sobre/politica-de-privacidade/' target='_blank'>Politica de Privacidade</a></div>

                <div className='link'><a href='https://descomplica.com.br/sobre/termos-de-uso/' target='_blank'>Termos de Uso</a></div>
                <div className='link'><a href='https://boards.greenhouse.io/descomplica' target='_blank'>Trabalhe Conosco</a></div>
           </div>

           <div className='redes'>
           <a href='https://www.instagram.com/descomplica/' target='_blank'><img className='icone' src={instagram} /></a>
            <a href='https://www.facebook.com/descomplica.vestibulares' target='_blank'><img className='icone' src={facebook} /></a>
            <a href='https://www.youtube.com/channel/UCT0JugAtGmqiYkwxFZOwAtg' target='_blank'><img className='icone' src={youtube}/></a>
            <a href='https://twitter.com/descomplica' target='_blank'><img className='icone' src={twitter} /></a>
           </div>
        </div>
    )
}

export {Contact}