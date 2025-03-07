import { useState } from "react";
import './ChatGpt.css'

function Prakash(){

    const [text,settext]=useState("Blue")

    function Change(){
        settext (text === 'Blue'?'Red':'Blue')
    }
    return(
        <div className="main-div">
            <p className="main-p">
                My Favorite Color is <span style={{color:text}}>' {text} '</span>
            </p>
            <button className="main-btn" onClick={()=>Change()}>Change color</button>
            
        </div>
    )
}
export default Prakash;