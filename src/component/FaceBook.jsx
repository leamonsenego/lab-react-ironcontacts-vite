import profiles from "../data/berlin.json";
import {useState} from "react"

function FaceBook() {
    const [country,setCountry]=useState("")
    // const [color,setColor]=useState("white")#A3D2E2
 
  const getUniqueValues = (array) => (
    array.map(item => item.country).filter((currentValue, index, arr) => (
          arr.indexOf(currentValue) === index
      ))
  )
    return (
      <div>
    <button style={{ width: "30px",height:"30px" }} onClick={() => setCountry('All')}>All</button>
      {getUniqueValues(profiles).map((country, index)=>(
        <span key={index} >
      
        <button style={{ height:"30px" }} onClick={() => setCountry(country)}>{country}</button>
        </span>
        
      ))}
        {profiles.map((profile,index) => (
          
          <div className="d-flex border facebook" key={index} style={{background: country === profile.country || country === 'All'? '#A3D2E2': 'white' }}>
            <div className="d-flex driverCardContainer" style={{ width: "90%" }}>
              <div style={{ width: "30%" }}>
                <img src={profile.img} alt={`${profile.firstName} ${profile.lastName}`} />
              </div>
       
              <div style={{ textAlign: "left", width: "70%" }}>
                <p><b>First Name: </b>{profile.firstName}</p>
                <p><b>Last Name: </b>{profile.lastName}</p>
                <p><b>Country: </b>{profile.country}</p>
                <p><b>Type: </b>{profile.isStudent ? "Student" : "Teacher"}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
export default FaceBook;
