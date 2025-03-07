import { useState } from "react"
import './BackGround.css'
function MTA () {
    const [color,setcolor]=useState('')
    const [message,setmessage]=useState('')

    function bgColor(ok){
        if(ok === "happy"){
            setcolor("lightblue")
            setmessage("i am very happy now 😄")
        }
        else if (ok ==="sad"){
            setcolor("violet")
            setmessage("i am very sad now ☹️")
        }
        else if (ok ==="excited"){
            setcolor("lightseagreen")
            setmessage("i am very excited now 🤓")
        }
        else if (ok ==="calm"){
            setcolor("lightcoral")
            setmessage("i am very calm now 😐")
        }
        else if (ok ==="angry"){
            setcolor("lightgray")
            setmessage("i am very angry now 😠 ")
        }
        else if (ok ==="sleepy"){
            setcolor("lightpink")
            setmessage("i wand to sleep now 😴 ")
        }
        else{
            setcolor('')
            setmessage('')
        }

    }
    
    return(
        <section className="bg-section" style={{backgroundColor:color}}>
            <div className="bg-h1">
                <h1>Mood Tracker App </h1>
            </div>
            <div className="bg-para">
                <p>How are you feeling today ? </p>
            </div>
            <div className="bg-button">
                <button onClick={()=>bgColor("happy")}>Happy 😄</button>
                <button onClick={()=>bgColor("sad")} >Sad ☹️</button>
                <button onClick={()=>bgColor("excited")}>Excited 🤓</button>
                <button onClick={()=>bgColor("calm")}>Calm 😐</button>
                <button onClick={()=>bgColor("angry")}>Angry 😠</button>
                <button onClick={()=>bgColor("sleepy")}>Sleepy 😴</button>
            </div>
            <div className="bg-msg">
                <p>{message}</p>
            </div>
            <div className="bg-rs">
                <button onClick={bgColor}> Reset Mood </button>
            </div>
        </section>
    )
}

export default MTA