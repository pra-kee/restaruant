import { useState } from "react";
import './Register.css'
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Register(){
    const [name,setname] = useState('')
    const [email,setemail] = useState('')
    const [address,setaddress] = useState('')
    const [number,setnumber] = useState('')
    const [password,setPassword] = useState('')
    const [Cpassword,setCPassword] = useState('')
    const [messag,setmessage] = useState ('')

    const navigation = useNavigate()


const handleSubmit = (e) => {
    e.preventDefault()
    if(name === ""){
        toast.error("please Enter the Name !")
    }
    else if (email === ""){
        toast.error("please Enter the  Email !")
    }
    else if (number === ""){
        toast.error("please Enter the  Mobile Number !")
    }
    else if (address === ""){
        toast.error("please Enter the  Address ! ")
    }
    else if (password === ""){
        toast.error("please Enter the  Password ! ")
    }
    else if(password !== Cpassword){
        toast.error("please enter the conform Password correctly  ! ")
    }
    else{
        toast.success("Register SuccessFully")
        localStorage.setItem('name',name)
        localStorage.setItem('email',email)
        localStorage.setItem('address',address)
        localStorage.setItem('number',number)
        localStorage.setItem('password',password)
        setmessage ("Registation SuccessFully ")
        navigation('/login')
    }
}
    return (
        <div className="register-header">
            <div>
                <h2>Register Now</h2>
            </div>
            <form onSubmit={handleSubmit}>
            <div className="register-form">
                <div>
                <input type="text"
                        placeholder="Enter your Name"
                        name="name" value={name} onChange={ e => setname (e.target.value)} />
                </div>
               <div>
                <input type="email"
                        placeholder="Enter your Email"
                        name="email" value={email} onChange={ e => setemail (e.target.value)} />
               </div>
               <div>
                <input type="tel"
                        placeholder="Enter your Number"

                        name="number" value={number} onChange={ e => setnumber (e.target.value)} />
               </div>
               <div>
                <input type="text"
                        placeholder="Enter your Address"
                        name="address" value={address} onChange={ e => setaddress (e.target.value)} />
               </div>
               <div>
                <input type="password"
                        placeholder="Enter your Password"
                        name="password" value={password} onChange={ e => setPassword (e.target.value)} />
               </div>
               <div>
                <input type="password"
                        placeholder="Conform your Password"
                        name="password" value={Cpassword} onChange={ e => setCPassword (e.target.value)} />
               </div>
               <button type='submit'>Register</button>
               <div className='register-footer'>
               <p>Already register </p> <Link to="/login">Login now</Link>
            </div>
            </div>
            </form>
            <p>{messag}</p>
        </div>
    )
}

export default Register;