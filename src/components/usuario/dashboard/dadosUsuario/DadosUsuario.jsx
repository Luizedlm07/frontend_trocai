import React, { useState, useEffect } from 'react';
import './DadosUsuario.css';
import '../../../../globalColors.module.css';
import FormInserirItem from './inserirItem/FormInserirItem';
import imagem from '../../../../img/prov.png'


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
                <div>
                    <img className='fotoPerfil' src={imagem} alt="Foto de perfil"/>
                    <p className='attImg'>Atualizar imagem</p>
                </div>
                <h2 className='nomeDeUsuario'>Luiz.edlm07{user.nome_de_usuario}</h2>
                <h3 className='nomeCompleto'>Luiz Eduardo de Lima Silva{user.nome_completo}</h3>
                <h3 onClick={onClick} className='inserirItemButton'>Insira um item {'>>'}</h3>
                {isOpen && (                
                    <FormInserirItem />
                )}
            </aside>

        </div>
    )
}

export default DadosUsuario;