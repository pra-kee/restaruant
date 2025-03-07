import { useState } from "react";
import './Details.css'
function Details () {
/* 
    const [user,setuser]=useState({
        name:"prakash",
        age:22,
        gender:"Male",
        isMarried:false
    })

    function handleChange (e) {
        const name = e.target.name
        const value = e.target.type === "checkbox"?e.target.checked : e.target.value
        setuser({...user,[name]:value})
    }


    return(
        <div>
            
            <div>
                <h1>Students Details</h1> 
            </div>
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                Name
                            </td>
                            <td>
                                {user.name}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Age
                            </td>
                            <td>
                                {user.age}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Gender
                            </td>
                            <td>
                                {user.gender}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                IsMarried
                            </td>
                            <td>
                                {user.isMarried?"Married":"Not Married"}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <form>
                <input type="text" placeholder="Full Name"
                value={user.name}
                name="name"
                onChange={handleChange}/>
                <input type="number" placeholder="Age"
                 value={user.age}
                 name="age" onChange={handleChange}/>
                <div classNa me="gender">
                    <label htmlFor="male">
                        <input type="radio" name="gender" value="Male" onChange={handleChange}
                        />
                        Male
                    </label>
                    <label htmlFor="female">
                        <input type="radio" name="gender"
                        value="Female" onChange={handleChange}/>
                        Female
                    </label>
                   <div>
                   <label htmlFor="isMarried" >
                        <input type="checkbox" checked={user.isMarried} name="isMarried" onChange={handleChange}/>
                        isMarried 
                    </label>
                   </div>
                </div>
            </form>
        </div> 

    )*/

        const [user,setuser]=useState({
            name:"keerthika",
            age:19,
            gender:"Female",
            isMarried:true,
            country:"India",
            bio:"tell about your self ! "
        })

    function handleCheck(e) {

        const name = e.target.name
        const value = e.target.type === "checkbox" ? e.target.checked:e.target.value
        setuser({...user,[name]:value})

    }

        return(
            <div>
                <div>
                    <h1>Students Details</h1>
                </div>
                <div>
                    <table>
                        <tbody>
                            <tr>
                                <td>Name</td>
                                <td>{user.name}</td>
                            </tr>
                            <tr>
                                <td>Age</td>
                                <td>{user.age}</td>
                            </tr>
                            <tr>
                                <td>Gender</td>
                                <td>{user.gender}</td>
                            </tr>
                            <tr>
                                <td>isMarried</td>
                                <td>{user.isMarried?"Married":"Not Married"}</td>
                            </tr>
                            <tr>
                                <td>Country</td>
                                <td>{user.country}</td>
                            </tr>
                            <tr>
                                <td>Message</td>
                                <td>{user.bio}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div>
                    <form>
                            <label>
                               Name : <input type="text" name="name" onChange={handleCheck}/>
                            </label>
                            <label>
                               Age : <input type="number" name="age" onChange={handleCheck}/>
                            </label>
                            <label htmlFor="male">
                              <input type="radio" name="gender" id="male" value="male" onChange={handleCheck}/>
                              Male
                            </label>
                            <label htmlFor="female">
                                <input type="radio" name="gender" id="female" value="female" onChange={handleCheck}/>
                                Female
                            </label>
                            <label>
                               <input type="checkbox" checked={user.isMarried} name="isMarried" onChange={handleCheck}/>
                               isMarried
                            </label>
                            <div>
                                <label htmlFor="select"> Country 
                                <select name="country" id="select" value={user.country} onChange={handleCheck}> 
                                <option value="India">India</option>
                                <option value="China">China</option>
                                <option value="Russia">Russia</option>
                                </select>
                                </label>
                            </div> 
                            <div className="mdg1">
                            <label htmlFor="bio"> Message : 
                                <textarea name="bio" id="bio" rows="10" cols="5" value={user.bio} onChange={handleCheck}></textarea></label>    </div>                       
                    </form>

                </div>
            </div>
        )
}

export default Details;