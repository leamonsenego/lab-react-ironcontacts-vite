import PropTypes from 'prop-types'
function BoxColor({ r, g, b }) {

  const boxStyle = {
    backgroundColor: `rgb(${r},${g},${b})`,
    justifyContent: "center"
  };

  function rgbToHex(r, g, b) {
    return (
      "#" +
      ((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1).toUpperCase()
    );
  }
  const isLightColor = (r + g + b) / 3 > 125;
  return (

    <div className={`boxColor d-flex border ${isLightColor ? 'black' : 'white'}`} style={boxStyle}>
      <p>
        rgb({r},{g},{b})
      </p>
      <p>{rgbToHex(r)}</p>
    </div>
  );
}
export default BoxColor;
BoxColor.propTypes = {
  r: PropTypes.number,
  g: PropTypes.number,
  b: PropTypes.number,

}