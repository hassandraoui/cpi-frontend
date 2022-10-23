//import { Link } from "react-router-dom";

import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const EditFiliere = () => {

  //const [initialData, setInitialData] = useState( {} );
  const {id} = useParams();

  const [data, setData] = useState( {} );
  useEffect( ()=>{
    const fetchData = () => {

       axios.get(`${process.env.REACT_APP_SERVER_URL}/filieres/${id}`)
        .then( (resultat)=> {
          setData(resultat.data);
          console.log("récupération de la filière réussie!!!");
        })
        .catch((e)=>console.log("récupération de la filière échouée!!! : "+e));
    };

    fetchData();
  },[]);
  

function handleChangeFiliere(e) {
        const newData = {...data}
        console.log(data)
        console.log(e.target.value)
        newData[e.target.id]=e.target.value
        setData(newData)
        console.log(data)
    }
function handleSubmitFiliere(e) {
        e.preventDefault()
        axios.patch(
            `${process.env.REACT_APP_SERVER_URL}/filieres/${id}`,
            {
                codeFiliere: data.codeFiliere,
                designation:data.designation
        }
        ).then(()=> {
          console.log("modification réussie!!!")
          window.location.replace("/ListeFilieres");
        })
        .catch((e)=>console.log("modification échouée!!!"))
    }
return (
    <>

<div className="container">
<h2>Modifier une filière</h2>
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
<button type="submit" className="btn btn-primary">Modifier filière</button>
</form>



<a href="/CreateModule" className="btn btn-danger">Ajouter module </a>

</div>

</div>

        </>
);
}

export default EditFiliere;