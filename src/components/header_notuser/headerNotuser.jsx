import './NavbarNotuser.css'
import '../../globalColors.module.css'
import { Link } from 'react-router-dom' 
import logo from '../../img/Logo.png';

function HeaderNotuser(){
    return (
        <header className='header-userlogged'>
            <div className="containerLogo">
                <Link to="/" className='toHome'>
                    <img className='logo-icon' src={logo} alt=""/>
                </Link>
            </div>
            <div className="containerInput">
                <input type="text" className="pesquisa" placeholder=" Busque um produto"/>  
            </div>
            <nav>
                <ul>
                    <li className="page_icon"><ion-icon name="person-outline"></ion-icon></li>
                    <li className="page_icon"><p>Faça login ou Cadastre-se</p></li>
                </ul>
            </nav>
      </header>
  
    )
};

export default HeaderNotuser;