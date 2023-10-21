import PropTypes from 'prop-types';
// SingleColorPicker component
const SingleColorPicker = ({ color, value, onChange }) => {
    return (
      <div>
      <div
        style={{
          width: '50px',
          height: '50px',
          backgroundColor: `rgb(${color === 'r' ? value : 0},${color === 'g' ? value : 0},${color === 'b' ? value : 0})`,
          margin: '10px',
        }}
      ></div>
        <label htmlFor={`${color}Value`}>{color.toUpperCase()}:</label>
        <input
          type="number"
          id={`${color}Value`}
          value={value}
          onChange={(e) => onChange(color, parseInt(e.target.value, 10))}
          min="0"
          max="255"
        />
      </div>
    );
  };

export default SingleColorPicker;
SingleColorPicker.propTypes = {
  color: PropTypes.oneOf(['r', 'g', 'b']).isRequired,
  value: PropTypes.number.isRequired,
  
};