import './InfoCard.css';
import { FaCalendarCheck, FaSyncAlt, FaMapMarkerAlt } from "react-icons/fa";

function InfoCard({icon, text}){
    return(
        <div>
            {icon == "acesso" && (
                <div className='contInfo'>
                     <FaCalendarCheck className='icon'/>
                     <p>{text}</p>
                </div>
            )}

            {icon == "update" && (
                 <div className='contInfo'>
                 <FaSyncAlt className='icon'/>
                 <p>{text}</p>
                </div>
            )}

            {icon == "horaEstudo" && (
                <div className='contInfo'>
                <FaMapMarkerAlt className='icon'/>
                <p>{text}</p>
               </div>
            )}
            

        
        </div>
    )
};

export default InfoCard;