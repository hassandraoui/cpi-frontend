//import { Link } from "react-router-dom";

import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const AddModulesToFiliere = () => {

  const {id} = useParams();

  const [data, setData] = useState( [] );
  useEffect( ()=>{
    const fetchData = () => {

       axios.get(`${process.env.REACT_APP_SERVER_URL}/modules/findModulesByFiliereId/${id}`)
        .then( (resultat)=> {
          setData(resultat.data);
          console.log("récupération des modules selon filiereID!!!");
        })
        .catch((e)=>console.log("récupération des modules selon filiereID échouée!!! : "+e));
    };

    fetchData();
  },[id]);

  const [dataFiliere, setDataFiliere] = useState( {} );
  useEffect( ()=>{
    const fetchData = () => {

       axios.get(`${process.env.REACT_APP_SERVER_URL}/filieres/${id}`)
        .then( (resultat)=> {
            setDataFiliere(resultat.data);
          console.log("récupération des informations de la filière!!!");

        })
        .catch((e)=>console.log("récupération des informations de la filière échouée!!! : "+e));
    };

    fetchData();
  },[id]);
  
  const addModuleToFiliere = ( moduleId) => {
    axios.patch(`${process.env.REACT_APP_SERVER_URL}/filieres/addModuleToFiliere/`,
        {
            moduleId, 
            filiereId:id
        }
    )
    .then( ()=>{
        console.log("Ajout du module à la filiere réussi!!!")
    })
    .catch((e)=>console.log("Ajout du module à la filiere échouée!!! : "+e));
  }

  const removeModuleFromFiliere = ( moduleId) => {
    axios.patch(`${process.env.REACT_APP_SERVER_URL}/filieres/removeModuleFromFiliere/`,
        {
            moduleId, 
            filiereId:id
        }
    )
    .then( ()=>{
        console.log("Suppression du module de la filiere réussi!!!")
    })
    .catch((e)=>console.log("Suppression du module de la filiere échouée!!! : "+e));
  }

  const [moduleState, setModuleState] = useState(null); 
  const [autresModules, setAutresModules] = useState([]); 
  useEffect( ()=>{
    const fetchData = () => {

       axios.get(`${process.env.REACT_APP_SERVER_URL}/modules/`)
        .then( (resultat)=> {
            setAutresModules(resultat.data);
            console.log("récupération de tous les modules");
        })
        .catch((e)=>console.log("récupération de tous les modules échouée : "+e));
    };

    fetchData();
  },[]);

  const [infoModule, setInfoModule] = useState({}); 
  useEffect( ()=>{
    const fetchData = () => {
        if(moduleState){
            axios.get(`${process.env.REACT_APP_SERVER_URL}/modules/${moduleState}`)
                .then( (resultat)=> {
                    setInfoModule(resultat.data);
                    console.log("récupération du module choisi");
                })
                .catch((e)=>console.log("récupération du module choisi échouée : "+e));
            };
    }
    fetchData();
  },[moduleState]);
return (
    <>

<div className="container">
<h2>Liste des modules de la filière  </h2>
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
        {dataFiliere.modules && dataFiliere.modules.map( element =>(
            <tr key={element} className="table-success">
                <th scope="row"> {element.codeModule} </th>
                <td>{element.designation}</td>
                <td>{element.masseHoraireP}</td>
                <td>{element.masseHoraireD}</td>
                <td>{element.regional? "oui":"non"}</td>
            </tr>
        ))}
    </tbody>
  </table>
  <Link to={`/CreateGroupe/`} className="btn btn-dark">Créer des groupes</Link>
</div>


</div>


<div className="container">
<h2>Ajouter/supprimer des modules de la filière</h2>
<div className="bd-example">

  <table className="table">
    <thead>
      <tr className="table-warning">
        <th scope="col">Code Module</th>
        <th scope="col">Designation</th>
        <th scope="col">Masse horaire p</th>
        <th scope="col">Masse horaire d</th>
        <th scope="col">regional</th>
        <th scope="col">Affecté à cette filière?</th>
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
                <td>{element.filiereId===id? "oui":"non"}</td>
                <td>
                    <button onClick={()=>{addModuleToFiliere(element._id)}}>Ajouter</button>
                </td>
                <td>
                    <button onClick={()=>{removeModuleFromFiliere(element._id)}}>Supprimer</button>
                </td>
            </tr>
        ))}

        <tr className="table-success">
        <th scope="row"> 
            <select onChange={(e)=> { 
                        const selectedModule = e.target.value;
                        setModuleState(selectedModule);
                                } } value={moduleState} className="form-select" aria-label="Default select example">
                <option selected>Selectionner un module</option>
                {autresModules.map( (mod)=> (
                        <option key={mod._id} value={mod._id}>{mod.codeModule}</option>
                        ) )}
            </select>
        </th>
        <td>{infoModule.designation}</td>
        <td>{infoModule.masseHoraireP}</td>
        <td>{infoModule.masseHoraireD}</td>
        <td>{infoModule.regional? "oui":"non"}</td>
        <td>{infoModule.filiereId===id? "oui":"non"}</td>
        <td>
            <button onClick={()=>{addModuleToFiliere(infoModule._id)}}>Ajouter</button>
        </td>
        <td>
            <button onClick={()=>{removeModuleFromFiliere(infoModule._id)}}>Supprimer</button>
        </td>
        </tr>
    </tbody>
  </table>
</div>



</div>

        </>
);
}

export default AddModulesToFiliere;
