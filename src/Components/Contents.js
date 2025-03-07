import React from "react"

const Contents = () => {

    function handleNameChange(){
      
          const name = ["Keerthika","Akashiya","Indhu"]
       
    const int = Math.floor(Math.random()*3)

    return name[int]

    }
    const handleClick = () =>{
      console.log("Thanks for your support")
    }
    
  return (
    <main>
      <p> Welcome {handleNameChange()}...</p>

        <button onClick={ ()=> handleClick()}>Click Here !</button>


    </main>
      )
}

export default Contents;