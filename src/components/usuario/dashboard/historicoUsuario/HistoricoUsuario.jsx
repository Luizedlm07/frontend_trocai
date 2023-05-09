import React, { useState, useEffect } from 'react';
import './HistoricoUsuario.css';
import '../../../../globalColors.module.css';

function HistoricoUsuario() {
    const [trocas, setTrocas] = useState({});
    const [doacoes, setDoacoes] = useState({});

    useEffect(() => {
        fetch('')
            .then(response => response.json())
            .then(data => setTrocas(data));
    }, []);

    useEffect(() => {
        fetch('')
            .then(response => response.json())
            .then(data => setDoacoes(data));
    }, []);

    return (

        <div className='operacoes'>
            <h1 className="titleDashboard">Histórico de Operações</h1>
            <div className='conteinerOperacoes'>
                <div className="conteinerTrocas">
                    <h2>Trocas</h2>
                    {/* {itens.map(item => */}
                        <div key={trocas.id}>
                            <img src="" alt="" />
                            <h3 className='tituloItem'>{trocas.item}</h3>
                            <p className='descricao'>{trocas.descricao}</p>
                        </div>
                        {/*  )} */}

                </div>
                <div className="conteinerDoacoes">
                    <h2>Doações</h2>
                    {/* {itens.map(item => */}
                    <div key={doacoes.id}>
                        <img src="" alt="" />
                        <h3 className='tituloItem'>{doacoes.item}</h3>
                        <p className='descricao'>{doacoes.descricao}</p>
                    </div>
                    {/*  )} */}
                </div>
            </div>
        </div>
    )
}

export default HistoricoUsuario;