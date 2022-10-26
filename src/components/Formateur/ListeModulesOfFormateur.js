//import { Link } from "react-router-dom";

import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const ListeModulesOfFormateur = () => {

  const {id} = useParams();
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
  const [dataFormateur, setDataFormateu] = useState( [] );
  useEffect( ()=>{
    const fetchData = () => {

       axios.get(`${process.env.REACT_APP_SERVER_URL}/users/${id}`)
        .then( (resultat)=> {
            //const {modules} = resultat.data;
          setDataFormateu(resultat.data);
          console.log(resultat.data)
          console.log("récupération des informations du formateur en détail!!!");
        })
        .catch((e)=>console.log("récupération des informations du formateur en détail échouée!!! : "+e));
    };

    fetchData();
  },[id]);
  
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
            userId:dataFormateur._id,
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
            userId:dataFormateur._id,
            masseHoraireP
        }
    )
    .then( ()=>{
        console.log("Suppression du module de l'utilisateur réussi!!!")
        declarerNonAffectationDuModule(groupeId,moduleId)
    })
    .catch((e)=>console.log("Suppression du module de l'utilisateur échouée!!! : "+e));

  }

return (
    <>

<div className="container">
<div className="bd-example">
<h2>Liste de tous des modules du formateur {dataFormateur.nom} {dataFormateur.prenom}</h2>

<div className="container">
<div className="bd-example">
<table className="table">
    <thead>
      <tr className="table-warning">
        <th scope="col">Code Module</th>
        <th scope="col">Designation</th>
        <th scope="col">Masse horaire p</th>
        <th scope="col">Masse horaire d</th>
        <th scope="col">regional</th>
      </tr>
    </thead>
    <tbody >
        {dataFormateur.modules && dataFormateur.modules.map( item =>(  

                    <tr key={item._id} className="table-success">
                        <th scope="row"> {item.module.codeModule} </th>
                        <td>{item.module.designation}</td>
                        <td>{item.module.masseHoraireP}</td>
                        <td>{item.module.masseHoraireD}</td>
                        <td>{item.module.regional? "oui":"non"} </td>
                    </tr>  

    ))}               
    </tbody>
  </table>

  <Link to={`/ListeFormateurs/`} className="btn btn-dark">Liste des formateurs</Link> 
  
</div>

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
                            <button onClick={()=>{addModuleToFormateur(item._id,element._id, item.masseHoraireP)}}>Ajouter</button> 
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

export default ListeModulesOfFormateur;
