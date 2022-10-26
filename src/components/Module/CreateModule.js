//import { Link } from "react-router-dom";

import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const CreateModule = (req,res) => {
    const initialData ={
        codeModule: "",
        masseHoraireP:0,
        masseHoraireD:0,
        designation:"",
        regional:false,
        filiereId:""
}
    const [data, setData] = useState(
        initialData
    );

const [filiereState, setFiliereState] = useState(null);
const [dataFiliere, setFiliereData] = useState([]);
    useEffect( ()=>{
      const fetchData = async () => {
          const resultat = await axios(`${process.env.REACT_APP_SERVER_URL}/filieres`);
          setFiliereData(resultat.data);
          console.log("récupération des filières  réussie!!!");
      };
      fetchData();
  },[]);


    function handleChangeModule(e) {
        const newData = {...data}
        console.log(data)
        console.log(e.target.value)
        newData[e.target.id]=e.target.value
        setData(newData)
        console.log(data)
    }
    async function handleSubmitModule(e) {
        e.preventDefault()

        data.filiereId=filiereState;

        await axios.post(
          `${process.env.REACT_APP_SERVER_URL}/modules/CreateModule`,
            {
                codeModule: data.codeModule,
                masseHoraireP:data.masseHoraireP,
                masseHoraireD:data.masseHoraireD,
                designation:data.designation,
                regional:data.regional,
                filiereId: data.filiereId
        }
        );
        setData(initialData);
        //setFiliereState(null)
    }
return (
    <>

<div className="container">
<h2>Créer un module</h2>
<div className="bd-example">
<form onSubmit={(e)=> handleSubmitModule(e)}>
<div className="row g-2">
  <div className="col-md">
    <div className="form-floating">
      <input type="text" onChange={(e)=> handleChangeModule(e)} className="form-control" id="codeModule" value={data.codeModule}/>
      <label for="codeModule">code du module</label>
    </div>
  </div>

  <div className="col-md">
    <div className="form-floating">
      <input type="text" onChange={(e)=> handleChangeModule(e)} className="form-control" id="designation" value={data.designation}/>
      <label for="designation">designation du module</label>
    </div>
  </div>
</div>

<div className="row g-2">
  <div className="col-md">
    <div className="form-floating">
      <input type="number" onChange={(e)=> handleChangeModule(e)} className="form-control" id="masseHoraireP" value={data.masseHoraireP}/>
      <label for="masseHoraireP">Masse horaire présentiel</label>
    </div>
  </div>

  <div className="col-md">
    <div className="form-floating">
      <input type="number" onChange={(e)=> handleChangeModule(e)} className="form-control" id="masseHoraireD" value={data.masseHoraireD}/>
      <label for="masseHoraireD">Masse horaire à distance</label>
    </div>
  </div>
</div>

<div className="row g-2">
  <div className="col-md">
    <div className="form-floating">
      <input type="text" onChange={(e)=> handleChangeModule(e)} className="form-control" id="regional" value={data.regional}/>
      <label for="regional">Régional (true/false)</label>
    </div>
  </div>
</div>
<div className="form-floating">
<select id="filiereId" onChange={(e)=> { 
            const selectedFiliere = e.target.value;
            setFiliereState(selectedFiliere);
                      } } value={filiereState} className="form-select" aria-label="Default select example">
  			  <option selected>---</option>
                { dataFiliere.map( el => (
                    <option key={el._id} value={el._id}>{el.designation}</option>
                )) 
                }
                
</select>
<label for="filiereId">Filière</label>
</div>
<button type="submit" className="btn btn-primary">Sauvegarder</button>
</form>

<Link to={`/ListeFilieres/`} className="btn btn-dark">Liste des filières</Link>
</div>

</div>


        </>
);
}

export default CreateModule;
