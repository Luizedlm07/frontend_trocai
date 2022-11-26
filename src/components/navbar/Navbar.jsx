import './Navbar.css'
import { Link } from 'react-router-dom' 

function Navbar(){
    return (
        <div className="boxNavbar">
            <div>
                <Link to="/" className='logoCont'>
                    <h2 className="nomeLogotipo">Rob3</h2>
                </Link>
            </div>

            <div>
                <ul className='navBarLinks'>
                    <li className='link'><a href='#sobreRob3'>Propósito</a></li>
                    <li className='link'><a href='#cursos'>Conhecimento</a></li>
                    <li className='link'><a href='#cursos'>Invista agora</a></li>
                </ul>
            </div>  

            <div>
                <button className='buttonCadastro'>Criar uma conta</button>
                <button className='buttonCadastro'>Entrar</button>
                
            </div>
        </div>
    )
};

export default Navbar;