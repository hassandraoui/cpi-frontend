//import { Link } from "react-router-dom";

import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ListeModules = () => {

    const [data, setData] = useState([]);
    useEffect( ()=>{
        const fetchData = async () => {
            const resultat = await axios(`${process.env.REACT_APP_SERVER_URL}/modules`);
            setData(resultat.data);
        };
        fetchData();
    },[]);

async function deleteModule (id) {
      try {
          await axios.delete((`${process.env.REACT_APP_SERVER_URL}/modules/${id}`));
      } catch (error) {
          console.log("Suppression du module échouée: "+error)
      }  
}

return (
    <>

<div className="container">

<div className="bd-example">
  <table className="table">
    <thead>
      <tr className="table-warning">
        <th scope="col">Code Module</th>
        <th scope="col">Designation</th>
        <th scope="col">Masse horaire présentiel</th>
        <th scope="col">Masse horaire à distance</th>
        <th scope="col">Modifier</th>
        <th scope="col">Supprimer</th>
      </tr>
    </thead>
    <tbody>
        {data.map( element =>(
            <tr key={element._id} className="table-success">
                <th scope="row"> {element.codeModule} </th>
                <td>{element.designation}</td>
                <td>{element.masseHoraireP}</td>
                <td>{element.masseHoraireD}</td>
                <td> <Link to={`/admin/module/EditModule/${element._id}`} className="btn btn-dark">Modifier</Link> </td>
                <td> <button  onClick={()=> deleteModule(element._id)} className="btn btn-danger"> Supprimer </button> </td>
            </tr>
        ))}
    </tbody>
  </table>
</div>

</div>


        </>
);
}

export default ListeModules;