//import { Link } from "react-router-dom";

import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ListeFilieres = () => {

    const [data, setData] = useState([]);
    useEffect( ()=>{
        const fetchData = async () => {
            const resultat = await axios(`${process.env.REACT_APP_SERVER_URL}/filieres`);
            setData(resultat.data);
        };
        fetchData();
    },[]);
async function deleteFiliere (id) {
    try {
        await axios.delete((`${process.env.REACT_APP_SERVER_URL}/filieres/${id}`));
    } catch (error) {
        console.log("Suppression de la filière échouée: "+error)
    }  
}

return (
    <>

<div className="container">

<div className="bd-example">
  <table className="table">
    <thead>
      <tr className="table-warning">
        <th scope="col">Code filière</th>
        <th scope="col">Désignation</th>
        <th scope="col">Modules</th>
        <th scope="col">Modifier</th>
        <th scope="col">Supprimer</th>
      </tr>
    </thead>
    <tbody>
        {data.map( element =>(
            <tr key={element._id} className="table-success">
                <th scope="row"> {element.codeFiliere} </th>
                <td>{element.designation}</td>
                <td> <Link to={`/admin/filiere/AddModulesToFiliere/${element._id}`} className="btn btn-dark">Modules</Link> </td>
                <td> <Link to={`/admin/filiere/EditFiliere/${element._id}`} className="btn btn-dark">Modifier</Link> </td>
                <td> <button  onClick={()=> deleteFiliere(element._id)} className="btn btn-danger"> Supprimer </button> </td> 
            </tr>
        ))}
    </tbody>
  </table>
</div>

</div>


        </>
);
}

export default ListeFilieres;