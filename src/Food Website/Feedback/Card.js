import './Card.css'
import Feedback from './Feedback'
function Card (props) {

    return(
        <section className="card">
            <div className='card-main'>
                <img src={props.img} alt="" />
            </div>
            <div className='review'>
            <h1>{props.name}</h1>
            <div className='card.feed'>
            <p><Feedback/></p>
            </div>
            <h4>{props.sms}</h4>
          
            </div>
         </section>

    )

}

export default Card 