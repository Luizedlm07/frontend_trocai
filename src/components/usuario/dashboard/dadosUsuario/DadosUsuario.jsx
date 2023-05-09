import React, { useState, useEffect } from 'react';
import './DadosUsuario.css';
import '../../../../globalColors.module.css';
import { Link } from 'react-router-dom'

function DadosUsuario() {
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

                <Link to='/produtos/inserirProduto' className='toInserirProduto'>
                    <h3 className='inserirProdutoButton'>Insira um produto</h3>
                </Link>
            </aside>

        </div>
    )
}

export default DadosUsuario;