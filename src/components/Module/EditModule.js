//import { Link } from "react-router-dom";

import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const EditModule = () => {

  //const [initialData, setInitialData] = useState( {} );
  const {id} = useParams();

  const [data, setData] = useState( {} );
  useEffect( ()=>{
    const fetchData = () => {

       axios.get(`${process.env.REACT_APP_SERVER_URL}/modules/${id}`)
        .then( (resultat)=> {
          //setInitialData(resultat.data);
          setData(resultat.data);
          console.log("récupération du module  réussie!!!");
        })
        .catch((e)=>console.log("récupération du module échouée!!! : "+e));
    };

    fetchData();
  },[id]);
  
/*const [data, setData] = useState(
        //initialData
        {}
    );*/
//setData("initialData : "+initialData)
//console.log(initialData)
//console.log(data)
function handleChangeModule(e) {
        const newData = {...data}
        console.log(data)
        console.log(e.target.value)
        newData[e.target.id]=e.target.value
        setData(newData)
        console.log(data)
    }
function handleSubmitModule(e) {
        e.preventDefault()
        axios.patch(
            `${process.env.REACT_APP_SERVER_URL}/modules/${id}`,
            {
                codeModule: data.codeModule,
                masseHoraireP:data.masseHoraireP,
                masseHoraireD:data.masseHoraireD,
                designation:data.designation,
                regional:data.regional
        }
        ).then(()=> {
          //setData(initialData);
          console.log("modification réussie!!!")
          window.location.replace("/admin/module/ListeModules");
        })
        .catch((e)=>console.log("modification échouée!!!"))

        //setInitialData({})
    }
return (
    <>

<div className="container">
<h2>Modifier un module</h2>
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

<button type="submit" className="btn btn-primary">Sauvegarder</button>
</form>
</div>

</div>


        </>
);
}

export default EditModule;
