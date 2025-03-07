/* import { useState } from "react";

function List (){
    const [list,setlist]=useState([])
    const [count,setcount]=useState(1)

    function addItem () {
        const itemName = 'Item'+count;
        setlist((previousState)=>{
            return[...previousState,itemName]
        })
        setcount((previousState)=>{
            return previousState + 1 

        })
    }
    function delete1 () {
        setcount (...count,list.slice(0,-1))
    }
        
    
    return(
        <main>
            <h1>
                List
            </h1>
            
            <button onClick={addItem}>
                Add Item
            </button>
            <button onClick={delete1}>
                Delete
            </button>
            <ul>
                {list.map((el,index)=>(
                    <li key={index}>
                        {el}
                    </li>
                ))}
            </ul>
        </main>
    )
}

export default List;

 */