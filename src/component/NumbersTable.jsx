
import PropTypes from 'prop-types'
function NumbersTable({limit}){


    function generateTable(){
        const table = [];
        for (let i = 1; i <= limit; i++) {
            let itemColor = i % 2 ? "red" : "white";
      
            table.push(
              <div key={i} className="d-flex numberTable border" style={{ backgroundColor: itemColor ,width:"100px",height:"100px"}}>
                {i}
              </div>
            );
          }
          return table; 
    }


  
return (

      <div className="d-flex numberTableContainer">{generateTable()}</div>
)
}
export default NumbersTable;


NumbersTable.propTypes = {
  limit: PropTypes.number
}