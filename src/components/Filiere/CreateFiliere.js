//import { Link } from "react-router-dom";

import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const CreateFiliere = (req,res) => {
    const initialData ={
        codeFiliere:"",
        designation:""
    }
    const [data, setData] = useState(
        initialData
    );

    function handleChangeFiliere(e) {
        const newData = {...data}
        console.log(data)
        console.log(e.target.value)
        newData[e.target.id]=e.target.value
        setData(newData)
        console.log(data)
    }
    async function handleSubmitFiliere(e) {
        e.preventDefault()
        await axios.post(
            `${process.env.REACT_APP_SERVER_URL}/filieres/CreateFiliere`,
            {
                designation:data.designation,
                codeFiliere:data.codeFiliere
            }         
        );
        setData(initialData);
    }
return (
    <>

<div className="container">
<h2>Créer une filière</h2>
<div className="bd-example">

<form onSubmit={(e)=>handleSubmitFiliere(e)}>
<div className="row g-2">
  <div className="col-md">

    <div className="form-floating">
      <input type="text" onChange={(e)=> handleChangeFiliere(e)} className="form-control" id="codeFiliere" value={data.codeFiliere} />
      <label for="codeFiliere">code de la filière</label>
    </div>
  </div>

  <div className="col-md">
    <div className="form-floating">
      <input type="text" onChange={(e)=> handleChangeFiliere(e)} className="form-control" id="designation"  value={data.designation} />
      <label for="designation">designation de la filière</label>
    </div>
  </div>
</div>
<button type="submit" className="btn btn-primary">Ajouter filière</button>
</form>

<div><Link to={`/ListeFilieres/`} className="btn btn-dark">Liste des filières</Link></div>


<div><Link to={`/CreateModule/`} className="btn btn-dark">Ajouter modules</Link></div>
<div><Link to={`/admin/`} className="btn btn-dark">Admin</Link></div>

</div>

</div>


        </>
);
}

export default CreateFiliere;