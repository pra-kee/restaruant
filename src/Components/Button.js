import React from "react";
import './Header.css'

const Button = () =>{
    function Try (){
        const N = ["Prakash","Keerthika","Akashiya"]
        const O = Math.floor(Math.random()*3)
        return N[O]
    } 
    return(
        <picture>
             <main>
            <p>
                Hello <fi>' {Try()} '</fi>
            </p>
        </main>

        </picture>
       
    )
}

export default Button;
