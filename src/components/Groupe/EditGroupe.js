//import { Link } from "react-router-dom";

import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const EditGroupe = () => {

  const {id} = useParams();

  //const [valeur, setValeur] = useState(null);
  const [data, setData] = useState( {} );
  useEffect( ()=>{
    const fetchData = () => {

       axios.get(`${process.env.REACT_APP_SERVER_URL}/groupes/${id}`)
        .then( (resultat)=> {
          setData(resultat.data);
          console.log("récupération des informations du groupe  réussie!!!");
        })
        .catch((e)=>console.log("récupération des informations du groupe échouée!!! : "+e));
    };

    fetchData();
  },[id]);

    useEffect( ()=>{
      const fetchData = async () => {
          const resultat = await axios(`${process.env.REACT_APP_SERVER_URL}/filieres`);
          setFiliereData(resultat.data);
          console.log("récupération des filières  réussie!!!");
      };
      fetchData();
  },[]);

const [dataFiliere, setFiliereData] = useState([]);
const [filiereState, setFiliereState] = useState(data.filiere);

function handleChangeGroupe(e) {
        const newData = {...data}
        console.log(data)
        console.log(e.target.value)
        
        newData[e.target.id]=e.target.value;
        setData(newData)
        console.log(data)
    }
function handleSubmitGroupe(e) {
        e.preventDefault()

        data.filiereId=filiereState;

        axios.patch(
            `${process.env.REACT_APP_SERVER_URL}/groupes/${id}`,
            {
                designation:data.designation,
                filiereId:data.filiereId
        }
        ).then(()=> {
            console.log("filiereState: "+ filiereState)
          console.log("modification réussie!!!")
          window.location.replace("/ListeGroupes");
        })
        .catch((e)=>console.log("modification échouée!!!"))
    }
return (
    <>

<div className="container">
<h2>Créer un groupe</h2>
<div className="bd-example">

<form onSubmit={(e)=> handleSubmitGroupe(e) }>
<div className="row g-2">
  <div className="col-md">
    <div className="form-floating">
      <input type="text" onChange={(e)=> handleChangeGroupe(e)} className="form-control" id="designation" value={data.designation}/>
      <label for="designation">code du groupe</label>
    </div>
  </div>

  <div className="col-md">
    <div className="form-floating">
      
        <select id="filiereId" onChange={(e)=> { 
            const selectedFiliere = e.target.value;
            setFiliereState(selectedFiliere);
        } } value={filiereState} className="form-select" aria-label="Default select example">
  			  <option selected>{data.filiere}</option>
                { dataFiliere.map( el => (
                    <option key={el._id} value={el._id}>{el.designation}</option>
                )) 
                }
  		</select>
<p>{filiereState}</p>
      <label for="filiereId">Filière</label>
    </div>
    <button type="submit" className="btn btn-primary">Modifier groupe</button>

  </div>

</div>
</form>

<button type="submit" className="btn btn-primary">Ajouter module</button>


<button type="submit" className="btn btn-primary">Ajouter stagiaire</button>
</div>


</div>


        </>
);
}

export default EditGroupe;
