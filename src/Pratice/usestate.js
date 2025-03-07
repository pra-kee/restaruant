import { useState } from "react"
function NewState(){

    const [cartCount,setcartCount]=useState(0)
    function Add(){
        setcartCount(cartCount + 1 )
    }
    function Clear(){
        setcartCount(cartCount - 1 )
    }
    return(
        <>
        <h1>Number of items in the cart : {cartCount}</h1>
        <button onClick={Add}>{cartCount} - Add to Cart</button>
        <button onClick={Clear}>Delete</button>
        </>
    )
}

export default NewState