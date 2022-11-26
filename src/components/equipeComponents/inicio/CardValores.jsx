import "./CardValores.css";

function CardValores({title, text}){
    return(
        <div>
            <div className="contValor">
                <div className="btnValor">
                    <p>{title}</p>
                </div>
                <p className="textValor">
                    <p>{text}</p>
                </p>
            </div>
        </div>
    )
};

export default CardValores;