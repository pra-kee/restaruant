import { useEffect, useState } from "react";
import './Register.css'
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function UpdateProfile(){
    const navigate = useNavigate();
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [number, setnumber] = useState("");
  const [address, setaddress] = useState("");

  useEffect(() => {
    // Load user data from localStorage
    const storedName = localStorage.getItem('name')
    const storedEmail = localStorage.getItem('email')
    const storedNumber = localStorage.getItem('number')
    const storedAddress = localStorage.getItem('address')

    if (storedName && storedEmail && storedAddress && storedNumber) {
      setname(storedName);
      setemail(storedEmail);
      setnumber(storedNumber);
      setaddress(storedAddress);
    }
  }, [navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Update only the changed values
    if(name === ""){
        toast.error("Please Enter the Name ")
    }
    else if (email === ""){
        toast.error("Please Enter the Email ")
    }
    else if (number === ""){
        toast.error("Please Enter the Mobile Number ")
    }
    else if (address === ""){
        toast.error("Please Enter the Address ")
    }
    else{
        localStorage.setItem('name',name)
        localStorage.setItem('email',email)
        localStorage.setItem('address',address)
        localStorage.setItem('number',number)
        toast.success("Profile Update SuccessFully")
        navigate('/profile')
    }
  };
  
    return (
        <div className="login-header">
            <div>
                <h2>Update Profile</h2>
            </div>
            <form onSubmit={handleSubmit}>
            <div className="login-form">
                <div>
                <input type="text"
                        placeholder="Update your Name"
                        value={name}
          onChange={(e) => setname(e.target.value)} />
                </div>
               <div>
                <input type="email"
                        placeholder="Update your Email"
                        name="email" value={email} onChange={ e => setemail (e.target.value)} />
               </div>
               <div>
                <input type="tel"
                        placeholder="Update your Number"
                        name="number" value={number} onChange={ e => setnumber (e.target.value)} />
               </div>
               <div>
                <input type="text"
                        placeholder="Update your Address"
                        value={address}
          onChange={(e) => setaddress(e.target.value)} />
               </div>
               <button type='submit'>Submit</button>
            </div>
            </form>
        </div>
    )
}

export default UpdateProfile