import React, { useState, useEffect } from 'react';
import './HistoricoUsuario.css';
import '../../../../globalColors.module.css';
import axios from 'axios';


function HistoricoUsuario() {
    const [operacoes, setOperacoes] = useState([]);

    const getOperacoes = async () => {

        try {
        const response = await axios.get('http://localhost:8000/consulta_operacao?id_usuario=1');
        const data = response.data;
        setOperacoes(data)

        } catch (error) {
        console.error(error); // Manipule o erro aqui

        }
    };
    useEffect(() => {
        getOperacoes()
    }, [])

    const trocas = operacoes.trocas
    const doacoes = operacoes.doacoes
    console.log(operacoes)
    console.log('trocas', trocas) // índice 0 são trocas
    console.log('doações', doacoes) // índice 1 são doações

    return (

        <div className='operacoes'>
            <h1 className="titleDashboard">Histórico de Operações</h1>
            <div className='conteinerOperacoes'>
                <div className="conteinerTrocas">
                    <h2>Trocas</h2>
                    {operacoes.length === 0 ? (<p>Carregando...</p>) : (
                        trocas.map((troca) =>    
                            <div className='boxItem' key={troca['Operação ID']}>
                                <div className='divImg'>
                                    <img className='imgItem' src={`http://localhost:8000/img?caminho=${troca['Imagem1']}`} alt="Imagem" />
                                </div>
                                <div>
                                    <h3 className='tituloItem'>{troca['Item 1']} X {troca['Item 2']}</h3>
                                    <p className='descricao'>Você trocou com {troca['Dono do Item 2']}</p>
                                </div>
                            </div>
                        )
                    )}


                </div>
                <div className="conteinerDoacoes">
                    <h2>Doações</h2>
                    {operacoes.length === 0 ? (<p>Carregando...</p>) : (
                        doacoes.map((doacao) =>    
                            <div className='boxItem' key={doacao['Operação ID']}>
                                <div className='divImg'>
                                    <img className='imgItem' src={`http://localhost:8000/img?caminho=${doacao['Imagem1']}`} alt="Imagem" />
                                </div>
                                <div>
                                    <h3 className='tituloItem'>{doacao['Item doado']}</h3>
                                    <p className='descricao'>Você doou para / recebeu de {doacao['Receptor']}</p>
                                </div>
                            </div>
                        )
                    )}
                </div>
            </div>
        </div>
    )
}

export default HistoricoUsuario;