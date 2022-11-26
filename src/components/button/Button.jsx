import './Button.css' 

function Button({texto, classe}) {
    return(
        <div>
            <button type="submit" className={classe}> {texto} </button>
        </div>
    )
}

export default Button;