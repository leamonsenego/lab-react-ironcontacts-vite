import { useState } from "react";
import PropTypes from 'prop-types'
import glass  from '../assets/images/glasses.png'

function ClickablePicture({img}){
   
    const [cool ,setCool]=useState(false)
   function toggleImage(){
    setCool(!cool);
   }

return (
    <div  style={{position: 'relative', width: '200px'}} onClick={toggleImage} > 
      <img src={img}   />
      {
        cool && <img src={glass} style={{position: 'absolute', top:'36px',left:'24px', width:'150px'}}/>
      }
    </div>
)
}
export default ClickablePicture;
ClickablePicture.propTypes={
  img :PropTypes.string 
}