import './FirstPage.css';
import itemImg from '../../img/prov.png';
import '../../globalColors.module.css';
/*
import { useEffect, useState } from 'react';
import axios from 'axios';*/


function FirstPage() {
/*
    const [itens, setItens] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/itens')
            .then(response => setItens(response.data))
            .catch(error => console.error(error));
    }, []);
*/
    return (

        <div className="firstConteiner">
            <h2 className='feedTitle'>Feed</h2>
            <div className='itensConteiner'>
                {/*itens.map(item => (*/}
                    <div class="item">
                        <article>
                            <img className="itemImg" src={itemImg} alt="imagem"/>
                        </article>
                        <section className="itemTitleDesc">
                            <h1 className="itemTitle">Box Completo - Harry Porra</h1>
                            <h2 className="itemDesc">Excelente estado</h2>
                        </section>
                    </div>
                {/*))*/}
                <div class="item">
                    <article>
                        <img className="itemImg" src={itemImg} alt="imagem"/>
                    </article>
                    <section className="itemTitleDesc">
                        <h1 className="itemTitle">Box Completo - Harry Porra</h1>
                        <h2 className="itemDesc">Excelente estado</h2>
                    </section>
                </div>
                <div class="item">
                    <article>
                        <img className="itemImg" src={itemImg} alt="imagem"/>
                    </article>
                    <section className="itemTitleDesc">
                        <h1 className="itemTitle">Box Completo - Harry Porra</h1>
                        <h2 className="itemDesc">Excelente estado</h2>
                    </section>
                </div>
                <div class="item">
                    <article>
                        <img className="itemImg" src={itemImg} alt="imagem"/>
                    </article>
                    <section className="itemTitleDesc">
                        <h1 className="itemTitle">Box Completo - Harry Porra</h1>
                        <h2 className="itemDesc">Excelente estado</h2>
                    </section>
                </div>
                <div class="item">
                    <article>
                        <img className="itemImg" src={itemImg} alt="imagem"/>
                    </article>
                    <section className="itemTitleDesc">
                        <h1 className="itemTitle">Box Completo - Harry Porra</h1>
                        <h2 className="itemDesc">Excelente estado</h2>
                    </section>
                </div>
            </div>
        </div>
    
    )
}

export default FirstPage;