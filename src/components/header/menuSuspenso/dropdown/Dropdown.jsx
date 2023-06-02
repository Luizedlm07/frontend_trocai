import React from 'react';
import '../../../../globalColors.module.css';
import './Dropdown.css';
import Mensagens from './menu/Mensagens';

function Dropdown (clickOn) {
    const { activeMenu } = clickOn;
    /*const [favoritos, setFavoritos] = useState({});
    const [notificacoes, setNotificacoes] = useState({});*/
    let favoritos = 'a'
    let notificacoes = 'b'





    return (
        <div className='dropdownInvisible'> 
            <div className='dropdown'>
                {activeMenu === 'mensagens' && (
                    <Mensagens />
                )
                }
                {activeMenu === 'favoritos' && (
                <ul className='dropdown-menu'>
                    <p>favoritos</p>
                    <li className="dropdown-option" key={favoritos.id}>
                        <h3 className='nomeUsuario'>{favoritos.nome}</h3>
                        <p className='ultimaMensagem'>{favoritos.conteudo}</p>
                    </li>
                </ul>
                )}
                {activeMenu === 'notificacoes' && (
                <ul className='dropdown-menu'>
                    <p>notificacoes</p>
                    <li className="dropdown-option" key={notificacoes.id}>
                        <h3 className='nomeUsuario'>{notificacoes.nome}</h3>
                        <p className='ultimaMensagem'>{notificacoes.conteudo}</p>
                    </li>
                </ul>
                )}
            </div>
        </div>
    )
}

export default Dropdown;