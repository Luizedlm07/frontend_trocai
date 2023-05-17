/*import {useState, useEffect} from 'react';*/
import Footer from '../components/footer/Footer';
import HeaderNotuser from '../components/header_notuser/HeaderNotuser';
import FormCadastro from '../components/cadastro/FormCadastro';




function Cadastro(){
    return (
        <div>
            <HeaderNotuser />
            <FormCadastro />
            <Footer />
        </div>
    )
};

export default Cadastro;