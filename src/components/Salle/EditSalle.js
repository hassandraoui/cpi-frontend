//import { Link } from "react-router-dom";

import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const EditSalle = () => {
  const {id} = useParams();

  const [data, setData] = useState( {} );
  useEffect( ()=>{
    const fetchData = () => {

       axios.get(`${process.env.REACT_APP_SERVER_URL}/salles/${id}`)
        .then( (resultat)=> {
          setData(resultat.data);
          console.log("récupération de la salle  réussie!!!");
        })
        .catch((e)=>console.log("récupération de la salle  échouée!!! : "+e));
    };

    fetchData();
  },[]);
  

function handleChangeModule(e) {
        const newData = {...data}
        console.log(data)
        console.log(e.target.value)
        newData[e.target.id]=e.target.value
        setData(newData)
        console.log(data)
    }
function handleSubmitModule(e) {
        e.preventDefault()
        axios.patch(
            `${process.env.REACT_APP_SERVER_URL}/salles/${id}`,
            {
                designation:data.designation,
                type:data.type
        }
        ).then(()=> {
          console.log("modification réussie!!!")
          window.location.replace("/ListeSalles");
        })
        .catch((e)=>console.log("modification échouée!!!"))

}

return (
    <>

<div className="container">
<h2>Modifier une salle</h2>
<div className="bd-example">
<form onSubmit={(e)=> handleSubmitModule(e)}>
<div className="row g-2">
  <div className="col-md">
    <div className="form-floating">
      <input type="text" onChange={(e)=> handleChangeModule(e)} className="form-control" id="type" value={data.codeModule}/>
      <label for="type">type de salle</label>
    </div>
  </div>

  <div className="col-md">
    <div className="form-floating">
      <input type="text" onChange={(e)=> handleChangeModule(e)} className="form-control" id="designation" value={data.designation}/>
      <label for="designation">designation de la salle</label>
    </div>
  </div>
</div>

<button type="submit" className="btn btn-primary">Sauvegarder</button>
</form>
</div>

</div>


        </>
);
}

export default EditSalle;