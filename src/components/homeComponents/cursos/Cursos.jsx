import './Cursos.css'
import fireIcon from '../../../img/3DMoney.png' ;
import CardCurso from './CardCursos';
import StudyLogo from '../../../img/logoBook.png';
import StudyEducation from '../../../img/logoEducation.png';

function Cursos(){
    return(
        <div className='contCursosGeral' id='cursos'>
            <div className='containerCursos'>
                <div className='boxTituloCursos'>
                    <div className='tituloSecaoCursos'> TURBINE SEUS CONHECIMENTOS</div>
                    <img src={fireIcon} alt="Imagem 3D de um emoji de fogo" className='iconMoney'/> 
                </div>
            </div>
            <div className='containerListaCurso'>
                <div className='boxListagem'>
                    
                    <h3 className='tituloListas'> EDUCAÇÃO FINANCEIRA </h3>

                    <div className='carrosselCursos'>
                        <a href="https://parceiros.descomplica.com.br/curso-educacao-financeira-gratuito" target="_blank"><CardCurso Categoria="Educacao" 
                        logotipo={StudyEducation}
                        NomeCurso="<Descomplica/>" 
                        Descricao="Tudo o que você sempre quis saber para organizar sua vida financeira em um curso 100% gratuito e na palma da sua mão." />
                        </a>
                        <a href="https://www.ev.org.br/cursos/educacao-financeira" target="_blank"><CardCurso Categoria="Educacao" 
                        logotipo={StudyEducation} 
                        NomeCurso="<Fundação Bradesco/>" 
                        Descricao="Aprendendo qual é o seu perfil financeiro, a realizar uma análise e a elaborar um controle financeiro de qualidade." />
                        </a>
                        <a href="https://kultivi.com/cursos/negocios/educacao-financeira-descomplicada" target="_blank"><CardCurso Categoria="Educacao" 
                        logotipo={StudyEducation}
                        NomeCurso="<Kultivi/>" 
                        Descricao="Prepare-se para ter controle das suas finanças, mudar sua mentalidade em relação ao dinheiro e transformar a sua realidade." />
                        </a>
                        <a href="https://blog.cresol.com.br/cursos-on-line-e-gratuitos-sobre-educacao-financeira-e-negocios/" target="_blank"><CardCurso Categoria="Educacao" 
                        logotipo={StudyEducation}
                        NomeCurso="<Cresol/>" 
                        Descricao="O programa inclui a identificação dos hábitos de consumo, a organização do orçamento e as causas e consequências das despesas excessivas. " />
                        </a>
                    </div>


                </div>

                <div className='boxListagem'>
                    <h3 className='tituloListas'> SOBRE INVESTIMENTOS </h3>
                    
                    <div className='carrosselCursos'>
                        <a href="https://educacao-executiva.fgv.br/cursos/online/curta-media-duracao-online/como-fazer-investimentos-1" target="_blank"><CardCurso Categoria="Investimentos" 
                        logotipo={StudyLogo}
                        NomeCurso="<FGV/>" 
                        Descricao="O curso Como Fazer Investimentos 1 apresenta e discute conceitos e métodos que irão ajudá-lo a aplicar seu dinheiro com inteligência e consciência dos riscos. " />
                        </a>

                        <a href="https://edu.b3.com.br/" target="_blank"><CardCurso Categoria="Investimentos" 
                        logotipo={StudyLogo}
                        NomeCurso="<B3 Edu/>" 
                        Descricao="Entenda como funciona o mercado financeiro direto com a B3 (Bolsa de Valores) e aprenda como investir desenvolvendo diversas competências sobre o tema. " />
                        </a>
                        
                        <a href="https://monett.co/" target="_blank"><CardCurso Categoria="Investimentos" 
                        logotipo={StudyLogo}
                        NomeCurso="<Monnet/>" 
                        Descricao="Aprenda a investir do zero, de forma profissional, didática e inclusiva. Os métodos desse curso ajudarão a fazer decisões importantes no mundo dos investimentos. " />
                        </a>

                        <a href="https://www.udemy.com/course/carteira-de-investimentos/" target="_blank"><CardCurso Categoria="Investimentos" 
                        logotipo={StudyLogo}
                        NomeCurso="<Udemy/>" 
                        Descricao="Você aprenderá a investir no Tesouro Direto, desmistificando cada título e abrindo sua conta de forma simples, prática e segura sem pegadinhas ou promessas mirabolantes. " />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cursos