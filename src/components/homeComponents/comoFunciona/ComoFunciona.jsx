import styles from './ComoFunciona.css';
import CardPlanos from './CardContratar';
import InfoCard from './InfoCard';
import ReviewUser from './ReviewUser';
import Footer from '../../footer/Footer';

function ComoFunciona(){
    return (
        <div>
            <section className="contComoFunciona">
                <h1 className='titleComoFunciona'>Como Funciona o Rob3 ?</h1>
                <p className='textoComoFunciona'>Assistente financeito! Com ele você poderá:  </p>
        

                <div className='contratar'>
                    <CardPlanos 
                     tipo="TESTE GRÁTIS"
                     preco="20"
                     avista="180,00"
                     checkItem="unCheckIcon"
                     />
                </div>

            </section>
            
        </div>
    )
};

export default ComoFunciona;