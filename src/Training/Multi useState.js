import { useState } from "react";
import Prakash from "./Use State";

function Scooter(){
    
    const [bike,setbike]=useState(
        {
            Type:"Scooty",
            Color:"Red",
            Brand:"Activa",
            Year:"2024"
        }
        

    )
    function add (){
        setbike(Prakash =>{
            return{...Prakash,Color:"Blue"
        }})
    }
    function color (){
        setbike(bike === "Red"?"Blue":"Red")
    }
    return<>
<h1>My Scooty</h1>
<p>Type:{bike.Type}</p>
<p>Color:{bike.Color}</p>
<p>Brand:{bike.Brand}</p>
<p>Year:{bike.Year}</p>
<button onClick={add}>Change</button>
</>

}

export default Scooter;