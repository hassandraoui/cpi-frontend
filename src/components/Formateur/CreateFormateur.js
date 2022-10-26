//import { Link } from "react-router-dom";

import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const CreateFormateur = (req,res) => {
    const initialData ={
        nom: "",
        prenom: "",
        matricule: "",
        email: "",
        role:"USER",
        password:"",
        permanent: true,
        masseHoraireDRH: 0,
        masseHoraireAffectee: 0,
        masseHoraireRealiseeCalc: 0
}
const [data, setData] = useState(
        initialData
    );


//const [filiereState, setFiliereState] = useState("");

function handleChangeGroupe(e) {
        const newData = {...data}
        console.log(data)
        console.log(e.target.value)
        newData[e.target.id]=e.target.value
        setData(newData)
        console.log(data)
    }
 async function handleSubmitFormateur(e) {
        e.preventDefault()

        //data.filiereId=filiereState;

        await axios.post(
          `${process.env.REACT_APP_SERVER_URL}/users/CreateUser`,  
                data   
        );
        setData(initialData);
    }
return (
    <>

<div className="container">
<h2>Créer un formateur</h2>
<div className="bd-example">

<form onSubmit={(e)=> handleSubmitFormateur(e) }>

<div className="row g-2">
  
  <div className="col-md">
    <div className="form-floating">
      <input type="text" onChange={(e)=> handleChangeGroupe(e)} className="form-control" id="matricule" value={data.matricule}/>
      <label for="matricule">Matricule ou CIN</label>
    </div>
  </div>

  <div className="col-md">
    <div className="form-floating">
    <input type="password" onChange={(e)=> handleChangeGroupe(e)} className="form-control" id="password" value={data.password}/>
      <label for="password">Mot de passe</label>
    </div>
  </div>

</div>

<div className="row g-2">
  
  <div className="col-md">
    <div className="form-floating">
      <input type="text" onChange={(e)=> handleChangeGroupe(e)} className="form-control" id="nom" value={data.nom}/>
      <label for="nom">Nom</label>
    </div>
  </div>

  <div className="col-md">
    <div className="form-floating">
    <input type="text" onChange={(e)=> handleChangeGroupe(e)} className="form-control" id="prenom" value={data.prenom}/>
      <label for="prenom">Prénom</label>
    </div>
  </div> 

</div>    

<div className="row g-2">
  
  <div className="col-md">
    <div className="form-floating">
      <input type="email" onChange={(e)=> handleChangeGroupe(e)} className="form-control" id="email" value={data.email}/>
      <label for="email">Email</label>
    </div>
  </div>

  <div className="col-md">
    <div className="form-floating">
    <input type="text" onChange={(e)=> handleChangeGroupe(e)} className="form-control" id="role" value={data.role}/>
      <label for="role">Role</label>
    </div>
  </div> 

</div> 
    
<div className="row g-2">
  
  <div className="col-md">
    <div className="form-floating">
      <input type="number" onChange={(e)=> handleChangeGroupe(e)} className="form-control" id="masseHoraireDRH" value={data.masseHoraireDRH}/>
      <label for="masseHoraireDRH">Masse horaire DRH</label>
    </div>
  </div>

  <div className="col-md">
    <div className="form-floating">
    <input type="text" onChange={(e)=> handleChangeGroupe(e)} className="form-control" id="permanent" value={data.permanent}/>
      <label for="permanent">Permanent</label>
    </div>
  </div>

</div>    
    
<div>    
    <button type="submit" className="btn btn-primary">Ajouter formateur</button>
</div>



</form>
</div>
</div>

<div>
<Link to={`/AddModulesToFormateur/`} className="btn btn-dark">Affecter des modules aux formateurs</Link>
</div>


        </>
);
}

export default CreateFormateur;
