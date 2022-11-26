import "./CardEmpresa.css";

function CardEmpresa({title, text}){
    return(
        <div>
            <div className="contCard">
                <div className="btnCard">
                    <p>{title}</p>
                </div>
                <p className="textCard">
                    <p>{text}</p>
                </p>
            </div>
        </div>
    )
};

export default CardEmpresa;