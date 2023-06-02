import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './Header.css';
import '../../globalColors.module.css';
import { Link } from 'react-router-dom';
import logo from '../../img/Logo.png';
import Dropdown from './menuSuspenso/dropdown/Dropdown';

/*import Usuario from '../../pages/Usuario';*/

function Header(){
    const [isOpen, setIsOpen] = useState(false);
    const onClick = () => setIsOpen(!isOpen);
    const [activeMenu, setActiveMenu] = useState(null);
    const dropdownRef = useRef(null)
    const [pesquisa, setPesquisa] = useState('');

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

    const handleInputChange = (event) => {
        setPesquisa(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try {
          const response = await axios.get(`http://localhost:8000/produto/pesquisar_itens?pesquisa=${pesquisa}`);
          console.log(response.data);
        } catch (error) {
          console.error(error);
        }
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
          handleSubmit(event);
        }
    };

    return (
        <header className='header-userlogged'>
            <div className="containerLogo">
                <Link to="/" className='toHome'>
                    <img className='logo-icon' src={logo} alt="TrocAí"/>
                </Link>
            </div>
            <div className="containerInput">
                <input 
                    type="text" 
                    className="pesquisa" 
                    placeholder=" Busque um produto"           
                    id="pesquisa"
                    name="pesquisa"
                    value={pesquisa}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}/>  
            </div>
            <nav>
                <ul>
                    <Link to="/usuario" className='toUsuario'>
                        <li className="page_icon"><ion-icon id="headerIcon" name="person-outline"></ion-icon></li>
                    </Link>
                    <li onClick={onClick} className="page_icon">
                        <ion-icon id="headerIcon" onClick={() => handleClick('favoritos')} name="star-outline"></ion-icon>
                    </li>
                    <li onClick={onClick} className="page_icon">
                        <ion-icon id="headerIcon" onClick={() => handleClick('mensagens')} name="chatbubbles-outline"></ion-icon>
                    </li>
                    <li onClick={onClick} className="page_icon">
                        <ion-icon id="headerIcon" onClick={() => handleClick('notificacoes')} name="notifications-outline"></ion-icon>
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