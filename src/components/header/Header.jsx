import React, { useState, useEffect, useRef } from 'react';
import './Header.css';
import '../../globalColors.module.css';
import { Link } from 'react-router-dom';
import logo from '../../img/Logo.png';
import Dropdown from './menuSuspenso/dropdown/Dropdown';

/*import Usuario from '../../pages/Usuario';*/

function Header(){
    const [isOpen, setIsOpen] = useState(false);
    const onClick = () => setIsOpen(!isOpen)

    const [activeMenu, setActiveMenu] = useState(null);
    const dropdownRef = useRef(null)
    const handleClick = (menu) => {
        setActiveMenu(menu);
    }
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
    
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dropdownRef]);

    console.log("0", isOpen)

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
                    <li onClick={onClick} className="page_icon">
                        <ion-icon onClick={() => handleClick('favoritos')} name="star-outline"></ion-icon>
                    </li>
                    <li onClick={onClick} className="page_icon">
                        <ion-icon onClick={() => handleClick('mensagens')} name="chatbubbles-outline"></ion-icon>
                    </li>
                    <li onClick={onClick} className="page_icon">
                        <ion-icon onClick={() => handleClick('notificacoes')} name="notifications-outline"></ion-icon>
                    </li>
                </ul>

            </nav>
            {isOpen && (
            <div ref={dropdownRef}>
                <Dropdown  
                    activeMenu={activeMenu} 
                />
            </div>
            )}
      </header>

    )
};

export default Header;