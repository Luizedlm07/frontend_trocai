/*import {useState, useEffect} from 'react';*/
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import Dashboard from '../components/usuario/dashboard/Dashboard'


function Usuario(){
    console.log('Rodou')
    return (
        <div>
            <Header />
            <Dashboard />
            <Footer />
        </div>
    )
};

export default Usuario;