import { useState } from "react";

function Inputs () {
    const [inputs,setinputs]=useState({})

    function handleSubmit(e){
        e.preventDefault()
        console.log("Form Submitted")
        console.log("Current Inputs",inputs)

    }
    
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Enter your Name :
                <input type="text" onChange={(e)=>{setinputs((previousState)=>{return{...previousState,name:e.target.value,}})}} /> 
            </label><br />
            <label>
                Enter your Age :
                <input type="text" onChange={(e)=>{setinputs((previousState)=>{return{...previousState,age:e.target.value,}})}} /> 

            </label><br />
            <label>
                Enter your E-mail :
                <input type="text" onChange={(e)=>{setinputs((previousState)=>{return{...previousState,email:e.target.value,}})}} /> 
            </label><br />
            <label>
                Select your location: 
                <select onChange={(e)=>{setinputs((previousState)=>{return{...previousState,location:e.target.value,}})}}  >
                <optgroup >
                <option value="" >--Select--</option>
                <option value="">Tamil nadu</option>
                <option value="">Kerala</option>
                <option value="">karnataka</option>
                <option value="">Andra pradesh</option>
            </optgroup>
                </select>

           
            
            </label><br />
            <input type="submit" onChange={(e)=>{setinputs((previousState)=>{return{...previousState,name:e.target.value,}})}} />
            </form>
    )
}

export default Inputs
