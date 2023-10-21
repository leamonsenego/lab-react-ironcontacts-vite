import PropTypes from 'prop-types'

import { useState } from "react";


function Carousel({images}){
   
    const [index ,setIndex]=useState(0)

  const leftButton = () => {
    const newIndex = index - 1 ;
    if(newIndex > 0){
        setIndex(newIndex)
    }else {
        setIndex(images.length - 1)
    }
    
  };

  const rightButton = () => {
    
    const newIndex = index + 1 ;
    if(newIndex >= images.length ){
        setIndex(0);
   }else {
    
    setIndex(newIndex);
   }

    
  };


return (
   <div className="carousel">
   <button style={{width: '50px'}}  onClick={leftButton}>&#x3c;</button>
      <img src={images[index]}  style={{width: '200px'}}  />
    <button style={{width: '50px'}}  onClick={rightButton}>&#x3e;</button>
</div>
)
}
export default Carousel;
Carousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string),
}