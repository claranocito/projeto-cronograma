import './styles.css'
import Logo from './logo-desco.png'

const Header = () => {
    return (
        <div className="header">
            <img className='logo' src={Logo}/>
        </div>
    )
}

export {Header}