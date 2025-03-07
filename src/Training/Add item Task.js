import { useState } from "react";
import './ChatGpt.css'

function Prakash(){

    const[item,setitem]=useState([])
    const[text,settext]=useState()

    const limit = 4;

    function  addItem(){

        if(item.length >= limit){
            settext(`Your Maximum limit is ${limit}`)
        }
        else{
            const newItem  = `Item - ${item.length + 1 }`
            setitem([...item,newItem])

        }
    }

    function deleteItem () {
        if (item.length === 0 ){
            settext("Please Add the Item First ! ")
        }
        else{

            setitem(item.slice(0,-1))
        }
    }

    return(
        <main>
            <div className="header">
                <button className="btn-1" onClick={addItem}>Add Item </button>
                <button className="btn-2" onClick={deleteItem}>Delete</button>
                <p className="alert">{text}</p>

                <ul className="ul">
                    {item.map((add,delet)=>(
                        <li className="li" key={delet}>
                            {add}
                     
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    )
}

export default Prakash;