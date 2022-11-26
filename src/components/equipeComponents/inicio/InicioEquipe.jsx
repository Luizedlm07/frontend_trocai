import { useState } from 'react';

import './InicioEquipe.css';
import CardEmpresa from './CardEmpresa';
import CardValores from './CardValores';
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";


function InicioEquipe(){

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
                            <p className='equipeText'>Nossos valores</p>
                        </div>
                        <h2 className='title'>Conheça os valores da equipe por trás do Rob3</h2>
                        <p className='desc'>
                            Somos um assistente financeiro que cabe no seu bolso, 
                            apoiando sua trajetória de ponta a ponta.
                        </p>
                    </div>

                    <div className='momentoCards'>
                        <CardEmpresa 
                        title="Missão" 
                        text="Nossa missão é proporcionar liberdade financeira e a desburocratização da saúde financeira aos nossos clientes."
                        />

                        <CardEmpresa 
                        title="Visão"
                        text="Ser a empresa referência da américa latina em investimentos, por meio dos cursos, mentorias e do Rob3, com apoio de investidores e parcerias."
                        
                        />
                    </div>

                    <div className='slideValoresCont'>
                        <div className="valoresText">
                             <p>Valores</p>
                        </div>
                        <div className='slideValores'>
                            <div className='slide' style={{
                                marginLeft: scrollX, 
                                width: 1200
                            }}>
                                <CardValores 
                                title="Respeito &#129309;&#127997;"
                                text="O respeito demonstra um sentimento positivo por uma pessoa ou para uma entidade e também ações específicas e condutas representativas daquela estima."
                                />
                                
                                <CardValores 
                                title="Amor &#128151;"
                                text="O Amor é maior e mais velho sentimento do mundo, baseado na empatia, no carinho e no afeto tanto para nós como equipe, quanto para nossos clientes."
                                />

                                <CardValores 
                                title="Resiliência &#128170;"
                                text="A resiliência é a capacidade do indivíduo lidar com problemas, adaptar-se a mudanças, superar obstáculos ou resistir à pressão de situações adversas."
                                />

                                <CardValores 
                                title="Evolução &#128640;"
                                text="No contexto filosófico, a evolução representa uma alteração progressiva de um ser ou de um sistema em direção a um estado final."
                                />

                                <CardValores 
                                title="Integridade &#11088;"
                                text="Pode designar uma atitude de plenitude moral, sendo a característica de uma pessoa incorruptível."
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

export default InicioEquipe;