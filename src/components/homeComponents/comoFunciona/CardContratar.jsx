import './CardContratar.css';
import { FaCheck } from "react-icons/fa";
import logo from '../../../img/dinheiro.png';

function CardContratar({tipo, preco, avista, checkItem }) {
    return(
        <div>
            <div className="cardContainer">
                <img className='logoimg' src={logo} />
                <h2>{tipo}</h2>
                <div className='items'>
                    <FaCheck className='checkIcon'/>
                    <p>Análise com a ação PETR3</p>
                </div>

                <div className='items'>
                    <FaCheck className='checkIcon'/>
                    <p>Apoio no seu desenvolvimento pessoal</p>
                </div>

                <div className='items'>
                    <FaCheck className='checkIcon'/>
                    <p>Cursos para te impulsionar a ir além</p>
                </div>

                <div className='items'>
                    <FaCheck className='checkIcon'/>
                    <p>Mentorias de investimentos</p>
                </div>

                <div className='items'>
                    <FaCheck className='checkIcon'/>
                    <p>Acesso a oportunidades de altos rendimentos</p>
                </div>

                <button type='button' className='btnContratar'>CADASTRE-SE</button>
            </div>
        </div>
    )
};

export default CardContratar; 