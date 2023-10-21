
import { useState } from "react";


function LikeButton(){
    const [like,setLike]=useState(0)
    const [color,setColor]=useState(0)
    const colors =["purple", "blue", "green", "yellow", "orange", "red"]
  function colorsLike(){
   setLike(like+1)
   setColor((color + 1) % colors.length);
   
  }


return (
    <>
      <button style={{ backgroundColor: colors[color],fontSize:"2rem" }} onClick={colorsLike} >{like} Likes</button>
    </>
)
}
export default LikeButton;
