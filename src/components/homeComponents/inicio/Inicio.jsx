import './Inicio.css'
import Button from '../../button/Button';
import SobreRob3Infos from '../../sobreRob3Infos/SobreRob3Infos';
import iconAltoFalante from '../../../img/EmojiAltoFalante.png'; 
import iconBeca from '../../../img/EmojiBeca.png';
import {Link} from 'react-router-dom';


function Inicio(){
    return(
        <div>
            <div className='boxInicio'>
                <div className='box'>
                    <div>
                    </div>
                    <h2 className='titulo'>INVISTA NO SEU FUTURO! </h2>
                    <p className='textoApresentacao'> Conquiste sua liberdade financeira nesse ambiente incrível e humanizado para que você voe muito. <br/></p>
                </div>

                <div>
                    <div className='imagemLado'></div>
                </div>
            </div>

            <div className='EfeitoDeLuz'> </div>
            <div className='boxSobreRob3' id='sobreRob3'>
                <div className='boxSobreTextoPrincipal'>
                    
                    <h2 className='tituloSobre'> Sobre a ROB3 </h2>
                    <p>Oferecemos uma plataforma com o objetivo de incentivar a educação financeira, com o apoio do ROB3, seu assistente de investimento para a ação PETR3.</p>    
                    
                    <Link to="/nossaequipe">
                        <Button 
                        texto="Conheça a turma 2/2022 de ADS da Belas Artes" 
                        classe="btnAzul lg"/>
                    </Link>

                </div>
                <div className='infosLado'> 
                    <SobreRob3Infos  
                    icon={iconBeca}
                    subtitulo="<Como o ROB3 funciona?/>:"
                    texto="Entenda como cuidamos do seu dinheiro."
                    />

                    <SobreRob3Infos 
                    icon={iconAltoFalante}
                    subtitulo="<Cursos/>:"
                    texto="Quer turbinar seus conhecimentos e estar cada vez mais perto da liberdade financeira? Separamos cursos fantásticos para que você continue se desenvolvendo junto com a gente. "
                    />

                    {/* componente responsável pelas informações de lado aqui */}
                </div>
            </div>
        </div>
    )
}

export default Inicio;