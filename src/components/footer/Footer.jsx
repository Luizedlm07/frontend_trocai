import './Footer.css';
import logo from '../../img/Logo.png';
import '../../globalColors.module.css';

function Footer(){
    return(
        <footer className="footer">

            
                <div className="inFooter">
                    <div className="logoContainer">
                        <img className="logoIcon" src={logo} alt="TrocAí"/>
                    </div>
                    <p>&copy; 2023 | TrocAí - todos os direitos reservados</p>
                    <div className="poweredBy">
                        <p>
                            Powered by: <ion-icon className="iconCoffee" name="cafe-outline"></ion-icon> Café Sem Açúcar | FEBASP
                        </p>
                    </div>
                </div>

        </footer>
    )
};

export default Footer;