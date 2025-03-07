import { useState } from "react";
import './newEmoji.css'

function Project(){

    const [text,settext]=useState('')
    const [emoji,setemoji]=useState('')
    const [message,setmessage]=useState('')

    function Text0 (emoji){
        settext(text)
        setemoji( p => p+emoji)
    }

    function Text1 (emoji){
        settext(text)
        setemoji(p => p+emoji)

    }

    function Text2 (emoji){
        settext(text)
        setemoji(p => p+emoji)

    }
    function Text3 (emoji){
        settext(text)
        setemoji(p => p+emoji)

    }
    function Text4 (emoji){
        settext( text)
        setemoji( p => p+emoji)

    }
    function Text5 (emoji){
        settext(text)
        setemoji(p => p+emoji)

    }
    function Text6 (emoji){
        settext(text)
        setemoji(p => p+emoji)

    }
    
    function handleSubmit () {
    
        if(text.length === 0 ){
            setmessage("Please Enter the Text First ! ")
           }
           else if (emoji.length === 0){
            setmessage("Please Enter the Emoji ! ")
           }
           else{
            setmessage(text+" "+emoji)
           }
        }
    
        function handleDelete () {
            settext(text.slice(0,-1))
        }
    
        function handleClear(){
            settext("")
            setemoji("")
            setmessage("")
        }

    return(
        <section className=""text-section>
            <div className="text-head">
                <h1>Emoje + text</h1>
             </div>
             <div className='text-button'>
                <button onClick={()=>Text0("😁")}>😁</button>
                <button onClick={()=>Text1("😀")}>😀</button>
                <button onClick={()=>Text2("😍")}>😍</button>
                <button onClick={()=>Text3("🥳")}>🥳</button>
                <button onClick={()=>Text4("❤️")}>❤️</button>
                <button onClick={()=>Text5("😵")}>😵</button>
                <button onClick={()=>Text6("🤗")}>🤗</button>
            </div>
            <div className="text-input1">
                <input type="text"
                        value={text}
                        placeholder="Enter the Text"
                        onChange={(e)=>settext(e.target.value)} />
            </div>
            <div className="text-input2">
                <input type="text"
                        placeholder="Enter the Emoji"
                        value={emoji}
                        onChange={(e)=>setemoji(e.target.value)}
                         />
            </div>
            <div className="text-total">
            <div className="text-submit">
                <button onClick={handleSubmit} type="submit">submit</button>
            </div>
            <div className="text-delete">
                <button onClick={handleDelete}>Delete</button>
            </div>
            <div className="text-clear">
                <button onClick={handleClear}>Clear All </button>
            </div>
            </div>
            <div className="text-message">
                <p>{message}</p>
            </div>
        </section>
    )

}
export default Project;
