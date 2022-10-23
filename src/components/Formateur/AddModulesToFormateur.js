//import { Link } from "react-router-dom";

import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const AddModulesToFormateur = () => {

  //const {id} = useParams();
  //const id="634081de2e1d1f2a61332d55"

  const [data, setData] = useState( [] );
  useEffect( ()=>{
    const fetchData = () => {

       axios.get(`${process.env.REACT_APP_SERVER_URL}/groupes/`)
        .then( (resultat)=> {
            //const {modules} = resultat.data;
          setData(resultat.data);
          console.log(resultat.data)
          console.log("récupération de tous les groupes en détail!!!");
        })
        .catch((e)=>console.log("récupération de tous groupes en détail échouée!!! : "+e));
    };

    fetchData();
  },[]);

  const [formateurs, setFormateurs] = useState( [] );
  useEffect( ()=>{
    const fetchData = () => {

       axios.get(`${process.env.REACT_APP_SERVER_URL}/users/`)
        .then( (resultat)=> {
            //const {modules} = resultat.data;
          setFormateurs(resultat.data);
          console.log(resultat.data)
          console.log("récupération de tous les formateurs");
        })
        .catch((e)=>console.log("récupération de tous les formateurs : "+e));
    };

    fetchData();
  },[]);
  
  const declarerAffectationDuModule = (groupeId, groupeModuleId)=> {
    axios.patch(`${process.env.REACT_APP_SERVER_URL}/groupes/declareAffectationModuleOfGroupe/`,
    {
        groupeId,
        groupeModuleId
    }
)
.then( ()=>{
    console.log("module déclaré affecté réussi!!!")
})
.catch((e)=>console.log("module déclaré affecté échouée!!! : "+e));

  }

  const declarerNonAffectationDuModule = (groupeId, groupeModuleId)=> {
    axios.patch(`${process.env.REACT_APP_SERVER_URL}/groupes/declareNonAffectationModuleOfGroupe/`,
    {
        groupeId,
        groupeModuleId
    }
)
.then( ()=>{
    console.log("module déclaré NON affecté réussi!!!")
})
.catch((e)=>console.log("module déclaré NON affecté échouée!!! : "+e));

  }

const addModuleToFormateur = ( moduleId,groupeId,masseHoraireP) => {
    axios.patch(`${process.env.REACT_APP_SERVER_URL}/users/addModuleToUser/`,
        {
            moduleId,
            groupeId, 
            userId:filiereState,
            masseHoraireP
        }
    )
    .then( ()=>{
        console.log("Ajout du module à l'utilisateur réussi!!!")
        declarerAffectationDuModule(groupeId,moduleId)
    })
    .catch((e)=>console.log("Ajout du module à l'utilisateur échouée!!! : "+e));

  }

  const removeModuleFromFormateur = ( moduleId,groupeId, masseHoraireP) => {
    axios.patch(`${process.env.REACT_APP_SERVER_URL}/users/removeModuleFromUser/`,
        {
            moduleId,
            groupeId, 
            userId:filiereState,
            masseHoraireP
        }
    )
    .then( ()=>{
        console.log("Suppression du module de l'utilisateur réussi!!!")
        declarerNonAffectationDuModule(groupeId,moduleId)
    })
    .catch((e)=>console.log("Suppression du module de l'utilisateur échouée!!! : "+e));

  }
  const [filiereState, setFiliereState] = useState(null);
return (
    <>

<div className="container">
<div className="bd-example">
<h2>Liste de tous les modules de tous les groupes</h2>
<div>
    <label> <h3 className="text-danger"><b>Il faut choisir un formateur</b></h3></label>
<select onChange={(e)=> { 
            const selectedFiliere = e.target.value;
            setFiliereState(selectedFiliere);
                      } } value={filiereState} className="form-select" aria-label="Default select example">
    <option selected>Selectionner un formateur</option>
    {formateurs.map( (formateur)=> (
  			  <option value={formateur._id}>{formateur.nom} {formateur.prenom}</option>
            ) )}
</select>
<Link to={`/ListeFormateurs/`} className="btn btn-dark">Liste des formateurs</Link>
</div>

{data && data.map( element =>{ 

return (
<div>
<h2>Affecter les modules du groupe {element.designation} </h2>
<table key={element._id} className="table">
    <thead>
      <tr className="table-warning">
        <th scope="col">Code Module</th>
        <th scope="col">Designation</th>
        <th scope="col">Masse horaire p</th>
        <th scope="col">Masse horaire d</th>
        <th scope="col">regional</th>
        <th scope="col">Affecté</th>
        <th scope="col">Ajouter</th>
        <th scope="col">Supprimer</th>
      </tr>
    </thead>
    <tbody >
        {element && element.mods.map( item =>{ 

		return (  //!item.affecte &&

                    <tr key={item} className={item.affecte? "table-success":"table-danger"}>
                        <th scope="row"> {item.codeModule} </th>
                        <td>{item.designation}</td>
                        <td>{item.masseHoraireP}</td>
                        <td>{item.masseHoraireD}</td>
                        <td>{item.regional? "oui":"non"} </td>
                        <td>{item.affecte? "oui":"non"} </td>
                        <td>
                            <button onClick={()=>{filiereState && addModuleToFormateur(item._id,element._id, item.masseHoraireP)}}>Ajouter</button> 
                        </td>
                        <td>
                            <button onClick={()=>{removeModuleFromFormateur(item._id,element._id, item.masseHoraireP)}}>Supprimer</button> 
                        </td>
                    </tr>  

    )})}               
    </tbody>
  </table>
  </div>
)})}
  </div>
</div>

        </>
);
}

export default AddModulesToFormateur;