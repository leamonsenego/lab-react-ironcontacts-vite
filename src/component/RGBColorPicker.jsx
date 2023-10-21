import { useState } from 'react';
import SingleColorPicker from './SingleColorPicker';


// RGBColorPicker component
const RGBColorPicker = () => {

  const [rValue, setRValue] = useState(0);
  const [gValue, setGValue] = useState(0);
  const [bValue, setBValue] = useState(0);


  const handleColorChange = (color, newValue) => {
    switch (color) {
      case 'r':
        setRValue(newValue);
        break;
      case 'g':
        setGValue(newValue);
        break;
      case 'b':
        setBValue(newValue);
        break;
      default:
        break;
    }
  };

  return (
    <div className='d-flex rgbColor'>
   
      <SingleColorPicker color="r" value={rValue} onChange={handleColorChange} />
      <SingleColorPicker color="g" value={gValue} onChange={handleColorChange} />
      <SingleColorPicker color="b" value={bValue} onChange={handleColorChange} />

      <div
        style={{
          width: '50px',
          height: '50px',
          backgroundColor: `rgb(${rValue},${gValue},${bValue})`,
          margin: '10px',
        }}
      ></div>
    </div>
  );
};

export default RGBColorPicker;
