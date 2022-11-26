import './ReviewUser.css';

function ReviewUser({avatar, text, name, cargo, customMargin}){
    return(
       <div>
            {customMargin == true && (
                 <div className='contReview'>
                 <div className='avatar'>
                     <img src={avatar} />
                 </div>
 
                 <p className='text'>{text}</p>
                 <p className='nome'>{name}<span> - {cargo}</span></p>
                </div>
            )}

            {customMargin == false && (
                 <div className='contReview customMargin'>
                 <div className='avatar'>
                     <img src={avatar} />
                 </div>
 
                 <p className='text'>{text}</p>
                 <p className='nome'>{name}<span> - {cargo}</span></p>
                </div>
            )}
       </div>
    )
};

export default ReviewUser;