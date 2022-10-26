//import { Link } from "react-router-dom";

import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import emploiVide from "./EmploiVide";

const EmploiSalle = (req,res) => {


const {id} = useParams();

const [data, setData] = useState( {} );
useEffect( ()=>{
      const fetchData = () => {
        console.log(process.env)

         axios.get(`${process.env.REACT_APP_SERVER_URL}/salles/${id}`)
          .then( (resultat)=> {
            setData(resultat.data);
            console.log("récupération de la salle  réussie!!!");
          })
          .catch((e)=>console.log("récupération de la salle  échouée!!! : "+e));
      };
  
      fetchData();
    },[id]);

const [dataGroupe, setGroupeData] = useState([]);

useEffect( ()=>{
        const fetchData = async () => {
            const resultat = await axios(`${process.env.REACT_APP_SERVER_URL}/groupes`);
            setGroupeData(resultat.data);
            console.log("récupération des groupes  réussie!!!");
        };
        fetchData();
    },[]);
    


const [dataFormateur, setFormateurData] = useState([]);
useEffect( ()=>{
    const fetchData = async () => {
        const resultat = await axios(`${process.env.REACT_APP_SERVER_URL}/users`);
        setFormateurData(resultat.data);
        console.log("récupération des Formateurs  réussie!!!");
    };
    fetchData();
},[]);
//Lundi-->Séance 1
const [groupeState11, setGroupeState11] = useState("");
const [formateurState11, setFormateurState11] = useState("");
//Lundi-->Séance 2
const [groupeState12, setGroupeState12] = useState("");
const [formateurState12, setFormateurState12] = useState("");
//Lundi-->Séance 3
const [groupeState13, setGroupeState13] = useState("");
const [formateurState13, setFormateurState13] = useState("");
//Lundi-->Séance 4
const [groupeState14, setGroupeState14] = useState("");
const [formateurState14, setFormateurState14] = useState("");

//mardi-->Séance 1
const [groupeState21, setGroupeState21] = useState("");
const [formateurState21, setFormateurState21] = useState("");
//mardi-->Séance 2
const [groupeState22, setGroupeState22] = useState("");
const [formateurState22, setFormateurState22] = useState("");
//mardi-->Séance 3
const [groupeState23, setGroupeState23] = useState("");
const [formateurState23, setFormateurState23] = useState("");
//mardi-->Séance 4
const [groupeState24, setGroupeState24] = useState("");
const [formateurState24, setFormateurState24] = useState("");

//mercredi-->Séance 1
const [groupeState31, setGroupeState31] = useState("");
const [formateurState31, setformateurState31] = useState("");
//mercredi-->Séance 2
const [groupeState32, setGroupeState32] = useState("");
const [formateurState32, setformateurState32] = useState("");
//mercredi-->Séance 3
const [groupeState33, setGroupeState33] = useState("");
const [formateurState33, setformateurState33] = useState("");
//mercredi-->Séance 4
const [groupeState34, setGroupeState34] = useState("");
const [formateurState34, setformateurState34] = useState("");

//jeudi-->Séance 1
const [groupeState41, setGroupeState41] = useState("");
const [formateurState41, setformateurState41] = useState("");
//jeudi-->Séance 2
const [groupeState42, setGroupeState42] = useState("");
const [formateurState42, setformateurState42] = useState("");
//jeudi-->Séance 3
const [groupeState43, setGroupeState43] = useState("");
const [formateurState43, setformateurState43] = useState("");
//jeudi-->Séance 4
const [groupeState44, setGroupeState44] = useState("");
const [formateurState44, setformateurState44] = useState("");

//vendredi-->Séance 1
const [groupeState51, setGroupeState51] = useState("");
const [formateurState51, setformateurState51] = useState("");
//vendredi-->Séance 2
const [groupeState52, setGroupeState52] = useState("");
const [formateurState52, setformateurState52] = useState("");
//vendredi-->Séance 3
const [groupeState53, setGroupeState53] = useState("");
const [formateurState53, setformateurState53] = useState("");
//vendredi-->Séance 4
const [groupeState54, setGroupeState54] = useState("");
const [formateurState54, setformateurState54] = useState("");

//samedi-->Séance 1
const [groupeState61, setGroupeState61] = useState("");
const [formateurState61, setformateurState61] = useState("");
//samedi-->Séance 2
const [groupeState62, setGroupeState62] = useState("");
const [formateurState62, setformateurState62] = useState("");
//samedi-->Séance 3
const [groupeState63, setGroupeState63] = useState("");
const [formateurState63, setformateurState63] = useState("");
//samedi-->Séance 4
const [groupeState64, setGroupeState64] = useState("");
const [formateurState64, setformateurState64] = useState("");

async function updateEmploiFormateur(userId,groupeId,salleId,jour,seance,type) {
    var emploi1 = emploiVide;
    const user1 = await axios( `${process.env.REACT_APP_SERVER_URL}/users/${userId}` );
    emploi1 = user1.data.emploi;
    const OldUserId = userId;
    if(type==="liberer")
    {
        userId=null;
        groupeId=null;
        salleId=null;
    }
    if(jour==="lundi") {
        if(seance==="seance1"){
            emploi1.lundi.seance1.groupeId = groupeId;
            emploi1.lundi.seance1.salleId = salleId;
            emploi1.lundi.seance1.userId = userId;
        }
        if(seance==="seance2"){
            emploi1.lundi.seance2.groupeId = groupeId;
            emploi1.lundi.seance2.salleId = salleId;
            emploi1.lundi.seance2.userId = userId;
        }
        if(seance==="seance3"){
            emploi1.lundi.seance3.userId = userId;
            emploi1.lundi.seance3.groupeId = groupeId;
            emploi1.lundi.seance3.salleId = salleId;
        }
        if(seance==="seance4"){
            emploi1.lundi.seance4.userId = userId;
            emploi1.lundi.seance4.groupeId = groupeId;
            emploi1.lundi.seance4.salleId = salleId;
        }
    }
    if(jour==="mardi") {
        if(seance==="seance1"){
            emploi1.mardi.seance1.groupeId = groupeId;
            emploi1.mardi.seance1.salleId = salleId;
            emploi1.mardi.seance1.userId = userId;
        }
        if(seance==="seance2"){
            emploi1.mardi.seance2.groupeId = groupeId;
            emploi1.mardi.seance2.salleId = salleId;
            emploi1.mardi.seance2.userId = userId;
        }
        if(seance==="seance3"){
            emploi1.mardi.seance3.userId = userId;
            emploi1.mardi.seance3.groupeId = groupeId;
            emploi1.mardi.seance3.salleId = salleId;
        }
        if(seance==="seance4"){
            emploi1.mardi.seance4.userId = userId;
            emploi1.mardi.seance4.groupeId = groupeId;
            emploi1.mardi.seance4.salleId = salleId;
        }
    }
    if(jour==="mercredi") {
        if(seance==="seance1"){
            emploi1.mercredi.seance1.groupeId = groupeId;
            emploi1.mercredi.seance1.salleId = salleId;
            emploi1.mercredi.seance1.userId = userId;
        }
        if(seance==="seance2"){
            emploi1.mercredi.seance2.groupeId = groupeId;
            emploi1.mercredi.seance2.salleId = salleId;
            emploi1.mercredi.seance2.userId = userId;
        }
        if(seance==="seance3"){
            emploi1.mercredi.seance3.userId = userId;
            emploi1.mercredi.seance3.groupeId = groupeId;
            emploi1.mercredi.seance3.salleId = salleId;
        }
        if(seance==="seance4"){
            emploi1.mercredi.seance4.userId = userId;
            emploi1.mercredi.seance4.groupeId = groupeId;
            emploi1.mercredi.seance4.salleId = salleId;
        }
    }
    if(jour==="jeudi") {
        if(seance==="seance1"){
            emploi1.jeudi.seance1.groupeId = groupeId;
            emploi1.jeudi.seance1.salleId = salleId;
            emploi1.jeudi.seance1.userId = userId;
        }
        if(seance==="seance2"){
            emploi1.jeudi.seance2.groupeId = groupeId;
            emploi1.jeudi.seance2.salleId = salleId;
            emploi1.jeudi.seance2.userId = userId;
        }
        if(seance==="seance3"){
            emploi1.jeudi.seance3.userId = userId;
            emploi1.jeudi.seance3.groupeId = groupeId;
            emploi1.jeudi.seance3.salleId = salleId;
        }
        if(seance==="seance4"){
            emploi1.jeudi.seance4.userId = userId;
            emploi1.jeudi.seance4.groupeId = groupeId;
            emploi1.jeudi.seance4.salleId = salleId;
        }
    }
    if(jour==="vendredi") {
        if(seance==="seance1"){
            emploi1.vendredi.seance1.groupeId = groupeId;
            emploi1.vendredi.seance1.salleId = salleId;
            emploi1.vendredi.seance1.userId = userId;
        }
        if(seance==="seance2"){
            emploi1.vendredi.seance2.groupeId = groupeId;
            emploi1.vendredi.seance2.salleId = salleId;
            emploi1.vendredi.seance2.userId = userId;
        }
        if(seance==="seance3"){
            emploi1.vendredi.seance3.userId = userId;
            emploi1.vendredi.seance3.groupeId = groupeId;
            emploi1.vendredi.seance3.salleId = salleId;
        }
        if(seance==="seance4"){
            emploi1.vendredi.seance4.userId = userId;
            emploi1.vendredi.seance4.groupeId = groupeId;
            emploi1.vendredi.seance4.salleId = salleId;
        }
    }
    if(jour==="samedi") {
        if(seance==="seance1"){
            emploi1.samedi.seance1.groupeId = groupeId;
            emploi1.samedi.seance1.salleId = salleId;
            emploi1.samedi.seance1.userId = userId;
        }
        if(seance==="seance2"){
            emploi1.samedi.seance2.groupeId = groupeId;
            emploi1.samedi.seance2.salleId = salleId;
            emploi1.samedi.seance2.userId = userId;
        }
        if(seance==="seance3"){
            emploi1.samedi.seance3.userId = userId;
            emploi1.samedi.seance3.groupeId = groupeId;
            emploi1.samedi.seance3.salleId = salleId;
        }
        if(seance==="seance4"){
            emploi1.samedi.seance4.userId = userId;
            emploi1.samedi.seance4.groupeId = groupeId;
            emploi1.samedi.seance4.salleId = salleId;
        }
    }
    console.log("OldUserId")
    console.log(OldUserId)
    await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/users/ChangeEmploi/${OldUserId}`,
        {
            "emploi":emploi1
        }
    );
}

async function updateEmploiGroupe(userId,groupeId,salleId,jour,seance,type) {
    var emploi2 = emploiVide;
    const groupe1 = await axios( `${process.env.REACT_APP_SERVER_URL}/groupes/${groupeId}` );
    emploi2 = groupe1.data.emploi;
    const OldGroupeId = groupeId;
    if(type==="liberer")
    {
        userId=null;
        groupeId=null;
        salleId=null;
    }
    if(jour==="lundi") {
        if(seance==="seance1"){
            emploi2.lundi.seance1.userId = userId;
            emploi2.lundi.seance1.salleId = salleId;
            emploi2.lundi.seance1.groupeId = groupeId;
        }
        if(seance==="seance2"){
            emploi2.lundi.seance2.userId = userId;
            emploi2.lundi.seance2.salleId = salleId;
            emploi2.lundi.seance2.groupeId = groupeId;
        }
        if(seance==="seance3"){
            emploi2.lundi.seance3.userId = userId;
            emploi2.lundi.seance3.groupeId = groupeId;
            emploi2.lundi.seance3.salleId = salleId;
        }
        if(seance==="seance4"){
            emploi2.lundi.seance4.userId = userId;
            emploi2.lundi.seance4.groupeId = groupeId;
            emploi2.lundi.seance4.salleId = salleId;
        }
    }
    if(jour==="mardi") {
        if(seance==="seance1"){
            emploi2.mardi.seance1.userId = userId;
            emploi2.mardi.seance1.salleId = salleId;
            emploi2.mardi.seance1.groupeId = groupeId;
        }
        if(seance==="seance2"){
            emploi2.mardi.seance2.userId = userId;
            emploi2.mardi.seance2.salleId = salleId;
            emploi2.mardi.seance2.groupeId = groupeId;
        }
        if(seance==="seance3"){
            emploi2.mardi.seance3.userId = userId;
            emploi2.mardi.seance3.groupeId = groupeId;
            emploi2.mardi.seance3.salleId = salleId;
        }
        if(seance==="seance4"){
            emploi2.mardi.seance4.userId = userId;
            emploi2.mardi.seance4.groupeId = groupeId;
            emploi2.mardi.seance4.salleId = salleId;
        }
    }
    if(jour==="mercredi") {
        if(seance==="seance1"){
            emploi2.mercredi.seance1.userId = userId;
            emploi2.mercredi.seance1.salleId = salleId;
            emploi2.mercredi.seance1.groupeId = groupeId;
        }
        if(seance==="seance2"){
            emploi2.mercredi.seance2.userId = userId;
            emploi2.mercredi.seance2.salleId = salleId;
            emploi2.mercredi.seance2.groupeId = groupeId;
        }
        if(seance==="seance3"){
            emploi2.mercredi.seance3.userId = userId;
            emploi2.mercredi.seance3.groupeId = groupeId;
            emploi2.mercredi.seance3.salleId = salleId;
        }
        if(seance==="seance4"){
            emploi2.mercredi.seance4.userId = userId;
            emploi2.mercredi.seance4.groupeId = groupeId;
            emploi2.mercredi.seance4.salleId = salleId;
        }
    }
    if(jour==="jeudi") {
        if(seance==="seance1"){
            emploi2.jeudi.seance1.userId = userId;
            emploi2.jeudi.seance1.salleId = salleId;
            emploi2.jeudi.seance1.groupeId = groupeId;
        }
        if(seance==="seance2"){
            emploi2.jeudi.seance2.userId = userId;
            emploi2.jeudi.seance2.salleId = salleId;
            emploi2.jeudi.seance2.groupeId = groupeId;
        }
        if(seance==="seance3"){
            emploi2.jeudi.seance3.userId = userId;
            emploi2.jeudi.seance3.groupeId = groupeId;
            emploi2.jeudi.seance3.salleId = salleId;
        }
        if(seance==="seance4"){
            emploi2.jeudi.seance4.userId = userId;
            emploi2.jeudi.seance4.groupeId = groupeId;
            emploi2.jeudi.seance4.salleId = salleId;
        }
    }
    if(jour==="vendredi") {
        if(seance==="seance1"){
            emploi2.vendredi.seance1.userId = userId;
            emploi2.vendredi.seance1.salleId = salleId;
            emploi2.vendredi.seance1.groupeId = groupeId;
        }
        if(seance==="seance2"){
            emploi2.vendredi.seance2.userId = userId;
            emploi2.vendredi.seance2.salleId = salleId;
            emploi2.vendredi.seance2.groupeId = groupeId;
        }
        if(seance==="seance3"){
            emploi2.vendredi.seance3.userId = userId;
            emploi2.vendredi.seance3.groupeId = groupeId;
            emploi2.vendredi.seance3.salleId = salleId;
        }
        if(seance==="seance4"){
            emploi2.vendredi.seance4.userId = userId;
            emploi2.vendredi.seance4.groupeId = groupeId;
            emploi2.vendredi.seance4.salleId = salleId;
        }
    }
    if(jour==="samedi") {
        if(seance==="seance1"){
            emploi2.samedi.seance1.userId = userId;
            emploi2.samedi.seance1.salleId = salleId;
            emploi2.samedi.seance1.groupeId = groupeId;
        }
        if(seance==="seance2"){
            emploi2.samedi.seance2.userId = userId;
            emploi2.samedi.seance2.salleId = salleId;
            emploi2.samedi.seance2.groupeId = groupeId;
        }
        if(seance==="seance3"){
            emploi2.samedi.seance3.userId = userId;
            emploi2.samedi.seance3.groupeId = groupeId;
            emploi2.samedi.seance3.salleId = salleId;
        }
        if(seance==="seance4"){
            emploi2.samedi.seance4.userId = userId;
            emploi2.samedi.seance4.groupeId = groupeId;
            emploi2.samedi.seance4.salleId = salleId;
        }
    }

    await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/groupes/ChangeEmploi/${OldGroupeId}`,
        {
            "emploi":emploi2
        }
    );

}

async function updateEmploiSalle(userId,groupeId,salleId,jour,seance,type) {
    var emploi3 = emploiVide;
    emploi3 = data.emploi;
    const OldSalleId = salleId;
    if(type==="liberer")
    {
        userId=null;
        groupeId=null;
        salleId=null;
    }

    if(jour==="lundi") {
        if(seance==="seance1"){
            emploi3.lundi.seance1.userId = userId;
            emploi3.lundi.seance1.groupeId = groupeId;
            emploi3.lundi.seance1.salleId = salleId;
        }
        if(seance==="seance2"){
            emploi3.lundi.seance2.userId = userId;
            emploi3.lundi.seance2.groupeId = groupeId;
            emploi3.lundi.seance2.salleId = salleId;
        }
        if(seance==="seance3"){
            emploi3.lundi.seance3.userId = userId;
            emploi3.lundi.seance3.groupeId = groupeId;
            emploi3.lundi.seance3.salleId = salleId;
        }
        if(seance==="seance4"){
            emploi3.lundi.seance4.userId = userId;
            emploi3.lundi.seance4.groupeId = groupeId;
            emploi3.lundi.seance4.salleId = salleId;
        }
    }
    if(jour==="mardi") {
        if(seance==="seance1"){
            emploi3.mardi.seance1.userId = userId;
            emploi3.mardi.seance1.groupeId = groupeId;
            emploi3.mardi.seance1.salleId = salleId;
        }
        if(seance==="seance2"){
            emploi3.mardi.seance2.userId = userId;
            emploi3.mardi.seance2.groupeId = groupeId;
            emploi3.mardi.seance2.salleId = salleId;
        }
        if(seance==="seance3"){
            emploi3.mardi.seance3.userId = userId;
            emploi3.mardi.seance3.groupeId = groupeId;
            emploi3.mardi.seance3.salleId = salleId;
        }
        if(seance==="seance4"){
            emploi3.mardi.seance4.userId = userId;
            emploi3.mardi.seance4.groupeId = groupeId;
            emploi3.mardi.seance4.salleId = salleId;
        }
    }
    if(jour==="mercredi") {
        if(seance==="seance1"){
            emploi3.mercredi.seance1.userId = userId;
            emploi3.mercredi.seance1.groupeId = groupeId;
            emploi3.mercredi.seance1.salleId = salleId;
        }
        if(seance==="seance2"){
            emploi3.mercredi.seance2.userId = userId;
            emploi3.mercredi.seance2.groupeId = groupeId;
            emploi3.mercredi.seance2.salleId = salleId;
        }
        if(seance==="seance3"){
            emploi3.mercredi.seance3.userId = userId;
            emploi3.mercredi.seance3.groupeId = groupeId;
            emploi3.mercredi.seance3.salleId = salleId;
        }
        if(seance==="seance4"){
            emploi3.mercredi.seance4.userId = userId;
            emploi3.mercredi.seance4.groupeId = groupeId;
            emploi3.mercredi.seance4.salleId = salleId;
        }
    }
    if(jour==="jeudi") {
        if(seance==="seance1"){
            emploi3.jeudi.seance1.userId = userId;
            emploi3.jeudi.seance1.groupeId = groupeId;
            emploi3.jeudi.seance1.salleId = salleId;
        }
        if(seance==="seance2"){
            emploi3.jeudi.seance2.userId = userId;
            emploi3.jeudi.seance2.groupeId = groupeId;
            emploi3.jeudi.seance2.salleId = salleId;
        }
        if(seance==="seance3"){
            emploi3.jeudi.seance3.userId = userId;
            emploi3.jeudi.seance3.groupeId = groupeId;
            emploi3.jeudi.seance3.salleId = salleId;
        }
        if(seance==="seance4"){
            emploi3.jeudi.seance4.userId = userId;
            emploi3.jeudi.seance4.groupeId = groupeId;
            emploi3.jeudi.seance4.salleId = salleId;
        }
    }
    if(jour==="vendredi") {
        if(seance==="seance1"){
            emploi3.vendredi.seance1.userId = userId;
            emploi3.vendredi.seance1.groupeId = groupeId;
            emploi3.vendredi.seance1.salleId = salleId;
        }
        if(seance==="seance2"){
            emploi3.vendredi.seance2.userId = userId;
            emploi3.vendredi.seance2.groupeId = groupeId;
            emploi3.vendredi.seance2.salleId = salleId;
        }
        if(seance==="seance3"){
            emploi3.vendredi.seance3.userId = userId;
            emploi3.vendredi.seance3.groupeId = groupeId;
            emploi3.vendredi.seance3.salleId = salleId;
        }
        if(seance==="seance4"){
            emploi3.vendredi.seance4.userId = userId;
            emploi3.vendredi.seance4.groupeId = groupeId;
            emploi3.vendredi.seance4.salleId = salleId;
        }
    }
    if(jour==="samedi") {
        if(seance==="seance1"){
            emploi3.samedi.seance1.userId = userId;
            emploi3.samedi.seance1.groupeId = groupeId;
            emploi3.samedi.seance1.salleId = salleId;
        }
        if(seance==="seance2"){
            emploi3.samedi.seance2.userId = userId;
            emploi3.samedi.seance2.groupeId = groupeId;
            emploi3.samedi.seance2.salleId = salleId;
        }
        if(seance==="seance3"){
            emploi3.samedi.seance3.userId = userId;
            emploi3.samedi.seance3.groupeId = groupeId;
            emploi3.samedi.seance3.salleId = salleId;
        }
        if(seance==="seance4"){
            emploi3.samedi.seance4.userId = userId;
            emploi3.samedi.seance4.groupeId = groupeId;
            emploi3.samedi.seance4.salleId = salleId;
        }
    }

    await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/salles/ChangeEmploi/${OldSalleId}`,
        {
            "emploi":emploi3
        }
    );
}

function handleSubmitEmploi11(e,type) {
    e.preventDefault()
    //Lundi --> séance 1
    updateEmploiSalle(formateurState11,groupeState11,id,"lundi","seance1",type)
    updateEmploiGroupe(formateurState11,groupeState11,id,"lundi","seance1",type)
    updateEmploiFormateur(formateurState11,groupeState11,id,"lundi","seance1",type)
}
function handleSubmitEmploi12(e,type) {
    e.preventDefault()
    //Lundi --> séance 2
    updateEmploiSalle(formateurState12,groupeState12,id,"lundi","seance2",type)
    updateEmploiGroupe(formateurState12,groupeState12,id,"lundi","seance2",type)
    updateEmploiFormateur(formateurState12,groupeState12,id,"lundi","seance2",type)
}
function handleSubmitEmploi13(e,type) {
    //Lundi --> séance 3
    e.preventDefault()
    updateEmploiSalle(formateurState13,groupeState13,id,"lundi","seance3",type)
    updateEmploiGroupe(formateurState13,groupeState13,id,"lundi","seance3",type)
    updateEmploiFormateur(formateurState13,groupeState13,id,"lundi","seance3",type)
}
function handleSubmitEmploi14(e,type) {
    //Lundi --> séance 4
    e.preventDefault()
    updateEmploiSalle(formateurState14,groupeState14,id,"lundi","seance4",type)
    updateEmploiGroupe(formateurState14,groupeState14,id,"lundi","seance4",type)
    updateEmploiFormateur(formateurState14,groupeState14,id,"lundi","seance4",type)
}
function handleSubmitEmploi21(e,type) {
    e.preventDefault()
    //mardi --> séance 1
    updateEmploiSalle(formateurState21,groupeState21,id,"mardi","seance1",type)
    updateEmploiGroupe(formateurState21,groupeState21,id,"mardi","seance1",type)
    updateEmploiFormateur(formateurState21,groupeState21,id,"mardi","seance1",type)
}
function handleSubmitEmploi22(e,type) {
    e.preventDefault()
    //mardi --> séance 2
    updateEmploiSalle(formateurState22,groupeState22,id,"mardi","seance2",type)
    updateEmploiGroupe(formateurState22,groupeState22,id,"mardi","seance2",type)
    updateEmploiFormateur(formateurState22,groupeState22,id,"mardi","seance2",type)
}
function handleSubmitEmploi23(e,type) {
    //mardi --> séance 3
    e.preventDefault()
    updateEmploiSalle(formateurState23,groupeState23,id,"mardi","seance3",type)
    updateEmploiGroupe(formateurState23,groupeState23,id,"mardi","seance3",type)
    updateEmploiFormateur(formateurState23,groupeState23,id,"mardi","seance3",type)
}
function handleSubmitEmploi24(e,type) {
    //mardi --> séance 4
    e.preventDefault()
    updateEmploiSalle(formateurState24,groupeState24,id,"mardi","seance4",type)
    updateEmploiGroupe(formateurState24,groupeState24,id,"mardi","seance4",type)
    updateEmploiFormateur(formateurState24,groupeState24,id,"mardi","seance4",type)
}
function handleSubmitEmploi31(e,type) {
    e.preventDefault()
    //mercredi --> séance 1
    updateEmploiSalle(formateurState31,groupeState31,id,"mercredi","seance1",type)
    updateEmploiGroupe(formateurState31,groupeState31,id,"mercredi","seance1",type)
    updateEmploiFormateur(formateurState31,groupeState31,id,"mercredi","seance1",type)
}
function handleSubmitEmploi32(e,type) {
    e.preventDefault()
    //mercredi --> séance 2
    updateEmploiSalle(formateurState32,groupeState32,id,"mercredi","seance2",type)
    updateEmploiGroupe(formateurState32,groupeState32,id,"mercredi","seance2",type)
    updateEmploiFormateur(formateurState32,groupeState32,id,"mercredi","seance2",type)
}
function handleSubmitEmploi33(e,type) {
    //mercredi --> séance 3
    e.preventDefault()
    updateEmploiSalle(formateurState33,groupeState33,id,"mercredi","seance3",type)
    updateEmploiGroupe(formateurState33,groupeState33,id,"mercredi","seance3",type)
    updateEmploiFormateur(formateurState33,groupeState33,id,"mercredi","seance3",type)
}
function handleSubmitEmploi34(e,type) {
    //mercredi --> séance 4
    e.preventDefault()
    updateEmploiSalle(formateurState34,groupeState34,id,"mercredi","seance4",type)
    updateEmploiGroupe(formateurState34,groupeState34,id,"mercredi","seance4",type)
    updateEmploiFormateur(formateurState34,groupeState34,id,"mercredi","seance4",type)
}

function handleSubmitEmploi41(e,type) {
    e.preventDefault()
    //jeudi --> séance 1
    updateEmploiSalle(formateurState41,groupeState41,id,"jeudi","seance1",type)
    updateEmploiGroupe(formateurState41,groupeState41,id,"jeudi","seance1",type)
    updateEmploiFormateur(formateurState41,groupeState41,id,"jeudi","seance1",type)
}
function handleSubmitEmploi42(e,type) {
    e.preventDefault()
    //jeudi --> séance 2
    updateEmploiSalle(formateurState42,groupeState42,id,"jeudi","seance2",type)
    updateEmploiGroupe(formateurState42,groupeState42,id,"jeudi","seance2",type)
    updateEmploiFormateur(formateurState42,groupeState42,id,"jeudi","seance2",type)
}
function handleSubmitEmploi43(e,type) {
    //jeudi --> séance 3
    e.preventDefault()
    updateEmploiSalle(formateurState43,groupeState43,id,"jeudi","seance3",type)
    updateEmploiGroupe(formateurState43,groupeState43,id,"jeudi","seance3",type)
    updateEmploiFormateur(formateurState43,groupeState43,id,"jeudi","seance3",type)
}
function handleSubmitEmploi44(e,type) {
    //jeudi --> séance 4
    e.preventDefault()
    updateEmploiSalle(formateurState44,groupeState44,id,"jeudi","seance4",type)
    updateEmploiGroupe(formateurState44,groupeState44,id,"jeudi","seance4",type)
    updateEmploiFormateur(formateurState44,groupeState44,id,"jeudi","seance4",type)
}

function handleSubmitEmploi51(e,type) {
    e.preventDefault()
    //vendredi --> séance 1
    updateEmploiSalle(formateurState51,groupeState51,id,"vendredi","seance1",type)
    updateEmploiGroupe(formateurState51,groupeState51,id,"vendredi","seance1",type)
    updateEmploiFormateur(formateurState51,groupeState51,id,"vendredi","seance1",type)
}
function handleSubmitEmploi52(e,type) {
    e.preventDefault()
    //vendredi --> séance 2
    updateEmploiSalle(formateurState52,groupeState52,id,"vendredi","seance2",type)
    updateEmploiGroupe(formateurState52,groupeState52,id,"vendredi","seance2",type)
    updateEmploiFormateur(formateurState52,groupeState52,id,"vendredi","seance2",type)
}
function handleSubmitEmploi53(e,type) {
    //vendredi --> séance 3
    e.preventDefault()
    updateEmploiSalle(formateurState53,groupeState53,id,"vendredi","seance3",type)
    updateEmploiGroupe(formateurState53,groupeState53,id,"vendredi","seance3",type)
    updateEmploiFormateur(formateurState53,groupeState53,id,"vendredi","seance3",type)
}
function handleSubmitEmploi54(e,type) {
    //vendredi --> séance 4
    e.preventDefault()
    updateEmploiSalle(formateurState54,groupeState54,id,"vendredi","seance4",type)
    updateEmploiGroupe(formateurState54,groupeState54,id,"vendredi","seance4",type)
    updateEmploiFormateur(formateurState54,groupeState54,id,"vendredi","seance4",type)
}

function handleSubmitEmploi61(e,type) {
    e.preventDefault()
    //samedi --> séance 1
    updateEmploiSalle(formateurState61,groupeState61,id,"samedi","seance1",type)
    updateEmploiGroupe(formateurState61,groupeState61,id,"samedi","seance1",type)
    updateEmploiFormateur(formateurState61,groupeState61,id,"samedi","seance1",type)
}
function handleSubmitEmploi62(e,type) {
    e.preventDefault()
    //samedi --> séance 2
    updateEmploiSalle(formateurState62,groupeState62,id,"samedi","seance2",type)
    updateEmploiGroupe(formateurState62,groupeState62,id,"samedi","seance2",type)
    updateEmploiFormateur(formateurState62,groupeState62,id,"samedi","seance2",type)
}
function handleSubmitEmploi63(e,type) {
    //samedi --> séance 3
    e.preventDefault()
    updateEmploiSalle(formateurState63,groupeState63,id,"samedi","seance3",type)
    updateEmploiGroupe(formateurState63,groupeState63,id,"samedi","seance3",type)
    updateEmploiFormateur(formateurState63,groupeState63,id,"samedi","seance3",type)
}
function handleSubmitEmploi64(e,type) {
    //samedi --> séance 4
    e.preventDefault()
    updateEmploiSalle(formateurState64,groupeState64,id,"samedi","seance4",type)
    updateEmploiGroupe(formateurState64,groupeState64,id,"samedi","seance4",type)
    updateEmploiFormateur(formateurState64,groupeState64,id,"samedi","seance4",type)
}

return (
    <>

<div className="container">
<h2>Emploi de la salle {data.designation} </h2>
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
    <tbody>

      <tr className="table-success">
        <th scope="row"> Lundi </th>
        	<td> 
                <form >
                <select id="groupeId" onChange={(e)=> { 
                            const selectedGroupe = e.target.value;
                            setGroupeState11(selectedGroupe);
                        } } value={groupeState11} className="form-select" aria-label="Default select example">
                            <option selected> { (data.emploi && data.emploi.lundi && data.emploi.lundi.seance1.groupeId)? "occupée":"vide"}</option>
                                { dataGroupe.map( el => (
                                    <option key={el._id} value={el._id}>{el.designation}  {(data.emploi.lundi.seance1.groupeId===el._id)?"<--":""}</option>
                                )) 
                                }
                </select>
                <select id="userId" onChange={(e)=> { 
                        const selectedFormateur = e.target.value;
                        setFormateurState11(selectedFormateur);
                    } } value={formateurState11} className="form-select" aria-label="Default select example">
                        <option selected> { (data.emploi && data.emploi.lundi && data.emploi.lundi.seance1.userId)? "occupée":"vide"}</option>
                            { dataFormateur.map( el => (
                                <option key={el._id} value={el._id}>{el.nom} {el.prenom} {(data.emploi.lundi.seance1.userId===el._id)?"<--":""}</option>
                            )) 
                            }
                </select>
                <button onClick={(e)=> handleSubmitEmploi11(e,"valider")} id="valider" name="valider" className="btn btn-primary">Valider</button>
                <button onClick={(e)=> handleSubmitEmploi11(e,"liberer")} id="liberer" name="liberer" className="btn btn-danger">Libérer</button>
                </form>
 		    </td>
        	<td>
                <form >
            <select id="groupeId" onChange={(e)=> { 
                            const selectedGroupe = e.target.value;
                            setGroupeState12(selectedGroupe);
                        } } value={groupeState12} className="form-select" aria-label="Default select example">
                            <option selected> { (data.emploi && data.emploi.lundi && data.emploi.lundi.seance2.groupeId)? "occupée":"vide"}</option>
                                { dataGroupe.map( el => (
                                    <option key={el._id} value={el._id}>{el.designation}  {(data.emploi.lundi.seance2.groupeId===el._id)?"<--":""}</option>
                                )) 
                                }
                </select>
                <select id="userId" onChange={(e)=> { 
                        const selectedFormateur = e.target.value;
                        setFormateurState12(selectedFormateur);
                    } } value={formateurState12} className="form-select" aria-label="Default select example">
                        <option selected> { (data.emploi && data.emploi.lundi && data.emploi.lundi.seance2.userId)? "occupée":"vide"}</option>
                            { dataFormateur.map( el => (
                                <option key={el._id} value={el._id}>{el.nom} {el.prenom} {(data.emploi.lundi.seance2.userId===el._id)?"<--":""}</option>
                            )) 
                            }
                </select>
                <button onClick={(e)=> handleSubmitEmploi12(e,"valider")} id="valider" name="valider" className="btn btn-primary">Valider</button>
                <button onClick={(e)=> handleSubmitEmploi12(e,"liberer")} id="liberer" name="liberer" className="btn btn-danger">Libérer</button>
                </form>
 		</td>
        	<td>
            <form >
                <select id="groupeId" onChange={(e)=> { 
                            const selectedGroupe = e.target.value;
                            setGroupeState13(selectedGroupe);
                        } } value={groupeState13} className="form-select" aria-label="Default select example">
                            <option selected> { (data.emploi && data.emploi.lundi && data.emploi.lundi.seance3.groupeId)? "occupée":"vide"}</option>
                                { dataGroupe.map( el => (
                                    <option key={el._id} value={el._id}>{el.designation}  {(data.emploi.lundi.seance3.groupeId===el._id)?"<--":""}</option>
                                )) 
                                }
                </select>
                <select id="userId" onChange={(e)=> { 
                        const selectedFormateur = e.target.value;
                        setFormateurState13(selectedFormateur);
                    } } value={formateurState13} className="form-select" aria-label="Default select example">
                        <option selected> { (data.emploi && data.emploi.lundi && data.emploi.lundi.seance3.userId)? "occupée":"vide"}</option>
                            { dataFormateur.map( el => (
                                <option key={el._id} value={el._id}>{el.nom} {el.prenom} {(data.emploi.lundi.seance3.userId===el._id)?"<--":""}</option>
                            )) 
                            }
                </select>
                <button onClick={(e)=> handleSubmitEmploi13(e,"valider")} id="valider" name="valider" className="btn btn-primary">Valider</button>
                <button onClick={(e)=> handleSubmitEmploi13(e,"liberer")} id="liberer" name="liberer" className="btn btn-danger">Libérer</button>
            </form>
 		    </td>
        	<td>
            <form >
            <select id="groupeId" onChange={(e)=> { 
                            const selectedGroupe = e.target.value;
                            setGroupeState14(selectedGroupe);
                        } } value={groupeState14} className="form-select" aria-label="Default select example">
                            <option selected> { (data.emploi && data.emploi.lundi && data.emploi.lundi.seance4.groupeId)? "occupée":"vide"}</option>
                                { dataGroupe.map( el => (
                                    <option key={el._id} value={el._id}>{el.designation}  {(data.emploi.lundi.seance4.groupeId===el._id)?"<--":""}</option>
                                )) 
                                }
                </select>
                <select id="userId" onChange={(e)=> { 
                        const selectedFormateur = e.target.value;
                        setFormateurState14(selectedFormateur);
                    } } value={formateurState14} className="form-select" aria-label="Default select example">
                        <option selected> { (data.emploi && data.emploi.lundi && data.emploi.lundi.seance4.userId)? "occupée":"vide"}</option>
                            { dataFormateur.map( el => (
                                <option key={el._id} value={el._id}>{el.nom} {el.prenom} {(data.emploi.lundi.seance4.userId===el._id)?"<--":""}</option>
                            )) 
                            }
                </select>
                <button onClick={(e)=> handleSubmitEmploi14(e,"valider")} id="valider" name="valider" className="btn btn-primary">Valider</button>
                <button onClick={(e)=> handleSubmitEmploi14(e,"liberer")} id="liberer" name="liberer" className="btn btn-danger">Libérer</button>
                </form>
 		</td>
      </tr>

      <tr className="table-success">
        <th scope="row"> mardi </th>
        	<td> 
                <form >
                <select id="groupeId" onChange={(e)=> { 
                            const selectedGroupe = e.target.value;
                            setGroupeState21(selectedGroupe);
                        } } value={groupeState21} className="form-select" aria-label="Default select example">
                            <option selected> { (data.emploi && data.emploi.mardi && data.emploi.mardi.seance1.groupeId)? "occupée":"vide"}</option>
                                { dataGroupe.map( el => (
                                    <option key={el._id} value={el._id}>{el.designation}  {(data.emploi.mardi.seance1.groupeId===el._id)?"<--":""}</option>
                                )) 
                                }
                </select>
                <select id="userId" onChange={(e)=> { 
                        const selectedFormateur = e.target.value;
                        setFormateurState21(selectedFormateur);
                    } } value={formateurState21} className="form-select" aria-label="Default select example">
                        <option selected> { (data.emploi && data.emploi.mardi && data.emploi.mardi.seance1.userId)? "occupée":"vide"}</option>
                            { dataFormateur.map( el => (
                                <option key={el._id} value={el._id}>{el.nom} {el.prenom} {(data.emploi.mardi.seance1.userId===el._id)?"<--":""}</option>
                            )) 
                            }
                </select>
                <button onClick={(e)=> handleSubmitEmploi21(e,"valider")} id="valider" name="valider" className="btn btn-primary">Valider</button>
                <button onClick={(e)=> handleSubmitEmploi21(e,"liberer")} id="liberer" name="liberer" className="btn btn-danger">Libérer</button>
                
                </form>
 		    </td>
        	<td>
                <form >
            <select id="groupeId" onChange={(e)=> { 
                            const selectedGroupe = e.target.value;
                            setGroupeState22(selectedGroupe);
                        } } value={groupeState22} className="form-select" aria-label="Default select example">
                            <option selected> { (data.emploi && data.emploi.mardi && data.emploi.mardi.seance2.groupeId)? "occupée":"vide"}</option>
                                { dataGroupe.map( el => (
                                    <option key={el._id} value={el._id}>{el.designation}  {(data.emploi.mardi.seance2.groupeId===el._id)?"<--":""}</option>
                                )) 
                                }
                </select>
                <select id="userId" onChange={(e)=> { 
                        const selectedFormateur = e.target.value;
                        setFormateurState22(selectedFormateur);
                    } } value={formateurState22} className="form-select" aria-label="Default select example">
                        <option selected> { (data.emploi && data.emploi.mardi && data.emploi.mardi.seance2.userId)? "occupée":"vide"}</option>
                            { dataFormateur.map( el => (
                                <option key={el._id} value={el._id}>{el.nom} {el.prenom} {(data.emploi.mardi.seance2.userId===el._id)?"<--":""}</option>
                            )) 
                            }
                </select>
                <button onClick={(e)=> handleSubmitEmploi22(e,"valider")} id="valider" name="valider" className="btn btn-primary">Valider</button>
                <button onClick={(e)=> handleSubmitEmploi22(e,"liberer")} id="liberer" name="liberer" className="btn btn-danger">Libérer</button>
                
                </form>
 		</td>
        	<td>
            <form >
            <select id="groupeId" onChange={(e)=> { 
                            const selectedGroupe = e.target.value;
                            setGroupeState23(selectedGroupe);
                        } } value={groupeState23} className="form-select" aria-label="Default select example">
                            <option selected> { (data.emploi && data.emploi.mardi && data.emploi.mardi.seance3.groupeId)? "occupée":"vide"}</option>
                                { dataGroupe.map( el => (
                                    <option key={el._id} value={el._id}>{el.designation}  {(data.emploi.mardi.seance3.groupeId===el._id)?"<--":""}</option>
                                )) 
                                }
                </select>
                <select id="userId" onChange={(e)=> { 
                        const selectedFormateur = e.target.value;
                        setFormateurState23(selectedFormateur);
                    } } value={formateurState23} className="form-select" aria-label="Default select example">
                        <option selected> { (data.emploi && data.emploi.mardi && data.emploi.mardi.seance3.userId)? "occupée":"vide"}</option>
                            { dataFormateur.map( el => (
                                <option key={el._id} value={el._id}>{el.nom} {el.prenom} {(data.emploi.mardi.seance3.userId===el._id)?"<--":""}</option>
                            )) 
                            }
                </select>
                <button onClick={(e)=> handleSubmitEmploi23(e,"valider")} id="valider" name="valider" className="btn btn-primary">Valider</button>
                <button onClick={(e)=> handleSubmitEmploi23(e,"liberer")} id="liberer" name="liberer" className="btn btn-danger">Libérer</button>
                
                </form>
 		    </td>
        	<td>
            <form >
            <select id="groupeId" onChange={(e)=> { 
                            const selectedGroupe = e.target.value;
                            setGroupeState24(selectedGroupe);
                        } } value={groupeState24} className="form-select" aria-label="Default select example">
                            <option selected> { (data.emploi && data.emploi.mardi && data.emploi.mardi.seance4.groupeId)? "occupée":"vide"}</option>
                                { dataGroupe.map( el => (
                                    <option key={el._id} value={el._id}>{el.designation}  {(data.emploi.mardi.seance4.groupeId===el._id)?"<--":""}</option>
                                )) 
                                }
                </select>
                <select id="userId" onChange={(e)=> { 
                        const selectedFormateur = e.target.value;
                        setFormateurState24(selectedFormateur);
                    } } value={formateurState24} className="form-select" aria-label="Default select example">
                        <option selected> { (data.emploi && data.emploi.mardi && data.emploi.mardi.seance4.userId)? "occupée":"vide"}</option>
                            { dataFormateur.map( el => (
                                <option key={el._id} value={el._id}>{el.nom} {el.prenom} {(data.emploi.mardi.seance4.userId===el._id)?"<--":""}</option>
                            )) 
                            }
                </select>
                <button onClick={(e)=> handleSubmitEmploi24(e,"valider")} id="valider" name="valider" className="btn btn-primary">Valider</button>
                <button onClick={(e)=> handleSubmitEmploi24(e,"liberer")} id="liberer" name="liberer" className="btn btn-danger">Libérer</button>
                
                </form>
 		</td>
      </tr>

      <tr className="table-success">
        <th scope="row"> mercredi </th>
        	<td> 
                <form >
                <select id="groupeId" onChange={(e)=> { 
                            const selectedGroupe = e.target.value;
                            setGroupeState31(selectedGroupe);
                        } } value={groupeState31} className="form-select" aria-label="Default select example">
                            <option selected> { (data.emploi && data.emploi.mercredi && data.emploi.mercredi.seance1.groupeId)? "occupée":"vide"}</option>
                                { dataGroupe.map( el => (
                                    <option key={el._id} value={el._id}>{el.designation}  {(data.emploi.mercredi.seance1.groupeId===el._id)?"<--":""}</option>
                                )) 
                                }
                </select>
                <select id="userId" onChange={(e)=> { 
                        const selectedFormateur = e.target.value;
                        setformateurState31(selectedFormateur);
                    } } value={formateurState31} className="form-select" aria-label="Default select example">
                        <option selected> { (data.emploi && data.emploi.mercredi && data.emploi.mercredi.seance1.userId)? "occupée":"vide"}</option>
                            { dataFormateur.map( el => (
                                <option key={el._id} value={el._id}>{el.nom} {el.prenom} {(data.emploi.mercredi.seance1.userId===el._id)?"<--":""}</option>
                            )) 
                            }
                </select>
                <button onClick={(e)=> handleSubmitEmploi31(e,"valider")} id="valider" name="valider" className="btn btn-primary">Valider</button>
                <button onClick={(e)=> handleSubmitEmploi31(e,"liberer")} id="liberer" name="liberer" className="btn btn-danger">Libérer</button>
                
                </form>
 		    </td>
        	<td>
                <form >
            <select id="groupeId" onChange={(e)=> { 
                            const selectedGroupe = e.target.value;
                            setGroupeState32(selectedGroupe);
                        } } value={groupeState32} className="form-select" aria-label="Default select example">
                            <option selected> { (data.emploi && data.emploi.mercredi && data.emploi.mercredi.seance2.groupeId)? "occupée":"vide"}</option>
                                { dataGroupe.map( el => (
                                    <option key={el._id} value={el._id}>{el.designation}  {(data.emploi.mercredi.seance2.groupeId===el._id)?"<--":""}</option>
                                )) 
                                }
                </select>
                <select id="userId" onChange={(e)=> { 
                        const selectedFormateur = e.target.value;
                        setformateurState32(selectedFormateur);
                    } } value={formateurState32} className="form-select" aria-label="Default select example">
                        <option selected> { (data.emploi && data.emploi.mercredi && data.emploi.mercredi.seance2.userId)? "occupée":"vide"}</option>
                            { dataFormateur.map( el => (
                                <option key={el._id} value={el._id}>{el.nom} {el.prenom} {(data.emploi.mercredi.seance2.userId===el._id)?"<--":""}</option>
                            )) 
                            }
                </select>
                <button onClick={(e)=> handleSubmitEmploi32(e,"valider")} id="valider" name="valider" className="btn btn-primary">Valider</button>
                <button onClick={(e)=> handleSubmitEmploi32(e,"liberer")} id="liberer" name="liberer" className="btn btn-danger">Libérer</button>
                
                </form>
 		</td>
        	<td>
            <form >
            <select id="groupeId" onChange={(e)=> { 
                            const selectedGroupe = e.target.value;
                            setGroupeState33(selectedGroupe);
                        } } value={groupeState33} className="form-select" aria-label="Default select example">
                            <option selected> { (data.emploi && data.emploi.mercredi && data.emploi.mercredi.seance3.groupeId)? "occupée":"vide"}</option>
                                { dataGroupe.map( el => (
                                    <option key={el._id} value={el._id}>{el.designation}  {(data.emploi.mercredi.seance3.groupeId===el._id)?"<--":""}</option>
                                )) 
                                }
                </select>
                <select id="userId" onChange={(e)=> { 
                        const selectedFormateur = e.target.value;
                        setformateurState33(selectedFormateur);
                    } } value={formateurState33} className="form-select" aria-label="Default select example">
                        <option selected> { (data.emploi && data.emploi.mercredi && data.emploi.mercredi.seance3.userId)? "occupée":"vide"}</option>
                            { dataFormateur.map( el => (
                                <option key={el._id} value={el._id}>{el.nom} {el.prenom} {(data.emploi.mercredi.seance3.userId===el._id)?"<--":""}</option>
                            )) 
                            }
                </select>
                <button onClick={(e)=> handleSubmitEmploi33(e,"valider")} id="valider" name="valider" className="btn btn-primary">Valider</button>
                <button onClick={(e)=> handleSubmitEmploi33(e,"liberer")} id="liberer" name="liberer" className="btn btn-danger">Libérer</button>
                
                </form>
 		    </td>
        	<td>
            <form >
            <select id="groupeId" onChange={(e)=> { 
                            const selectedGroupe = e.target.value;
                            setGroupeState34(selectedGroupe);
                        } } value={groupeState34} className="form-select" aria-label="Default select example">
                            <option selected> { (data.emploi && data.emploi.mercredi && data.emploi.mercredi.seance4.groupeId)? "occupée":"vide"}</option>
                                { dataGroupe.map( el => (
                                    <option key={el._id} value={el._id}>{el.designation}  {(data.emploi.mercredi.seance4.groupeId===el._id)?"<--":""}</option>
                                )) 
                                }
                </select>
                <select id="userId" onChange={(e)=> { 
                        const selectedFormateur = e.target.value;
                        setformateurState34(selectedFormateur);
                    } } value={formateurState34} className="form-select" aria-label="Default select example">
                        <option selected> { (data.emploi && data.emploi.mercredi && data.emploi.mercredi.seance4.userId)? "occupée":"vide"}</option>
                            { dataFormateur.map( el => (
                                <option key={el._id} value={el._id}>{el.nom} {el.prenom} {(data.emploi.mercredi.seance4.userId===el._id)?"<--":""}</option>
                            )) 
                            }
                </select>
                <button onClick={(e)=> handleSubmitEmploi34(e,"valider")} id="valider" name="valider" className="btn btn-primary">Valider</button>
                <button onClick={(e)=> handleSubmitEmploi34(e,"liberer")} id="liberer" name="liberer" className="btn btn-danger">Libérer</button>
                
                </form>
 		</td>
      </tr>

      <tr className="table-success">
        <th scope="row"> jeudi </th>
        	<td> 
                <form >
                <select id="groupeId" onChange={(e)=> { 
                            const selectedGroupe = e.target.value;
                            setGroupeState41(selectedGroupe);
                        } } value={groupeState41} className="form-select" aria-label="Default select example">
                            <option selected> { (data.emploi && data.emploi.jeudi && data.emploi.jeudi.seance1.groupeId)? "occupée":"vide"}</option>
                                { dataGroupe.map( el => (
                                    <option key={el._id} value={el._id}>{el.designation}  {(data.emploi.jeudi.seance1.groupeId===el._id)?"<--":""}</option>
                                )) 
                                }
                </select>
                <select id="userId" onChange={(e)=> { 
                        const selectedFormateur = e.target.value;
                        setformateurState41(selectedFormateur);
                    } } value={formateurState41} className="form-select" aria-label="Default select example">
                        <option selected> { (data.emploi && data.emploi.jeudi && data.emploi.jeudi.seance1.userId)? "occupée":"vide"}</option>
                            { dataFormateur.map( el => (
                                <option key={el._id} value={el._id}>{el.nom} {el.prenom} {(data.emploi.jeudi.seance1.userId===el._id)?"<--":""}</option>
                            )) 
                            }
                </select>
                <button onClick={(e)=> handleSubmitEmploi41(e,"valider")} id="valider" name="valider" className="btn btn-primary">Valider</button>
                <button onClick={(e)=> handleSubmitEmploi41(e,"liberer")} id="liberer" name="liberer" className="btn btn-danger">Libérer</button>
                
                </form>
 		    </td>
        	<td>
                <form >
            <select id="groupeId" onChange={(e)=> { 
                            const selectedGroupe = e.target.value;
                            setGroupeState42(selectedGroupe);
                        } } value={groupeState42} className="form-select" aria-label="Default select example">
                            <option selected> { (data.emploi && data.emploi.jeudi && data.emploi.jeudi.seance2.groupeId)? "occupée":"vide"}</option>
                                { dataGroupe.map( el => (
                                    <option key={el._id} value={el._id}>{el.designation}  {(data.emploi.jeudi.seance2.groupeId===el._id)?"<--":""}</option>
                                )) 
                                }
                </select>
                <select id="userId" onChange={(e)=> { 
                        const selectedFormateur = e.target.value;
                        setformateurState42(selectedFormateur);
                    } } value={formateurState42} className="form-select" aria-label="Default select example">
                        <option selected> { (data.emploi && data.emploi.jeudi && data.emploi.jeudi.seance2.userId)? "occupée":"vide"}</option>
                            { dataFormateur.map( el => (
                                <option key={el._id} value={el._id}>{el.nom} {el.prenom} {(data.emploi.jeudi.seance2.userId===el._id)?"<--":""}</option>
                            )) 
                            }
                </select>
                <button onClick={(e)=> handleSubmitEmploi42(e,"valider")} id="valider" name="valider" className="btn btn-primary">Valider</button>
                <button onClick={(e)=> handleSubmitEmploi42(e,"liberer")} id="liberer" name="liberer" className="btn btn-danger">Libérer</button>
                
                </form>
 		</td>
        	<td>
            <form >
            <select id="groupeId" onChange={(e)=> { 
                            const selectedGroupe = e.target.value;
                            setGroupeState43(selectedGroupe);
                        } } value={groupeState43} className="form-select" aria-label="Default select example">
                            <option selected> { (data.emploi && data.emploi.jeudi && data.emploi.jeudi.seance3.groupeId)? "occupée":"vide"}</option>
                                { dataGroupe.map( el => (
                                    <option key={el._id} value={el._id}>{el.designation}  {(data.emploi.jeudi.seance3.groupeId===el._id)?"<--":""}</option>
                                )) 
                                }
                </select>
                <select id="userId" onChange={(e)=> { 
                        const selectedFormateur = e.target.value;
                        setformateurState43(selectedFormateur);
                    } } value={formateurState43} className="form-select" aria-label="Default select example">
                        <option selected> { (data.emploi && data.emploi.jeudi && data.emploi.jeudi.seance3.userId)? "occupée":"vide"}</option>
                            { dataFormateur.map( el => (
                                <option key={el._id} value={el._id}>{el.nom} {el.prenom} {(data.emploi.jeudi.seance3.userId===el._id)?"<--":""}</option>
                            )) 
                            }
                </select>
                <button onClick={(e)=> handleSubmitEmploi43(e,"valider")} id="valider" name="valider" className="btn btn-primary">Valider</button>
                <button onClick={(e)=> handleSubmitEmploi43(e,"liberer")} id="liberer" name="liberer" className="btn btn-danger">Libérer</button>
                
                </form>
 		    </td>
        	<td>
            <form >
            <select id="groupeId" onChange={(e)=> { 
                            const selectedGroupe = e.target.value;
                            setGroupeState44(selectedGroupe);
                        } } value={groupeState44} className="form-select" aria-label="Default select example">
                            <option selected> { (data.emploi && data.emploi.jeudi && data.emploi.jeudi.seance4.groupeId)? "occupée":"vide"}</option>
                                { dataGroupe.map( el => (
                                    <option key={el._id} value={el._id}>{el.designation}  {(data.emploi.jeudi.seance4.groupeId===el._id)?"<--":""}</option>
                                )) 
                                }
                </select>
                <select id="userId" onChange={(e)=> { 
                        const selectedFormateur = e.target.value;
                        setformateurState44(selectedFormateur);
                    } } value={formateurState44} className="form-select" aria-label="Default select example">
                        <option selected> { (data.emploi && data.emploi.jeudi && data.emploi.jeudi.seance4.userId)? "occupée":"vide"}</option>
                            { dataFormateur.map( el => (
                                <option key={el._id} value={el._id}>{el.nom} {el.prenom} {(data.emploi.jeudi.seance4.userId===el._id)?"<--":""}</option>
                            )) 
                            }
                </select>
                <button onClick={(e)=> handleSubmitEmploi44(e,"valider")} id="valider" name="valider" className="btn btn-primary">Valider</button>
                <button onClick={(e)=> handleSubmitEmploi44(e,"liberer")} id="liberer" name="liberer" className="btn btn-danger">Libérer</button>
                
                </form>
 		</td>
      </tr>

      <tr className="table-success">
        <th scope="row"> vendredi </th>
        	<td> 
                <form >
                <select id="groupeId" onChange={(e)=> { 
                            const selectedGroupe = e.target.value;
                            setGroupeState51(selectedGroupe);
                        } } value={groupeState51} className="form-select" aria-label="Default select example">
                            <option selected> { (data.emploi && data.emploi.vendredi && data.emploi.vendredi.seance1.groupeId)? "occupée":"vide"}</option>
                                { dataGroupe.map( el => (
                                    <option key={el._id} value={el._id}>{el.designation}  {(data.emploi.vendredi.seance1.groupeId===el._id)?"<--":""}</option>
                                )) 
                                }
                </select>
                <select id="userId" onChange={(e)=> { 
                        const selectedFormateur = e.target.value;
                        setformateurState51(selectedFormateur);
                    } } value={formateurState51} className="form-select" aria-label="Default select example">
                        <option selected> { (data.emploi && data.emploi.vendredi && data.emploi.vendredi.seance1.userId)? "occupée":"vide"}</option>
                            { dataFormateur.map( el => (
                                <option key={el._id} value={el._id}>{el.nom} {el.prenom} {(data.emploi.vendredi.seance1.userId===el._id)?"<--":""}</option>
                            )) 
                            }
                </select>
                <button onClick={(e)=> handleSubmitEmploi51(e,"valider")} id="valider" name="valider" className="btn btn-primary">Valider</button>
                <button onClick={(e)=> handleSubmitEmploi51(e,"liberer")} id="liberer" name="liberer" className="btn btn-danger">Libérer</button>
                
                </form>
 		    </td>
        	<td>
                <form >
            <select id="groupeId" onChange={(e)=> { 
                            const selectedGroupe = e.target.value;
                            setGroupeState52(selectedGroupe);
                        } } value={groupeState52} className="form-select" aria-label="Default select example">
                            <option selected> { (data.emploi && data.emploi.vendredi && data.emploi.vendredi.seance2.groupeId)? "occupée":"vide"}</option>
                                { dataGroupe.map( el => (
                                    <option key={el._id} value={el._id}>{el.designation}  {(data.emploi.vendredi.seance2.groupeId===el._id)?"<--":""}</option>
                                )) 
                                }
                </select>
                <select id="userId" onChange={(e)=> { 
                        const selectedFormateur = e.target.value;
                        setformateurState52(selectedFormateur);
                    } } value={formateurState52} className="form-select" aria-label="Default select example">
                        <option selected> { (data.emploi && data.emploi.vendredi && data.emploi.vendredi.seance2.userId)? "occupée":"vide"}</option>
                            { dataFormateur.map( el => (
                                <option key={el._id} value={el._id}>{el.nom} {el.prenom} {(data.emploi.vendredi.seance2.userId===el._id)?"<--":""}</option>
                            )) 
                            }
                </select>
                <button onClick={(e)=> handleSubmitEmploi52(e,"valider")} id="valider" name="valider" className="btn btn-primary">Valider</button>
                <button onClick={(e)=> handleSubmitEmploi52(e,"liberer")} id="liberer" name="liberer" className="btn btn-danger">Libérer</button>
                
                </form>
 		</td>
        	<td>
            <form >
            <select id="groupeId" onChange={(e)=> { 
                            const selectedGroupe = e.target.value;
                            setGroupeState53(selectedGroupe);
                        } } value={groupeState53} className="form-select" aria-label="Default select example">
                            <option selected> { (data.emploi && data.emploi.vendredi && data.emploi.vendredi.seance3.groupeId)? "occupée":"vide"}</option>
                                { dataGroupe.map( el => (
                                    <option key={el._id} value={el._id}>{el.designation}  {(data.emploi.vendredi.seance3.groupeId===el._id)?"<--":""}</option>
                                )) 
                                }
                </select>
                <select id="userId" onChange={(e)=> { 
                        const selectedFormateur = e.target.value;
                        setformateurState53(selectedFormateur);
                    } } value={formateurState53} className="form-select" aria-label="Default select example">
                        <option selected> { (data.emploi && data.emploi.vendredi && data.emploi.vendredi.seance3.userId)? "occupée":"vide"}</option>
                            { dataFormateur.map( el => (
                                <option key={el._id} value={el._id}>{el.nom} {el.prenom} {(data.emploi.vendredi.seance3.userId===el._id)?"<--":""}</option>
                            )) 
                            }
                </select>
                <button onClick={(e)=> handleSubmitEmploi53(e,"valider")} id="valider" name="valider" className="btn btn-primary">Valider</button>
                <button onClick={(e)=> handleSubmitEmploi53(e,"liberer")} id="liberer" name="liberer" className="btn btn-danger">Libérer</button>
                
                </form>
 		    </td>
        	<td>
            <form >
            <select id="groupeId" onChange={(e)=> { 
                            const selectedGroupe = e.target.value;
                            setGroupeState54(selectedGroupe);
                        } } value={groupeState54} className="form-select" aria-label="Default select example">
                            <option selected> { (data.emploi && data.emploi.vendredi && data.emploi.vendredi.seance4.groupeId)? "occupée":"vide"}</option>
                                { dataGroupe.map( el => (
                                    <option key={el._id} value={el._id}>{el.designation}  {(data.emploi.vendredi.seance4.groupeId===el._id)?"<--":""}</option>
                                )) 
                                }
                </select>
                <select id="userId" onChange={(e)=> { 
                        const selectedFormateur = e.target.value;
                        setformateurState54(selectedFormateur);
                    } } value={formateurState54} className="form-select" aria-label="Default select example">
                        <option selected> { (data.emploi && data.emploi.vendredi && data.emploi.vendredi.seance4.userId)? "occupée":"vide"}</option>
                            { dataFormateur.map( el => (
                                <option key={el._id} value={el._id}>{el.nom} {el.prenom} {(data.emploi.vendredi.seance4.userId===el._id)?"<--":""}</option>
                            )) 
                            }
                </select>
                <button onClick={(e)=> handleSubmitEmploi54(e,"valider")} id="valider" name="valider" className="btn btn-primary">Valider</button>
                <button onClick={(e)=> handleSubmitEmploi54(e,"liberer")} id="liberer" name="liberer" className="btn btn-danger">Libérer</button>
                
                </form>
 		</td>
      </tr>

      <tr className="table-success">
        <th scope="row"> samedi </th>
        	<td> 
                <form >
                <select id="groupeId" onChange={(e)=> { 
                            const selectedGroupe = e.target.value;
                            setGroupeState61(selectedGroupe);
                        } } value={groupeState61} className="form-select" aria-label="Default select example">
                            <option selected> { (data.emploi && data.emploi.samedi && data.emploi.samedi.seance1.groupeId)? "occupée":"vide"}</option>
                                { dataGroupe.map( el => (
                                    <option key={el._id} value={el._id}>{el.designation}  {(data.emploi.samedi.seance1.groupeId===el._id)?"<--":""}</option>
                                )) 
                                }
                </select>
                <select id="userId" onChange={(e)=> { 
                        const selectedFormateur = e.target.value;
                        setformateurState61(selectedFormateur);
                    } } value={formateurState61} className="form-select" aria-label="Default select example">
                        <option selected> { (data.emploi && data.emploi.samedi && data.emploi.samedi.seance1.userId)? "occupée":"vide"}</option>
                            { dataFormateur.map( el => (
                                <option key={el._id} value={el._id}>{el.nom} {el.prenom} {(data.emploi.samedi.seance1.userId===el._id)?"<--":""}</option>
                            )) 
                            }
                </select>
                <button onClick={(e)=> handleSubmitEmploi61(e,"valider")} id="valider" name="valider" className="btn btn-primary">Valider</button>
                <button onClick={(e)=> handleSubmitEmploi61(e,"liberer")} id="liberer" name="liberer" className="btn btn-danger">Libérer</button>
                
                </form>
 		    </td>
        	<td>
                <form >
            <select id="groupeId" onChange={(e)=> { 
                            const selectedGroupe = e.target.value;
                            setGroupeState62(selectedGroupe);
                        } } value={groupeState62} className="form-select" aria-label="Default select example">
                            <option selected> { (data.emploi && data.emploi.samedi && data.emploi.samedi.seance2.groupeId)? "occupée":"vide"}</option>
                                { dataGroupe.map( el => (
                                    <option key={el._id} value={el._id}>{el.designation}  {(data.emploi.samedi.seance2.groupeId===el._id)?"<--":""}</option>
                                )) 
                                }
                </select>
                <select id="userId" onChange={(e)=> { 
                        const selectedFormateur = e.target.value;
                        setformateurState62(selectedFormateur);
                    } } value={formateurState62} className="form-select" aria-label="Default select example">
                        <option selected> { (data.emploi && data.emploi.samedi && data.emploi.samedi.seance2.userId)? "occupée":"vide"}</option>
                            { dataFormateur.map( el => (
                                <option key={el._id} value={el._id}>{el.nom} {el.prenom} {(data.emploi.samedi.seance2.userId===el._id)?"<--":""}</option>
                            )) 
                            }
                </select>
                <button onClick={(e)=> handleSubmitEmploi62(e,"valider")} id="valider" name="valider" className="btn btn-primary">Valider</button>
                <button onClick={(e)=> handleSubmitEmploi62(e,"liberer")} id="liberer" name="liberer" className="btn btn-danger">Libérer</button>
                
                </form>
 		</td>
        	<td>
            <form >
            <select id="groupeId" onChange={(e)=> { 
                            const selectedGroupe = e.target.value;
                            setGroupeState63(selectedGroupe);
                        } } value={groupeState63} className="form-select" aria-label="Default select example">
                            <option selected> { (data.emploi && data.emploi.samedi && data.emploi.samedi.seance3.groupeId)? "occupée":"vide"}</option>
                                { dataGroupe.map( el => (
                                    <option key={el._id} value={el._id}>{el.designation}  {(data.emploi.samedi.seance3.groupeId===el._id)?"<--":""}</option>
                                )) 
                                }
                </select>
                <select id="userId" onChange={(e)=> { 
                        const selectedFormateur = e.target.value;
                        setformateurState63(selectedFormateur);
                    } } value={formateurState63} className="form-select" aria-label="Default select example">
                        <option selected> { (data.emploi && data.emploi.samedi && data.emploi.samedi.seance3.userId)? "occupée":"vide"}</option>
                            { dataFormateur.map( el => (
                                <option key={el._id} value={el._id}>{el.nom} {el.prenom} {(data.emploi.samedi.seance3.userId===el._id)?"<--":""}</option>
                            )) 
                            }
                </select>
                <button onClick={(e)=> handleSubmitEmploi63(e,"valider")} id="valider" name="valider" className="btn btn-primary">Valider</button>
                <button onClick={(e)=> handleSubmitEmploi63(e,"liberer")} id="liberer" name="liberer" className="btn btn-danger">Libérer</button>
                
                </form>
 		    </td>
        	<td>
            <form >
            <select id="groupeId" onChange={(e)=> { 
                            const selectedGroupe = e.target.value;
                            setGroupeState64(selectedGroupe);
                        } } value={groupeState64} className="form-select" aria-label="Default select example">
                            <option selected> { (data.emploi && data.emploi.samedi && data.emploi.samedi.seance4.groupeId)? "occupée":"vide"}</option>
                                { dataGroupe.map( el => (
                                    <option key={el._id} value={el._id}>{el.designation}  {(data.emploi.samedi.seance4.groupeId===el._id)?"<--":""}</option>
                                )) 
                                }
                </select>
                <select id="userId" onChange={(e)=> { 
                        const selectedFormateur = e.target.value;
                        setformateurState64(selectedFormateur);
                    } } value={formateurState64} className="form-select" aria-label="Default select example">
                        <option selected> { (data.emploi && data.emploi.samedi && data.emploi.samedi.seance4.userId)? "occupée":"vide"}</option>
                            { dataFormateur.map( el => (
                                <option key={el._id} value={el._id}>{el.nom} {el.prenom} {(data.emploi.samedi.seance4.userId===el._id)?"<--":""}</option>
                            )) 
                            }
                </select>
                <button onClick={(e)=> handleSubmitEmploi64(e,"valider")} id="valider" name="valider" className="btn btn-primary">Valider</button>
                <button onClick={(e)=> handleSubmitEmploi64(e,"liberer")} id="liberer" name="liberer" className="btn btn-danger">Libérer</button>
                
                </form>
 		</td>
      </tr>

    </tbody>
  </table>




<button disabled type="submit" className="btn btn-primary">Sauvegarder</button>


<Link to={`/admin/emploi/ListeSalles/`} className="btn btn-dark">Liste des salles</Link>
</div>

</div>


        </>
);
}

export default EmploiSalle;
