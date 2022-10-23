//import { Link } from "react-router-dom";

import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ListeGroupes = () => {

    const [data, setData] = useState([]);
    useEffect( ()=>{
        const fetchData = async () => {
            const resultat = await axios(`${process.env.REACT_APP_SERVER_URL}/groupes`);
            setData(resultat.data);
        };
        fetchData();
    },[]);
    
async function deleteGroupe (id) {
        try {
            await axios.delete((`${process.env.REACT_APP_SERVER_URL}/groupes/${id}`));
        } catch (error) {
            console.log("Suppression du groupe échouée: "+error)
        }  
}

return (
    <>

<div className="container">

<div className="bd-example">
  <table className="table">
    <thead>
      <tr className="table-warning">
        <th scope="col">Code Groupe</th>
        <th scope="col">Filière</th>
        <th scope="col">Modules</th>
        <th scope="col">Stagiaires</th>
        <th scope="col">Modifier</th>
        <th scope="col">Emploir</th>
        <th scope="col">Supprimer</th>
      </tr>
    </thead>
    <tbody>
        {data.map( element =>(
            <tr key={element} className="table-success">
                <th scope="row"> {element.designation} </th>
                <td>{element.filiereId.codeFiliere}</td>
                <td> <Link to={`/admin/groupe/AddModulesToGroupe/${element._id}`} className="btn btn-dark">Liste des modules</Link> </td>
                <td> <button type="button" className="btn btn-dark">Liste des stagiaires</button> </td>
                <td> <Link to={`/admin/groupe/EditGroupe/${element._id}`} className="btn btn-dark">Modifier</Link> </td>
                <td> <Link to={`/admin/groupe/EmploiGroupe/${element._id}`} className="btn btn-dark">Emploi</Link> </td>
                <td> <button  onClick={()=> deleteGroupe(element._id)} className="btn btn-danger"> Supprimer </button> </td> 
            </tr>
        ))}
    </tbody>
  </table>
</div>

</div>


        </>
);
}

export default ListeGroupes;