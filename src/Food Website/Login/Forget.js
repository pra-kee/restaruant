import { useEffect, useState } from "react";
import './Forget.css'
import { toast } from "react-toastify";

function Forget(){

    const [mobile,setMobile] = useState('')
    const [message,setmessage] = useState('')
    const [show,setshow] = useState(false)
                  const pk =  useEffect(() => {
                            let timer
                            if(show){
                                timer = setTimeout(()=>{
                                    setshow(false)
                                },4000)
                            }
                            return() => clearTimeout(timer)
                        },[show])

        function handleForger(e){
            e.preventDefault()
            if(mobile === localStorage.getItem('number')){
                setmessage( "Your password is : "+localStorage.getItem('password'))
            }

            else{ 
                toast.error("Invalid mobile number ! ")
                setmessage(" ")
            }
        } 

    return(
        <div className="forget-main">
            <h1>Forget Password</h1>

            <div className="forget-section">
                <p> Register mobile number end with {localStorage.getItem('number').slice(0,2) }*****{ localStorage.getItem('number').slice(8,11)}</p>
                <form onSubmit={handleForger}>
                <input type="tel" 
                        placeholder="Enter your Mobile Number"
                        name="mobile" value={mobile} onChange={ e => setMobile (e.target.value)} />
                        <div className="forget-btn">
                        <button type="submit" onClick={()=> setshow(true)}> Submit</button>
                        </div>
            </form>
            </div>
            
            <p className="forget-sms">{ message}</p>
        </div>
    )
}

export default Forget ;