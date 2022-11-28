import { useState } from 'react';

import './PerguntasFrequentes.css';
import CardValores from '../../equipeComponents/inicio/CardValores';
import CardEmpresa from '../../equipeComponents/inicio/CardEmpresa';
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";


function PerguntasFrequentes(){

    const [scrollX, setScrollX] = useState(0);

    const handleLeftArrow = () => {
        let x = scrollX + Math.round(window.innerWidth / 2);
        if(x > 800) {
            x = 800
        }
        console.log(x);

        setScrollX(x);
    }

    const handleRightArrow = () => {
        let x = scrollX - Math.round(window.innerWidth / 2);
        if(x < -800) {
            x = -800
        }

        setScrollX(x)
    }

    return (
        <div>
            <div className='contMomento'>

                <div className='momentoItems'>
                    <div className='momentoText'>
                        <div className='emojiCont'>
                        </div>
                        <h2 className='title'>Perguntas Frequentes</h2>
                        <p className='desc'>
                            Sanando as principais dúvidas que possam surgir sobre o Rob3.
                        </p>
                    </div>

                    <div className='momentoCards'>
                        <CardEmpresa 
                        title="O Rob3" 
                        text="Somos o seu assistente financeiro, com a gente cuidar do dinheiro fica fácil e simples. Surgiu dúvida aí? Sanamos aqui."
                        />

                        <CardEmpresa 
                        title="Como surgiu"
                        text="O Rob3 nasceu da vontade de proporcionar liberdade financeira e acesso a educação de qualidade para todos."
                        
                        />
                    </div>

                    <div className='slideValoresCont'>
                        <div className='slideValores'>
                            <div className='slide' style={{
                                marginLeft: scrollX, 
                                width: 2000
                            }}>
                                <CardValores 
                                title="Pagamento"
                                text="Você poderá efetuar o pagamento utilizando cartão de crédito ou débito, PIX ou boleto."
                                />
                                
                                <CardValores 
                                title="Riscos"
                                text="O Rob3 auxiliará na compra da ação PETR3 com dados de eventos anteriores, o usuário é o responsável pela ação da compra."
                                />

                                <CardValores 
                                title="Taxas"
                                text="Contamos com a oferta de 7 dias grátis para o usuário testar, após esse período será taxado o valor do plano escolhido."
                                />

                                <CardValores 
                                title="Cancelamento"
                                text="Não há taxa de cancelamento no período de 60 dias, após isso será cobrado um valor símbolico pela quebra de contrato."
                                />

                                <CardValores 
                                title="Contrato"
                                text="Contamos com contratos de no mínimo 30 dias e máximo de 90."
                                />
                            </div>

                            <div className='controlador'>
                                <FaAngleLeft className='contIcon' onClick={handleLeftArrow}/>
                                <FaAngleRight className='contIcon' onClick={handleRightArrow}/>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

            
        </div>
    )
};

export default PerguntasFrequentes;