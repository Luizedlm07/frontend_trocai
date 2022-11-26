import './SobreRob3Infos.css'

function sobreRob3Infos({texto, subtitulo, icon, alt}){
    return(
        <div>
            <div className='boxInfos'>
                <div className='boxIcon'>
                    <img src={icon} alt={alt} />
                </div>
                <p>  <span className='subtitulo'> {subtitulo} </span> {texto} </p>
            </div>
        </div>
    )
}

export default sobreRob3Infos; 