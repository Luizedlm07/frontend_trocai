import './FirstPage.css';
/*import itemImg from '../../img/prov.png';*/
import '../../globalColors.module.css';

import { useEffect, useState } from 'react';
import axios from 'axios';


function FirstPage() {

    const [itens, setItens] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/consulta_feed')
            .then(response => setItens(response.data))
            .catch(error => console.error(error));
    }, []);

    return (

        <div className="firstConteiner">
            <h2 className='feedTitle'>Feed</h2>
            <div className='itensConteiner'>
                {itens.length === 0 ? (<p>Carregando...</p>) : (
                    itens.map(item => (
                    <div class="item">
                        <article>
                            <img className="itemImg" src={`http://localhost:8000/img?caminho=${item.imagem}`} alt="imagem"/>
                        </article>
                        <section className="itemTitleDesc">
                            <h1 className="itemTitle">{item.item}</h1>
                            <h2 className="itemDesc">{item.descricao}</h2>
                        </section>
                    </div>
                )))}
            </div>
        </div>
    
    )
}

export default FirstPage;