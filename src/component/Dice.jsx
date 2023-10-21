
import { useState } from "react";
import dice3  from '../assets/images/dice3.png'
import dice0  from '../assets/images/dice-empty.png'
import dice6  from '../assets/images/dice6.png'

function Dice(){
   
    const [dice ,setDice]=useState(dice3)

   function rollDice(){

    setDice(dice0);
    setTimeout(() => {
    
        setDice(dice6);
      }, 1000);
   }

return (

      <img src={dice} onClick={rollDice}  style={{width: '100px'}}  />
)
}
export default Dice;
