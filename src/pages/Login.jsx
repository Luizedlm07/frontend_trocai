/*import {useState, useEffect} from 'react';*/
import Footer from '../components/footer/Footer';
import FormLogin from '../components/login/FormLogin';
import HeaderNotuser from '../components/header_notuser/HeaderNotuser';




function Login(){
    return (
        <div>
            <HeaderNotuser />
            <FormLogin />
            <Footer />
        </div>
    )
};

export default Login;