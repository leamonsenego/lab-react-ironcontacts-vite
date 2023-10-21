import PropTypes from 'prop-types'
function Random({ min, max }) {

  const randomValue = Math.floor(Math.random() * (max - min + 1) + min)
  return (
    <div className="random border d-flex">
      <p>Random value between {min} and {max} is {randomValue}</p>


    </div>


  )


}
export default Random;
Random.propTypes = {

  min: PropTypes.number,
  max: PropTypes.number
}