//import { Link } from "react-router-dom";

import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { saveAs } from 'file-saver';

const EmploiGroupe = (req,res) => {


const {id} = useParams();

const [data, setData] = useState( {} );
const [dataFormateur, setFormateurData] = useState([]);
const [dataSalle, setSalleSata] = useState([]);
useEffect( ()=>{
      const fetchData1 = () => {
  
         axios.get(`${process.env.REACT_APP_SERVER_URL}/groupes/${id}`)
          .then( (resultat)=> {
            setData(resultat.data);
            console.log("récupération de l'emploi du groupe  réussie!!!");
          })
          .catch((e)=>console.log("récupération de l'emploi du groupe  échouée!!! : "+e));
      };

    const fetchData2 = () => {
        axios(`${process.env.REACT_APP_SERVER_URL}/users`).then( (resultat)=> {
            setFormateurData(resultat.data);
            console.log("récupération des formateurs  réussie!!!");
        })
        .catch((e)=>console.log("récupération des formateurs échouée!!! : "+e));
    };

    const fetchData3 = () => {
        axios(`${process.env.REACT_APP_SERVER_URL}/salles`).then( (resultat)=> {
            setSalleSata(resultat.data);
            console.log("récupération des salles  réussie!!!");
        })
        .catch((e)=>console.log("récupération des salles échouée!!! : "+e));
    };
    fetchData1();
    fetchData2();
    fetchData3();
    },[]);


function findFormateur(gId){
    try {
        return dataFormateur.find( (formateur)=> formateur._id === gId ).nom;
    } catch (error) {
        return " ";
    }
    
}

function findSalle(sId){
    try {
        return dataSalle.find( (sal)=> sal._id === sId ).designation;
    } catch (error) {
        return " ";
    }
    
}

async function Imprimer(){
    const corpsemploi = String(document.getElementById("corps-emploi").innerHTML)
    
    const designation = data.designation;
    axios.post(`${process.env.REACT_APP_SERVER_URL}/emplois/convrtEmploiToPDF`, {corpsemploi, designation})
    .then(() => axios.get(`${process.env.REACT_APP_SERVER_URL}/emplois/getEmploiPDF`, { responseType: 'blob' }))
    .then((res) => {
      const pdfBlob = new Blob([res.data], { type: 'application/pdf' });

      saveAs(pdfBlob, `Emploi-${data.designation}.pdf`);
    })
}
return (
    <>

<div className="container">
<h2>Emploi du groupe {data.designation}</h2>
<div className="bd-example">

<table className="table">
                
    <thead>
      <tr className="table-warning">
        <th scope="col">Jour</th>
        <th scope="col">Du 8h30 à 11h</th>
        <th scope="col">Du 11h à 13h30</th>
        <th scope="col">Du 13h30 à 16h</th>
        <th scope="col">Du 16h à 18h30</th>
      </tr>
    </thead>
    <tbody id="corps-emploi">

<tr className="table-success">
        <th scope="row"> Lundi </th>
            <td> 
                <b>{ data.emploi && data.emploi.lundi && findFormateur(data.emploi.lundi.seance1.userId)}</b>
                
                <b> - { data.emploi && data.emploi.lundi && findSalle(data.emploi.lundi.seance1.salleId)}</b> 
            </td>   

        <td> 
            <b>{ data.emploi && data.emploi.lundi && findFormateur(data.emploi.lundi.seance2.userId)}</b> 
            <b> - { data.emploi && data.emploi.lundi && findSalle(data.emploi.lundi.seance2.salleId)}</b> 
        </td>  

        <td> <b>{ data.emploi && data.emploi.lundi && findFormateur(data.emploi.lundi.seance3.userId)}</b> 
        <b> - { data.emploi && data.emploi.lundi && findSalle(data.emploi.lundi.seance3.salleId)}</b> 
        </td>  

        <td> <b>{ data.emploi && data.emploi.lundi && findFormateur(data.emploi.lundi.seance4.userId)}</b> 
        <b> - { data.emploi && data.emploi.lundi && findSalle(data.emploi.lundi.seance4.salleId)}</b> </td>  
</tr>

<tr className="table-success">
        <th scope="row"> Mardi </th>
        <td> <b>{ data.emploi && data.emploi.mardi && findFormateur(data.emploi.mardi.seance1.userId)}</b> 
        <b> - { data.emploi && data.emploi.mardi && findSalle(data.emploi.mardi.seance1.salleId)}</b> 
        </td>   

        <td> <b>{ data.emploi && data.emploi.mardi && findFormateur(data.emploi.mardi.seance2.userId)}</b>
        <b> - { data.emploi && data.emploi.mardi && findSalle(data.emploi.mardi.seance2.salleId)}</b> 
         </td>  

        <td> <b>{ data.emploi && data.emploi.mardi && findFormateur(data.emploi.mardi.seance3.userId)}</b>
        <b> - { data.emploi && data.emploi.mardi && findSalle(data.emploi.mardi.seance3.salleId)}</b> 
         </td>  

        <td> <b>{ data.emploi && data.emploi.mardi && findFormateur(data.emploi.mardi.seance4.userId)}</b> 
        <b> - { data.emploi && data.emploi.mardi && findSalle(data.emploi.mardi.seance4.salleId)}</b> 
        </td>  
</tr>

<tr className="table-success">
        <th scope="row"> Mercredi </th>
        <td> <b>{ data.emploi && data.emploi.mercredi && findFormateur(data.emploi.mercredi.seance1.userId)}</b> 
        <b> - { data.emploi && data.emploi.mercredi && findSalle(data.emploi.mercredi.seance1.salleId)}</b> 
        </td>   

        <td> <b>{ data.emploi && data.emploi.mercredi && findFormateur(data.emploi.mercredi.seance2.userId)}</b> 
        <b> - { data.emploi && data.emploi.mercredi && findSalle(data.emploi.mercredi.seance2.salleId)}</b> 
        </td>  

        <td> <b>{ data.emploi && data.emploi.mercredi && findFormateur(data.emploi.mercredi.seance3.userId)}</b> 
        <b> - { data.emploi && data.emploi.mercredi && findSalle(data.emploi.mercredi.seance3.salleId)}</b> 
        </td>  

        <td> <b>{ data.emploi && data.emploi.mercredi && findFormateur(data.emploi.mercredi.seance4.userId)}</b> 
        <b> - { data.emploi && data.emploi.mercredi && findSalle(data.emploi.mercredi.seance4.salleId)}</b> 
        </td>  
</tr>

<tr className="table-success">
        <th scope="row"> Jeudi </th>
        <td> <b>{ data.emploi && data.emploi.jeudi && findFormateur(data.emploi.jeudi.seance1.userId)}</b> 
        <b> - { data.emploi && data.emploi.jeudi && findSalle(data.emploi.jeudi.seance1.salleId)}</b> 
        </td>   

        <td> <b>{ data.emploi && data.emploi.jeudi && findFormateur(data.emploi.jeudi.seance2.userId)}</b> 
        <b> - { data.emploi && data.emploi.jeudi && findSalle(data.emploi.jeudi.seance2.salleId)}</b> 
        </td>  

        <td> <b>{ data.emploi && data.emploi.jeudi && findFormateur(data.emploi.jeudi.seance3.userId)}</b> 
        <b> - { data.emploi && data.emploi.jeudi && findSalle(data.emploi.jeudi.seance3.salleId)}</b> 
        </td>  

        <td> <b>{ data.emploi && data.emploi.jeudi && findFormateur(data.emploi.jeudi.seance4.userId)}</b> 
        <b> - { data.emploi && data.emploi.jeudi && findSalle(data.emploi.jeudi.seance4.salleId)}</b> </td>  
</tr>


<tr className="table-success">
        <th scope="row"> Vendredi </th>
        <td> <b>{ data.emploi && data.emploi.vendredi && findFormateur(data.emploi.vendredi.seance1.userId)} </b>
        <b> - { data.emploi && data.emploi.vendredi && findSalle(data.emploi.vendredi.seance1.salleId)}</b> 
        
        </td>   

        <td> <b>{ data.emploi && data.emploi.vendredi && findFormateur(data.emploi.vendredi.seance2.userId)}</b> 
        <b> - { data.emploi && data.emploi.vendredi && findSalle(data.emploi.vendredi.seance2.salleId)}</b> 
        </td>  

        <td> <b>{ data.emploi && data.emploi.vendredi && findFormateur(data.emploi.vendredi.seance3.userId)}</b> 
        <b> - { data.emploi && data.emploi.vendredi && findSalle(data.emploi.vendredi.seance3.salleId)}</b> </td>  

        <td> <b>{ data.emploi && data.emploi.vendredi && findFormateur(data.emploi.vendredi.seance4.userId)}</b> 
        <b> - { data.emploi && data.emploi.vendredi && findSalle(data.emploi.vendredi.seance4.salleId)}</b> </td>  
</tr>

<tr className="table-success">
        <th scope="row"> Samedi </th>
        <td> <b>{ data.emploi && data.emploi.samedi && findFormateur(data.emploi.samedi.seance1.userId)}</b> 
        <b> - { data.emploi && data.emploi.samedi && findSalle(data.emploi.samedi.seance1.salleId)}</b> 
        </td>   

        <td> <b>{ data.emploi && data.emploi.samedi && findFormateur(data.emploi.samedi.seance2.userId)}</b> 
        <b> - { data.emploi && data.emploi.samedi && findSalle(data.emploi.samedi.seance2.salleId)}</b> 
        </td>  

        <td> <b>{ data.emploi && data.emploi.samedi && findFormateur(data.emploi.samedi.seance3.userId)}</b> 
        <b> - { data.emploi && data.emploi.samedi && findSalle(data.emploi.samedi.seance3.salleId)}</b> 
        </td>  

        <td> <b>{ data.emploi && data.emploi.samedi && findFormateur(data.emploi.samedi.seance4.userId)}</b>
        <b> - { data.emploi && data.emploi.samedi && findSalle(data.emploi.samedi.seance4.salleId)}</b> 
         </td>  
</tr>

    </tbody>
  </table>
  <Link to={`/admin/groupe/ListeGroupes/`} className="btn btn-dark">Liste des groupe</Link> 
  <button onClick={Imprimer} className="btn btn-warning">Imprimer</button>
</div>

</div>


        </>
);
}

export default EmploiGroupe;