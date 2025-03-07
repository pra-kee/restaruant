import React from "react";
import { useState } from "react";

function Submit(){

    const [newitem,setnewitem]=useState('')
        
        function handleSubmit (e) {
            e.preventDefault()
            if(!newitem) return
            console.log(`Name:${newitem}`)
            setnewitem('')
            
        }

        return(
            <form className="addform" onSubmit={handleSubmit}>
                <label htmlFor="addItem" >Name : </label>
                <input 
                id="addItem"
                type="text"
                placeholder="Enter your name "
                required
                value={newitem}
                onChange={(e)=>{setnewitem(e.target.value)}}
                />
                <button type="submit" >
                    submit
                </button>

            </form>
        )
    

}

export default Submit;

