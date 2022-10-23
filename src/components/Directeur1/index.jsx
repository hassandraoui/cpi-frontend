//import { Link } from "react-router-dom";

import axios from "axios";
import { useEffect, useState } from "react";

const Directeur1 = () => {

    const [data, setData] = useState([]);
    useEffect( ()=>{
        const fetchData = async () => {
            const resultat =await axios("http://localhost:3000/users");
            setData(resultat.data);
        };
        fetchData();
    },[]);

return (
    <>
<div class="container">

<div class="bd-example">
  <table class="table">
    <thead>
      <tr class="table-warning">
        <th scope="col">Formateur</th>
        <th scope="col">Masse horaire DRH</th>
        <th scope="col">Masse horaire affectée</th>
        <th scope="col">Masse horaire prévue</th>
        <th scope="col">Masse horaire réalisée</th>
        <th scope="col">Détails</th>
      </tr>
    </thead>
    <tbody>
        {data.map( element =>(
            <tr key={element} class="table-success">
                <th scope="row"> {element.nom} {element.prenom}</th>
                <td>{element.masseHoraireDRH}</td>
                <td>{element.masseHoraireAffectee}</td>
                <td>210</td>
                <td>{element.masseHoraireRealiseeCalc}</td>
                <td> <button type="button" class="btn btn-dark">Plus</button> </td>
            </tr>
        ))}


      <tr class="table-danger">
        <th scope="row"> JIBRIL Soukaina</th>
        <td>910</td>
        <td>910</td>
        <td>210</td>
        <td>85</td>
        <td> <button type="button" class="btn btn-dark">Plus</button> </td>
      </tr>
    </tbody>
  </table>
</div>

</div>


        </>
);
}

export default Directeur1;