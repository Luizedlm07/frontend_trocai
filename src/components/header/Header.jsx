import './Header.css'
import '../../globalColors.module.css'
import { Link } from 'react-router-dom' 
import logo from '../../img/Logo.png';
/*import Usuario from '../../pages/Usuario';*/

function Header(){
    return (
        <header className='header-userlogged'>
            <div className="containerLogo">
                <Link to="/" className='toHome'>
                    <img className='logo-icon' src={logo} alt="TrocAí"/>
                </Link>
            </div>
            <div className="containerInput">
                <input type="text" className="pesquisa" placeholder=" Busque um produto" id=""/>  
            </div>
            <nav>
                <ul>
                    <Link to="/usuario" className='toUsuario'>
                        <li className="page_icon"><ion-icon name="person-outline"></ion-icon></li>
                    </Link>
                    <li className="page_icon"><ion-icon name="chatbubbles-outline"></ion-icon></li>
                    <li className="page_icon"><ion-icon name="star-outline"></ion-icon></li>
                    <li className="page_icon"><ion-icon name="notifications-outline"></ion-icon></li>
                </ul>
            </nav>
      </header>

    )
};

export default Header;