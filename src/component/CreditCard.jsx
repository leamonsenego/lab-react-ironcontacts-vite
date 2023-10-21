import PropTypes from 'prop-types'
import visa from '../assets/images/visa.png'
import master from '../assets/images/master-card.svg'
function CreditCard({number,expirationMonth,expirationYear,bank,owner, bgColor,color, type}){
    const cardStyle = {
        backgroundColor: bgColor,
        color: color,
        borderRadius:"10px",
        padding:"20px",
        marginLeft:"20px",
        width:"33%"
      };
      return (
  
  
    <div className="CreditCard " style={cardStyle}>
  
     <img  src={type === 'Visa' ? visa : master} />
       <div className="CreditCardContent">
       <p>{'**** **** **** '+ number.substr(-4)}</p>
         <p>Expires {expirationMonth}/{expirationYear.toString().slice(-2)}<span>{bank}</span></p>
         
         <p>{owner}</p>
         </div>
        
         </div> 
  
     
    ) 
 
 }
 
 export default CreditCard;

 CreditCard.propTypes = {
    number: PropTypes.string,
    expirationMonth: PropTypes.number,
    expirationYear: PropTypes.number,
    bank: PropTypes.string,
    bgColor: PropTypes.string,
    owner: PropTypes.string,
    color: PropTypes.string,
    type: PropTypes.oneOf(['Visa', 'Master Card'])
 }