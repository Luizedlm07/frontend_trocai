import './HeaderNotuser.css'
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
                    <Link className='Link' to="/login">
                        <li className="page_icon"><ion-icon id="headerIcon" name="person-outline"></ion-icon></li>
                        <p>Faça login</p>
                    </Link>
                    <Link className='Link' to="/cadastro">
                        <li className="page_icon"><ion-icon id="headerIcon" name="person-add-outline"></ion-icon></li>
                        <p>Cadastre-se</p>
                    </Link>
                    
                </ul>
            </nav>
      </header>
  
    )
};

export default HeaderNotuser;