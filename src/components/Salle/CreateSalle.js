//import { Link } from "react-router-dom";

import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const CreateSalle = (req,res) => {
    const initialData ={
        designation:"",
        type:"cours",
        emploi:null
}
const [data, setData] = useState(
        initialData );

function handleChangeSalle(e) {
        const newData = {...data}
        console.log(data)
        console.log(e.target.value)
        newData[e.target.id]=e.target.value
        setData(newData)
        console.log(data)
}
async function handleSubmitSalle(e) {
        e.preventDefault()
        await axios.post(
          `${process.env.REACT_APP_SERVER_URL}/salles/CreateSalle`,
            {
                designation:data.designation,
                type:data.type
        }
        );
        setData(initialData);
    }
return (
    <>

<div className="container">
<h2>Créer une salle</h2>
<div className="bd-example">
<form onSubmit={(e)=> handleSubmitSalle(e)}>
<div className="row g-2">
  <div className="col-md">
    <div className="form-floating">
      <input type="text" onChange={(e)=> handleChangeSalle(e)} className="form-control" id="type" value={data.codeModule}/>
      <label for="type">type de la salle</label>
    </div>
  </div>

  <div className="col-md">
    <div className="form-floating">
      <input type="text" onChange={(e)=> handleChangeSalle(e)} className="form-control" id="designation" value={data.designation}/>
      <label for="designation">designation de la salle</label>
    </div>
  </div>
</div>
<button type="submit" className="btn btn-primary">Sauvegarder</button>
</form>

<Link to={`/ListeSalles/`} className="btn btn-dark">Liste des salles</Link>
</div>

</div>


        </>
);
}

export default CreateSalle;