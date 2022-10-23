//import { Link } from "react-router-dom";

import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CreateGroupe = (req,res) => {
    const initialData ={
        designation:"",
        filiereId:""
}
const [data, setData] = useState(
        initialData
    );

    useEffect( ()=>{
        const fetchData = async () => {
            const resultat = await axios(`${process.env.REACT_APP_SERVER_URL}/filieres`);
            setFiliereData(resultat.data);
        };
    fetchData();
},[]);

const [dataFiliere, setFiliereData] = useState([]);
useEffect( ()=>{
    const fetchData = async () => {
        const resultat = await axios(`${process.env.REACT_APP_SERVER_URL}/filieres`);
        setFiliereData(resultat.data);
        console.log("récupération des filières  réussie!!!");
    };
    fetchData();
},[]);


const [filiereState, setFiliereState] = useState("");
function handleChangeGroupe(e) {
        const newData = {...data}
        console.log(data)
        console.log(e.target.value)
        newData[e.target.id]=e.target.value
        setData(newData)
        console.log(data)
    }
 async function handleSubmitGroupe(e) {
        e.preventDefault()

        data.filiereId=filiereState;

        await axios.post(
            `${process.env.REACT_APP_SERVER_URL}/groupes/CreateGroupe`,
            {
                designation: data.designation,
                filiereId:data.filiereId
            }
        );
        setData(initialData);
    }
return (
    <>

<div className="container">
<h2>Créer un groupe</h2>
<div className="bd-example">

<form onSubmit={(e)=> handleSubmitGroupe(e) }>
<div className="row g-2">
  <div className="col-md">
    <div className="form-floating">
      <input type="text" onChange={(e)=> handleChangeGroupe(e)} className="form-control" id="designation" value={data.designation}/>
      <label for="designation">code du groupe</label>
    </div>
  </div>

  <div className="col-md">
    <div className="form-floating">
    <select id="filiereId" onChange={(e)=> { 
            const selectedFiliere = e.target.value;
            setFiliereState(selectedFiliere);
        } } value={filiereState} className="form-select" aria-label="Default select example">
  			  <option selected>---</option>
                { dataFiliere.map( el => (
                    <option key={el._id} value={el._id}>{el.designation}</option>
                )) 
                }
  		</select>
      <label for="filiereId">Filière</label>
    </div>
    <button type="submit" className="btn btn-primary">Ajouter groupe</button>

  </div>

</div>
</form>

<Link to={`/admin/groupe/ListeGroupes/`} className="btn btn-dark">Liste des groupes</Link>

</div>


</div>




        </>
);
}

export default CreateGroupe;