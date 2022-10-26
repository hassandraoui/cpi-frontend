//import { Link } from "react-router-dom";

import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const AddModulesToGroupe = () => {

  const {id} = useParams();
  //const id="634081de2e1d1f2a61332d55"

  const [data, setData] = useState( [] );
  useEffect( ()=>{
    const fetchData = () => {

       axios.get(`${process.env.REACT_APP_SERVER_URL}/modules/`)
        .then( (resultat)=> {
          setData(resultat.data);
          console.log("récupération de tous les modules!!!");
        })
        .catch((e)=>console.log("récupération de tous les modules échouée!!! : "+e));
    };

    fetchData();
  },[]);
  //const [moduleFull, setModuleFull] = useState(null)
  const addModuleToGroupe = ( moduleId) => {
    console.log("moduleId")
    console.log(moduleId)
        axios(`${process.env.REACT_APP_SERVER_URL}/modules/${moduleId}`)
        .then( (moduleFull1)=>{
            //setModuleFull(moduleFull1.data);
            console.log("moduleFull1.data")
            console.log(moduleFull1.data)
            console.log("Ajout du module au groupe réussi!!!")

            axios.patch(`${process.env.REACT_APP_SERVER_URL}/groupes/addModuleToGroupe/`,
            {
                moduleFull:moduleFull1.data, 
                groupeId:id
            }
        )
        .then( ()=>{
            console.log("Ajout du module au groupe réussi!!!")
        })
        .catch((e)=>console.log("Ajout du module au groupe échouée!!! : "+e));
        })
        
        .catch((e)=>console.log("Ajout du module au groupe échouée!!! : "+e));
    
  }
  const [dataGroupe, setDataGroupe] = useState( {} );
  useEffect( ()=>{
    const fetchData = () => {

       axios(`${process.env.REACT_APP_SERVER_URL}/groupes/${id}`)
        .then( (resultat)=> {
            setDataGroupe(resultat.data);
            console.log("récupération des informations du groupe!!!");
        })
        .catch((e)=>console.log("récupération des informations du groupe échouée!!! : "+e));
    };

    fetchData();
  },[id]);

  const removeModuleFromGroupe = ( moduleId) => {
    console.log("moduleId")
    console.log(moduleId)
        axios(`${process.env.REACT_APP_SERVER_URL}/modules/${moduleId}`)
        .then( (moduleFull1)=>{
            //setModuleFull(moduleFull1.data);
            console.log("moduleFull1")
            console.log(moduleFull1.data)

                    axios.patch(`${process.env.REACT_APP_SERVER_URL}/groupes/removeModuleFromGroupe/`,
                    {
                        moduleFull:moduleFull1.data, 
                        groupeId:id
                    }
                )
                .then( ()=>{
                    console.log("Suppression du module du groupe réussi!!!")
                })
                .catch((e)=>console.log("Suppression du module du groupe échouée!!! : "+e));

        })
        .catch((e)=>console.log("Ajout du module au groupe échouée!!! : "+e));
  }

return (
    <>

<div className="container">

<div className="container">
<h2>Liste des modules du groupe {dataGroupe.designation}</h2>
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
    <tbody>
        {dataGroupe.mods && dataGroupe.mods.map( element =>(
                    <tr key={element._id} className="table-success">
                       <th scope="row"> {element.codeModule} </th>
                       <td>{element.designation}</td>
                       <td>{element.masseHoraireP}</td>
                       <td>{element.masseHoraireD}</td>
                       <td>{element.regional? "oui":"non"}</td>
                   </tr>

        ))}
        </tbody>
  </table>
  <Link to={`/AddModulesToFormateur/`} className="btn btn-dark">Affecter les modules des groupes aux formateurs</Link>
</div>

<h2>Ajouter/supprimer des modules au/du groupe {dataGroupe.designation}</h2>
<div className="bd-example">

  <table className="table">
    <thead>
      <tr className="table-warning">
        <th scope="col">Code Module</th>
        <th scope="col">Designation</th>
        <th scope="col">Masse horaire p</th>
        <th scope="col">Masse horaire d</th>
        <th scope="col">regional</th>
        <th scope="col">Ajouter</th>
        <th scope="col">Supprimer</th>
      </tr>
    </thead>
    <tbody>
        {data && data.map( element =>(
            <tr key={element} className="table-success">
                <th scope="row"> {element.codeModule} </th>
                <td>{element.designation}</td>
                <td>{element.masseHoraireP}</td>
                <td>{element.masseHoraireD}</td>
                <td>{element.regional? "oui":"non"}</td>
                <td>
                    <button onClick={()=>{addModuleToGroupe(element._id)}}>Ajouter</button>
                </td>
                <td>
                    <button onClick={()=>{removeModuleFromGroupe(element._id)}}>Supprimer</button>
                </td>
            </tr>
        ))}
    </tbody>
  </table>
</div>



</div>






</div>

        </>
);
}

export default AddModulesToGroupe;
