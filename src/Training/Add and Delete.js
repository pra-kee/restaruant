import { useState } from "react";


function Button () {

    const [items,setitems]=useState([])
    const [message,setmesssage]=useState('')


    const maxItem = 6

    function addItem () {

        if (items.length >=  maxItem) {
            setmesssage(`Your maximum Limit is  ${maxItem} ! `)
        }
        else{
            const newItem = `Item - ${items.length + 1 }`
            setitems([...items,newItem])
            
        }

    }
    const deleteItem = () => {
        if(items.length === 0){
            setmesssage("Please Add the Item First ! ")
        }
        else{
            setitems(items.slice(0,-1))
    
        }

    }
    

    return(
        <div className=" header">
            
            <button className="btn-1" onClick={addItem}>Add item</button  >
            <button className="btn-2" onClick={deleteItem}>Delete item</button>

           <p className="alert">{message}</p>
            
                <ul className="ul"> {items.map((pk,ak)=>(
                    <li className="li" key={ak}>
                            {pk}
                    </li>

                ))}
                </ul>
        </div>
    )
}
export default Button;