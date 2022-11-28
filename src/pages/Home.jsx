import {useState, useEffect} from 'react';
import Navbar from '../components/navbar/Navbar';
import Inicio from '../components/homeComponents/inicio/Inicio';
import Footer from '../components/footer/Footer';
import Cursos from '../components/homeComponents/cursos/Cursos';
import ComoFunciona from '../components/homeComponents/comoFunciona/ComoFunciona';
import PerguntasFrequentes from '../components/homeComponents/perguntasFrequentes/PerguntasFrequentes'


function Home(){
    return (
        <div>
            <Navbar />
            <Inicio />
            <Cursos />
            <ComoFunciona />
            <PerguntasFrequentes />
            <Footer />
        </div>
    )
};

export default Home;