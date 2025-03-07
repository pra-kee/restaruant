import { useState } from "react"

function MyForm(){

    // const[name,setName]=useState("");
    const [city, setCity] = useState('Select City');
    const[inputs,setInputs]=useState({name:"",age:"", mailid:"",city:""});
    // function CityDropdown() {
        
        // const cities = [
        //   { value: 'Banglore', label: 'Banglore' },
        //   { value: 'Hyderabad', label: 'Hyderabad' },
        //   { value: 'Chennai', label: 'Chennai' },
        //   { value: 'Tirupati', label: 'Tirupati' },
        //   { value: 'Mumbai', label: 'Mumbai' },
        // ];
// }

        const handleCityChange = (e) => {
          setCity(e.target.value);
          setInputs((previousState)=>{return{...previousState,city:e.target.value}})
        }

    function handlesubmit(e){

        e.preventDefault();
        console.log("form submitted")
        console.log('current state',inputs);
    }
     return <form onSubmit={handlesubmit}>
        <label>Enter your name :<input type="text" onChange={(e)=>{setInputs((previousState)=>{return{...previousState,name:e.target.value}})}}/></label><br/>
        <label>Enter your age :<input type="text" onChange={(e)=>{setInputs((previousState)=>{return{...previousState,age:e.target.value}})}}/></label><br/>
        <label>Enter your mailid :<input type="text" onChange={(e)=>{setInputs((previousState)=>{return{...previousState,mailid:e.target.value}})}}/></label><br/>
        {/* <label>Enter your city :<input type="text" placeholder={city} onChange={handleCityChange}/></label><br/> */}
        <label>Enter your city: </label>
        <select value={city} onChange={handleCityChange}>
         <option value="">Select an option</option>
         <option value="Bangalore">Bangalore</option>
         <option value="Hyderabad">Hyderabad</option>
        <option value="Chennai">Chennai</option>
        <option value="Tirupati">Tirupati</option>
        <option value="Mumbai">Mumbai</option>
       </select>  <br/>
        <input type="submit" value="submit form"/>
     </form>
}

export default MyForm;

