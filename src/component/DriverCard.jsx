import PropTypes from 'prop-types'
import Rating from "./Rating";

function DriverCard({name,rating,img,car}){

    return(
        <div className="d-flex driverCard" >
        <div className="d-flex driverCardContainer" style={{width:"90%"}}>
        <div style={{width:"30%"}}>
        <img src={img}/>
        </div>
        <div style={{textAlign:"left",width:"70%"}}>
            <p>{name}</p>
            <Rating>{rating}</Rating>
            <p>{car.model} - {car.licensePlate}</p>
        </div>
        </div>
        </div>
    )

}
export default DriverCard;
DriverCard.propTypes = {
  name: PropTypes.string,
  rating: PropTypes.number,
  img: PropTypes.string,
  car: PropTypes.shape({
    model: PropTypes.string,
    licensePlate: PropTypes.string,
  }),
};