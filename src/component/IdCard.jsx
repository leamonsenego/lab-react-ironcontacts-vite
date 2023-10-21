import PropTypes from 'prop-types'
function IdCard({lastName,firstName,gender,height,birth, picture}){
   return (
    <div className="idCard">
   <div className="idCardPicture"><img src={picture}/>
   </div> 
   <div className="idCardContent">
      <p><b>First Name</b> :{firstName}</p>
        <p><b>Last Name:</b>{lastName}</p>
        
        <p><b>Gender:</b>{gender}</p>
        <p><b>Height:</b>{height}</p>
        <p><b>Date of birth:</b>{birth.toDateString()}</p>
        </div> 
    </div>

   ) 

}

export default IdCard;
IdCard.propTypes = {
   lastName: PropTypes.string,
   firstName: PropTypes.string,
   gender: PropTypes.string,
   height: PropTypes.number,
   birth: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
   picture: PropTypes.string,
  
}