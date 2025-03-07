import './UserCard.css'

function UserCard (props) {
    return(
        <section className="card-container">
             <div >
                <span className={props.online?"pro online":"pro offline"}>
                      {props.online?"ONLINE":"OFFLINE"}
                </span>
                <img src={props.img} alt="user-1" className='img' />
                <h3>{props.name}</h3>
                <h3>{props.place}</h3>
                <p>{props.role}</p>
            </div>
        <div className='buttons'>
            <button className='primary'>Message</button>
            <button className='primary outline'>Following</button>
        </div>
        <div className='skills'>
            <h6>
                Skills
            </h6>
            <ul>
                {props.skills.map((skill,index)=>(
                    <li key={index}>
                        {skill}
                    </li>
                ))}
            </ul>
         </div>
        </section>
    )
}

export default UserCard