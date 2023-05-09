import { useState } from 'react';

import './PerguntasFrequentes.css';
import CardValores from '../../equipeComponents/inicio/CardValores';
import CardEmpresa from '../../equipeComponents/inicio/CardEmpresa';
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";


function PerguntasFrequentes(){

    const [scrollX, setScrollX] = useState(0);

    const handleLeftArrow = () => {
        let x = scrollX + Math.round(window.innerWidth / 2);
        if(x > 800) {
            x = 800
        }
        console.log(x);

        setScrollX(x);
    }

    const handleRightArrow = () => {
        let x = scrollX - Math.round(window.innerWidth / 2);
        if(x < -800) {
            x = -800
        }

        setScrollX(x)
    }

    return (
        <div>

        </div>
    )
};

export default PerguntasFrequentes;