//import { Link } from "react-router-dom";

import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ListeFormateurs = () => {

    const [data, setData] = useState([]);
    useEffect( ()=>{
        const fetchData = async () => {
            const resultat = await axios(`${process.env.REACT_APP_SERVER_URL}/users`);
            setData(resultat.data);
        };
        fetchData();
    },[]);

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
//const [groupeModules, setGroupeModules]= useState([])
async function deleteFormateur (userId) {
        try {
           const user1 = await axios.delete((`${process.env.REACT_APP_SERVER_URL}/users/${userId}`));

           //setGroupeModules(users1.data)
           console.log("user1.data")
           console.log(user1.data)
           user1.data.modules.map( (mod)=> (
            declarerNonAffectationDuModule(mod.groupe,mod.module)
            ))
           

        } catch (error) {
            console.log("Suppression du formateur échouée: "+error)
        }  
}

return (
    <>

<div className="container">

<div className="bd-example">
  <table className="table">
    <thead>
      <tr className="table-warning">
        <th scope="col">Utilisateur</th>
        <th scope="col">Role</th>
        <th scope="col">Masse horaire DRH</th>
        <th scope="col">Masse horaire Affectée</th>
        <th scope="col">Masse horaire r</th>
        <th scope="col">Permanent</th>
        <th scope="col">Modules</th>
        <th scope="col">Emploi</th>
        <th scope="col">Modifier</th>
        <th scope="col">Supprimer</th>
      </tr>
    </thead>
    <tbody>
        {data.map( element =>(
            <tr key={element._id} className={(element.masseHoraireDRH < element.masseHoraireAffectee)? "table-success" :"table-danger"} >
                <th scope="row"> {element.nom} {element.prenom}</th>
                <td>{element.role}</td>
                <td>{element.masseHoraireDRH}</td>
                <td>{element.masseHoraireAffectee}</td>
                <td>{element.masseHoraireRealiseeCalc}</td>
                <td>{element.permanent? "oui":"non"}</td>
                <td> <Link to={`/admin/grh/ListeModulesOfFormateur/${element._id}`} className="btn btn-dark">Modules</Link> </td>
                <td> <Link to={`/admin/grh/EmploiFormateur/${element._id}`} className="btn btn-dark">Emploi</Link> </td>
                <td> <Link to={`/admin/grh/EditFormateur/${element._id}`} className="btn btn-dark">Modifier</Link> </td>
                <td> <button  onClick={()=> deleteFormateur(element._id)} className="btn btn-danger"> Supprimer </button> </td> 
            </tr>
        ))}
    </tbody>
  </table>
</div>

</div>


        </>
);
}

export default ListeFormateurs;