import PropTypes from "prop-types";

function Rating({ children }) {
   
  return (
    <div className="rating">
      {Array.from(Array(parseFloat(5)).keys()).map((item, index) => (
        <span key={index}>{item < Math.round(children)? '★' : '☆' }</span>
      ))}
    </div>
  );
}

export default Rating;

Rating.propTypes = {
  children: PropTypes.node
}
