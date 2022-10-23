//import { Link } from "react-router-dom";

import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ListeSalles = () => {

    const [data, setData] = useState([]);
    useEffect( ()=>{
        const fetchData = async () => {
            const resultat = await axios(`${process.env.REACT_APP_SERVER_URL}/salles`);
            setData(resultat.data);
        };
        fetchData();
    },[]);

async function deleteSalle (id) {
        try {
            await axios.delete((`${process.env.REACT_APP_SERVER_URL}/salles/${id}`));
        } catch (error) {
            console.log("Suppression de la salle échouée: "+error)
        }  
}
return (
    <>

<div className="container">

<div className="bd-example">
  <table className="table">
    <thead>
      <tr className="table-warning">
        <th scope="col">Designation</th>
        <th scope="col">Type de salle</th>
        <th scope="col">Occupation</th>
        <th scope="col">Modifier</th>
        <th scope="col">Supprimer</th>
      </tr>
    </thead>
    <tbody>
        {data.map( element =>(
            <tr key={element._id} className="table-success">
                <th scope="row"> {element.designation} </th>
                <td>{element.type}</td>
                <td> <Link to={`/admin/emploi/EmploiSalle/${element._id}`} className="btn btn-dark">Emploi</Link> </td>
                <td> <Link to={`/admin/emploi/EditSalle/${element._id}`} className="btn btn-dark">Modifier</Link> </td>
                <td> <button  onClick={()=> deleteSalle(element._id)} className="btn btn-danger"> Supprimer </button> </td> 
            </tr>
        ))}
    </tbody>
  </table>
</div>

</div>


        </>
);
}

export default ListeSalles;