import './Footer.css';
import logo from '../../img/logoRobo.png';

function Footer(){
    return(
        <footer className="footer">

            <div className='footerCopy'>
                <div className="logoFooter">
                    <div className="logoImg">
                        <img src={logo} />
                    </div>
                    <p>&copy; 2022 | ROB3 - todos os direitos reservados</p>
                </div>


            <div className="lang">
                    <select name="lang">
                        <option value="portugues">Português</option>
                        <option value="ingles">English</option>
                    </select>
            </div>

            </div>

        </footer>
    )
};

export default Footer;