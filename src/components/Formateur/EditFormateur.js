//import { Link } from "react-router-dom";

import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const EditFormateur = () => {

  const {id} = useParams();

  //const [valeur, setValeur] = useState(null);
  const [data, setData] = useState( {} );
  useEffect( ()=>{
    const fetchData = () => {

       axios.get(`${process.env.REACT_APP_SERVER_URL}/users/${id}`)
        .then( (resultat)=> {
          setData(resultat.data);
          console.log("récupération des informations de l'utilisateur  réussie!!!");
        })
        .catch((e)=>console.log("récupération des informations de l'utilisateur échouée!!! : "+e));
    };

    fetchData();
  },[id]);


//const [dataFiliere, setFiliereData] = useState([]);
//const [filiereState, setFiliereState] = useState(data.filiere);

function handleChangeFormateur(e) {
        const newData = {...data}
        console.log(data)
        console.log(e.target.value)
        
        newData[e.target.id]=e.target.value;
        setData(newData)
        console.log(data)
    }
function handleSubmitFormateur(e) {
        e.preventDefault()

        //data.filiereId=filiereState;

        axios.patch(
            `${process.env.REACT_APP_SERVER_URL}/users/${id}`,
            data
        ).then(()=> {
          console.log("modification réussie!!!")
          window.location.replace("/ListeFormateurs");
        })
        .catch((e)=>console.log("modification échouée!!!"))
    }
return (
    <>

<div className="container">
<h2>Modifier un formateur</h2>
<div className="bd-example">

<form onSubmit={(e)=> handleSubmitFormateur(e) }>

<div className="row g-2">
  
  <div className="col-md">
    <div className="form-floating">
      <input type="text" onChange={(e)=> handleChangeFormateur(e)} className="form-control" id="matricule" value={data.matricule}/>
      <label for="matricule">Matricule ou CIN</label>
    </div>
  </div>

  <div className="col-md">
    <div className="form-floating">
    <input type="password" onChange={(e)=> handleChangeFormateur(e)} className="form-control" id="password" value={data.password}/>
      <label for="password">Mot de passe</label>
    </div>
  </div>

</div>

<div className="row g-2">
  
  <div className="col-md">
    <div className="form-floating">
      <input type="text" onChange={(e)=> handleChangeFormateur(e)} className="form-control" id="nom" value={data.nom}/>
      <label for="nom">Nom</label>
    </div>
  </div>

  <div className="col-md">
    <div className="form-floating">
    <input type="text" onChange={(e)=> handleChangeFormateur(e)} className="form-control" id="prenom" value={data.prenom}/>
      <label for="prenom">Prénom</label>
    </div>
  </div> 

</div>    

<div className="row g-2">
  
  <div className="col-md">
    <div className="form-floating">
      <input type="email" onChange={(e)=> handleChangeFormateur(e)} className="form-control" id="email" value={data.email}/>
      <label for="email">Email</label>
    </div>
  </div>

  <div className="col-md">
    <div className="form-floating">
    <input type="text" onChange={(e)=> handleChangeFormateur(e)} className="form-control" id="role" value={data.role}/>
      <label for="role">Role</label>
    </div>
  </div> 

</div> 
    
<div className="row g-2">
  
  <div className="col-md">
    <div className="form-floating">
      <input type="number" onChange={(e)=> handleChangeFormateur(e)} className="form-control" id="masseHoraireDRH" value={data.masseHoraireDRH}/>
      <label for="masseHoraireDRH">Masse horaire DRH</label>
    </div>
  </div>

  <div className="col-md">
    <div className="form-floating">
    <input type="text" onChange={(e)=> handleChangeFormateur(e)} className="form-control" id="permanent" value={data.permanent}/>
      <label for="permanent">Permanent</label>
    </div>
  </div>

</div>    
    
<div>    
    <button type="submit" className="btn btn-primary">Modifier formateur</button>
</div>



</form>
</div>
</div>

<div>
    <button type="submit" className="btn btn-primary">Ajouter module</button>
    <button type="submit" className="btn btn-primary">Ajouter stagiaire</button>
</div>


        </>
);
}

export default EditFormateur;
