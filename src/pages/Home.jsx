/*import {useState, useEffect} from 'react';*/
import Footer from '../components/footer/Footer';
import HeaderNotuser from '../components/header_notuser/HeaderNotuser';
import FirstPage from '../components/homeComponents/FirstPage';



function Home(){
    return (
        <div>
            <HeaderNotuser />
            <FirstPage />
            <Footer />
        </div>
    )
};

export default Home;