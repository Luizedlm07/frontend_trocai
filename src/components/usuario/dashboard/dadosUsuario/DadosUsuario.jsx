import React, { useState, useEffect } from 'react';
import './DadosUsuario.css';
import '../../../../globalColors.module.css';
import FormInserirItem from './inserirItem/FormInserirItem';


function DadosUsuario() {
    const [isOpen, setIsOpen] = useState(false);
    const onClick = () => setIsOpen(!isOpen)
    const [user, setUser] = useState({});

    useEffect(() => {
        fetch('')
            .then(response => response.json())
            .then(data => setUser(data));
    }, []);

    return (

        <div className='conteinerUsuario'>
            <aside className='dadosDoUsuario'>
                <img className='fotoPerfil' src="" alt="Foto de perfil"/>
                <h2 className='nomeDeUsuario'>{user.nome_de_usuario}</h2>
                <h3 className='nomeCompleto'>{user.nome_completo}</h3>
                <h3 onClick={onClick} className='inserirItemButton'>Insira um item {'>>'}</h3>
                {isOpen && (                
                    <FormInserirItem />
                )}
            </aside>

        </div>
    )
}

export default DadosUsuario;