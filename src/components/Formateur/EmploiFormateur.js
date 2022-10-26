//import { Link } from "react-router-dom";

import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
//import jsPDFInvoiceTemplate from "jspdf-invoice-template";
//import niceInvoice from "nice-invoice";
//const niceInvoice = require("nice-invoice");
import { saveAs } from 'file-saver';

const EmploiFormateur = (req,res) => {


const {id} = useParams();

const [data, setData] = useState( {} );
const [dataGroupe, setGroupeData] = useState([]);
const [dataSalle, setSalleSata] = useState([]);
useEffect( ()=>{
      const fetchData1 = () => {
  
         axios.get(`${process.env.REACT_APP_SERVER_URL}/users/${id}`)
          .then( (resultat)=> {
            setData(resultat.data);
            console.log("récupération de l'emploi du formateur  réussie!!!");
          })
          .catch((e)=>console.log("récupération de l'emploi du formateur  échouée!!! : "+e));
      };

    const fetchData2 = () => {
        axios(`${process.env.REACT_APP_SERVER_URL}/groupes`).then( (resultat)=> {
            setGroupeData(resultat.data);
            console.log("récupération des groupes  réussie!!!");
        })
        .catch((e)=>console.log("récupération des groupes échouée!!! : "+e));
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
    },[id]);


function findGrp(gId){
    try {
        return dataGroupe.find( (mod)=> mod._id === gId ).designation;
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
    
    const designation = data.nom + " " + data.prenom;
    axios.post(`${process.env.REACT_APP_SERVER_URL}/emplois/convrtEmploiToPDF`, {corpsemploi, designation})
    .then(() => axios.get(`${process.env.REACT_APP_SERVER_URL}/emplois/getEmploiPDF`, { responseType: 'blob' }))
    .then((res) => {
      const pdfBlob = new Blob([res.data], { type: 'application/pdf' });

      saveAs(pdfBlob, `Emploi-${data.nom} ${data.prenom}.pdf`);
    })
}

return (
    <>

<div className="container">
<h2>Emploi du formateur {data.nom} {data.prenom}</h2>
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
                <b>{ data.emploi && data.emploi.lundi && findGrp(data.emploi.lundi.seance1.groupeId)}</b>
                
                <b> - { data.emploi && data.emploi.lundi && findSalle(data.emploi.lundi.seance1.salleId)}</b> 
            </td>   

        <td> 
            <b>{ data.emploi && data.emploi.lundi && findGrp(data.emploi.lundi.seance2.groupeId)}</b> 
            <b> - { data.emploi && data.emploi.lundi && findSalle(data.emploi.lundi.seance2.salleId)}</b> 
        </td>  

        <td> <b>{ data.emploi && data.emploi.lundi && findGrp(data.emploi.lundi.seance3.groupeId)}</b> 
        <b> - { data.emploi && data.emploi.lundi && findSalle(data.emploi.lundi.seance3.salleId)}</b> 
        </td>  

        <td> <b>{ data.emploi && data.emploi.lundi && findGrp(data.emploi.lundi.seance4.groupeId)}</b> 
        <b> - { data.emploi && data.emploi.lundi && findSalle(data.emploi.lundi.seance4.salleId)}</b> </td>  
</tr>

<tr className="table-success">
        <th scope="row"> Mardi </th>
        <td> <b>{ data.emploi && data.emploi.mardi && findGrp(data.emploi.mardi.seance1.groupeId)}</b> 
        <b> - { data.emploi && data.emploi.mardi && findSalle(data.emploi.mardi.seance1.salleId)}</b> 
        </td>   

        <td> <b>{ data.emploi && data.emploi.mardi && findGrp(data.emploi.mardi.seance2.groupeId)}</b>
        <b> - { data.emploi && data.emploi.mardi && findSalle(data.emploi.mardi.seance2.salleId)}</b> 
         </td>  

        <td> <b>{ data.emploi && data.emploi.mardi && findGrp(data.emploi.mardi.seance3.groupeId)}</b>
        <b> - { data.emploi && data.emploi.mardi && findSalle(data.emploi.mardi.seance3.salleId)}</b> 
         </td>  

        <td> <b>{ data.emploi && data.emploi.mardi && findGrp(data.emploi.mardi.seance4.groupeId)}</b> 
        <b> - { data.emploi && data.emploi.mardi && findSalle(data.emploi.mardi.seance4.salleId)}</b> 
        </td>  
</tr>

<tr className="table-success">
        <th scope="row"> Mercredi </th>
        <td> <b>{ data.emploi && data.emploi.mercredi && findGrp(data.emploi.mercredi.seance1.groupeId)}</b> 
        <b> - { data.emploi && data.emploi.mercredi && findSalle(data.emploi.mercredi.seance1.salleId)}</b> 
        </td>   

        <td> <b>{ data.emploi && data.emploi.mercredi && findGrp(data.emploi.mercredi.seance2.groupeId)}</b> 
        <b> - { data.emploi && data.emploi.mercredi && findSalle(data.emploi.mercredi.seance2.salleId)}</b> 
        </td>  

        <td> <b>{ data.emploi && data.emploi.mercredi && findGrp(data.emploi.mercredi.seance3.groupeId)}</b> 
        <b> - { data.emploi && data.emploi.mercredi && findSalle(data.emploi.mercredi.seance3.salleId)}</b> 
        </td>  

        <td> <b>{ data.emploi && data.emploi.mercredi && findGrp(data.emploi.mercredi.seance4.groupeId)}</b> 
        <b> - { data.emploi && data.emploi.mercredi && findSalle(data.emploi.mercredi.seance4.salleId)}</b> 
        </td>  
</tr>

<tr className="table-success">
        <th scope="row"> Jeudi </th>
        <td> <b>{ data.emploi && data.emploi.jeudi && findGrp(data.emploi.jeudi.seance1.groupeId)}</b> 
        <b> - { data.emploi && data.emploi.jeudi && findSalle(data.emploi.jeudi.seance1.salleId)}</b> 
        </td>   

        <td> <b>{ data.emploi && data.emploi.jeudi && findGrp(data.emploi.jeudi.seance2.groupeId)}</b> 
        <b> - { data.emploi && data.emploi.jeudi && findSalle(data.emploi.jeudi.seance2.salleId)}</b> 
        </td>  

        <td> <b>{ data.emploi && data.emploi.jeudi && findGrp(data.emploi.jeudi.seance3.groupeId)}</b> 
        <b> - { data.emploi && data.emploi.jeudi && findSalle(data.emploi.jeudi.seance3.salleId)}</b> 
        </td>  

        <td> <b>{ data.emploi && data.emploi.jeudi && findGrp(data.emploi.jeudi.seance4.groupeId)}</b> 
        <b> - { data.emploi && data.emploi.jeudi && findSalle(data.emploi.jeudi.seance4.salleId)}</b> </td>  
</tr>

<tr className="table-success">
        <th scope="row"> Vendredi </th>
        <td> <b>{ data.emploi && data.emploi.vendredi && findGrp(data.emploi.vendredi.seance1.groupeId)} </b>
        <b> - { data.emploi && data.emploi.vendredi && findSalle(data.emploi.vendredi.seance1.salleId)}</b> 
        
        </td>   

        <td> <b>{ data.emploi && data.emploi.vendredi && findGrp(data.emploi.vendredi.seance2.groupeId)}</b> 
        <b> - { data.emploi && data.emploi.vendredi && findSalle(data.emploi.vendredi.seance2.salleId)}</b> 
        </td>  

        <td> <b>{ data.emploi && data.emploi.vendredi && findGrp(data.emploi.vendredi.seance3.groupeId)}</b> 
        <b> - { data.emploi && data.emploi.vendredi && findSalle(data.emploi.vendredi.seance3.salleId)}</b> </td>  

        <td> <b>{ data.emploi && data.emploi.vendredi && findGrp(data.emploi.vendredi.seance4.groupeId)}</b> 
        <b> - { data.emploi && data.emploi.vendredi && findSalle(data.emploi.vendredi.seance4.salleId)}</b> </td>  
</tr>

<tr className="table-success">
        <th scope="row"> Samedi </th>
        <td> <b>{ data.emploi && data.emploi.samedi && findGrp(data.emploi.samedi.seance1.groupeId)}</b> 
        <b> - { data.emploi && data.emploi.samedi && findSalle(data.emploi.samedi.seance1.salleId)}</b> 
        </td>   

        <td> <b>{ data.emploi && data.emploi.samedi && findGrp(data.emploi.samedi.seance2.groupeId)}</b> 
        <b> - { data.emploi && data.emploi.samedi && findSalle(data.emploi.samedi.seance2.salleId)}</b> 
        </td>  

        <td> <b>{ data.emploi && data.emploi.samedi && findGrp(data.emploi.samedi.seance3.groupeId)}</b> 
        <b> - { data.emploi && data.emploi.samedi && findSalle(data.emploi.samedi.seance3.salleId)}</b> 
        </td>  

        <td> <b>{ data.emploi && data.emploi.samedi && findGrp(data.emploi.samedi.seance4.groupeId)}</b>
        <b> - { data.emploi && data.emploi.samedi && findSalle(data.emploi.samedi.seance4.salleId)}</b> 
         </td>  
</tr>

    </tbody>
  </table>
  <Link to={`/admin/grh/ListeFormateurs/`} className="btn btn-dark">Liste des formateurs</Link> 
  <button onClick={Imprimer} className="btn btn-warning">Imprimer</button> 

</div>


</div>


        </>
);
}

export default EmploiFormateur;
