import Bike from "./Bike"
import { useState } from "react"

function App (){
  function prakash (){
    const name =["Earn","Grow","Give"] 
    const int = Math.floor(Math.random()*3)
    return name[int]
  }

  const handle = function () {
    console.log("Thanks")
  }
  return (
   <main>
      <div><Bike/></div>
      <p> Let's " <fig>{prakash()}</fig>" Money </p>
      <button onClick={handle()}>Click</button>
    
    </main>
    
  )
}

export default App;