import {useState} from "react";
import './Advice.css'
function Advice (){
    const [advice,setadvice]=useState("Please Click the button to Get the Advice ")
    async function getAdvice(){
        const res = await fetch("https://api.adviceslip.com/advice")
        const data = await res.json()
        setadvice(data.slip.advice)
        }
    return(
        <section>
            <div>
            <h2>{advice}</h2>
        </div>
        <div>
            <button onClick={getAdvice}>Get Advice</button>
        </div>
        </section>
    )
}

export default Advice
