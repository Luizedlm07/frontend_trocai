import {useState, useEffect} from 'react';
import Navbar from '../components/navbar/Navbar';
import Inicio from '../components/homeComponents/inicio/Inicio';
import Footer from '../components/footer/Footer';
import Cursos from '../components/homeComponents/cursos/Cursos';
import ComoFunciona from '../components/homeComponents/comoFunciona/ComoFunciona'


function Home(){
    return (
        <div>
            <Navbar />
            <Inicio />
            <Cursos />
            <ComoFunciona />
            <Footer />
        </div>
    )
};

export default Home;