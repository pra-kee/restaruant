import './login.css'
import { useState } from "react";


function Login () {

    const [username,setusername]=useState('')
    const [password,setpassword]=useState('')
    const [message,setmessage]=useState('')

    const default_username = "prakash"
    const default_password = "1234"

    function Result (e) {

        e.preventDefault()

        if(default_username === username  && default_password === password) {
            setmessage("Login success")
        }
        else{
            setmessage("Invalid username or password !")
        }
    }
    return(
        <section className='login'>
            <form onSubmit={Result}>
                <div className='username'>
                    <label>
                        username : 
                    </label>
                    <input type="text"
                            value={username}
                            onChange={(e)=>setusername(e.target.value)}  />
                </div>
                <div className='password'>
                    <label>
                        password : 
                    </label>
                    <input type="password" 
                           value={password}
                           onChange={(e)=>setpassword(e.target.value)}  />
                </div>
                <div className='button'>
                    <button type='submit'>Login</button>
                </div>
                <div className='message'>
                    <p>{message}</p>
                </div>
            </form>
        </section>
    )
}
export default Login;
