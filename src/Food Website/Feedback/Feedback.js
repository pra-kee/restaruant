import './Feedback.css'
import { useState } from 'react'
function Feedback(){
    const [rating,setrating]=useState(0)
    const [hover,sethover]=useState(0)
    console.log('rating',rating)
    console.log('hover',hover)
    console.log('((rating && hover) || hover)',((rating && hover) || hover))

    return(
        <div className='App'>
            <h1>Reviews</h1>
            <div className='star-btn'>
                {
                    [1,2,3,4,5].map((num)=>(
                        <button key={num}
                        onClick={()=>setrating(num)}
                        onMouseOver={()=>sethover(num)}
                        onMouseLeave={()=>sethover(rating)}
                        >
                            <span className={`star ${num <= ((rating && hover) || hover) ? 'on':'off'}`}>&#9733;</span>
                        </button>
                    ))
                }
            </div>
        </div>
    )

}

export default Feedback