import { useState } from 'react'
import './Login.css'
import { Link,useNavigate} from 'react-router-dom'
import {toast} from "react-toastify"
function Login(){
    const [Email,setEmail] = useState('')
    const [Password,setPassword] = useState('')

    const navigation = useNavigate()
    const username = localStorage.getItem('email') 
    ? localStorage.getItem('email') : "prakash"
    const userPassword = localStorage.getItem('password')
    ? localStorage.getItem('password') : "123"
    
    function Result (e) {
        e.preventDefault()
        if(Email === username && Password === userPassword ){
            toast.success("Login successfully")
            navigation("/menu")
        }
        else if(Email.length===0){
            toast.error("Please enter the Login Id ! ")
        }
        else if(Password.length===0){
            toast.error("Please enter the Password ! ")
        }
        else{
            toast.error("Invalid username or password")
        }
    }
    return(
        <div className="login-header">
            <div>
                <h2>Login</h2>
            </div>
            <form onSubmit={Result}>
            <div className="login-form">
                <div>
                <input type="text"
                        placeholder="Login id "
                        value={Email}
                        onChange={(e)=>setEmail(e.target.value)}/>
                </div>
               <div>
                <input type="password"
                        placeholder="Password"
                        value={Password}
                        onChange={(e)=>setPassword(e.target.value)}/>
               </div>
               <div className='forgot'>
               <Link to="/forget-password">Forget password ? </Link>
               </div>
               <button type='submit'>Login</button>
               <div className='login-footer'>
               <p> if you not register </p> <Link to="/register">Register now</Link>
            </div>
            </div>
            
            </form>
            
           
        </div>
    )

}

export default Login