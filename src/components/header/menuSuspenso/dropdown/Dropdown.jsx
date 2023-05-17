import React, { useState, useEffect} from 'react';
import '../../../../globalColors.module.css';
import './Dropdown.css';

function Dropdown (clickOn) {
    const { activeMenu } = clickOn;
    const [mensagens, setMensagens] = useState({});
    const [favoritos, setFavoritos] = useState({});
    const [notificacoes, setNotificacoes] = useState({});

    console.log("drop", activeMenu);
    /*

    */

    useEffect(() => {
        fetch('')
            .then(response => response.json())
            .then(data => setMensagens(data));
    }, []);

    useEffect(() => {
        fetch('')
            .then(response => response.json())
            .then(data => setFavoritos(data));
    }, []);

    useEffect(() => {
        fetch('')
            .then(response => response.json())
            .then(data => setNotificacoes(data));
    }, []);


    return (
        <div className='dropdownInvisible'> 
            <div className='dropdown'>
                {activeMenu === 'mensagens' && (
                <ul className='dropdown-menu'>
                    <p>mensagens</p>
                    <li className="dropdown-option" key={mensagens.id}>
                        <h3 className='nomeUsuario'>{mensagens.nome}</h3>
                        <p className='ultimaMensagem'>{mensagens.conteudo}</p>
                    </li>
                </ul>
                )}
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