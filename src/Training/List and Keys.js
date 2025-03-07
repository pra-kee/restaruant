import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import './List and Key.css'





function Key(){

    const [items,setitems]=useState([
        {
            id:1,
            checked:true,
            item:"Prakash"

        },
        {
            id:2,
            checked:false,
            item:"Keerthika"

        },
        {
            id:3,
            checked:true,
            item:"Akashiya"

        },
        {
            id:4,
            checked:true,
            item:"Indhu"

        },
        {
            id:5,
            checked:true,
            item:"yazhini"

        },
    ])

    const[newItem,setnewItem]=useState('')

    const handle = (id) => {
        const cli = () => items.map((items)=>(
            items.id===id ? {...items,checked:!items.checked}
            :items))
            setitems(cli)
            localStorage.setItem("hello_prakash",JSON.stringify(cli))
            
    }

    const det = (id) => {
        const cli = ()=> items.filter((items)=>(
            items.id!==id
        ))
        setitems(cli)
    }

    const handleSubmit = (e) => {
        console.log("submitted")
    }
    return(
        <main style={{paddingTop:"5rem"}}>
            {(items.length)?(
                 <ul>
                 {items.map((items)=>(
                     <li className="item" key={items.id}>
                         <input type="checkbox"
                         onChange={()=>handle(items.id)}
                         checked={items.checked} />
                         <label htmlFor="">{items.item}</label>
                         <button onClick={()=>det(items.id)}><FaTrashAlt/></button>
                     </li>
                 ))}
             </ul>
  
            ) : <p style={{paddingTop:"6rem",fontSize:"30px"}}> Your List is Empty ! </p> }
                  </main>
    )
}

export default Key;
