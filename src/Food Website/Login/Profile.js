import { Link } from 'react-router-dom'
import './Profile.css'
function Profile(){
  
         return(
        <div className="profile-header">
            <div>
              {localStorage.length === 0 ? <p className="order-error2"> Please Register First !  </p> : 
              <>
                  <section className="checkout">
                  <h1 class="title">Profile</h1>
                  <section action="" method="post">
                                <div className="user-info">
                                           <h3>your details</h3>
                                              <p><i className="fas fa-user"></i> Name : <span>{localStorage.getItem('name')}</span></p>
                                              <p><i className="fas fa-phone"></i>Email :  <span>{localStorage.getItem('email')}</span></p>
                                              <p><i className="fas fa-envelope"></i> Mobile No : <span>{localStorage.getItem('number')}</span></p>
                                              
                                            <h3>delivery address</h3>
                                              <p className="address"><i className="fas fa-map-marker-alt"></i> <span>{localStorage.getItem('address')}</span></p>
                                </div>           
                  </section>
                  </section>

              </>}
            </div>
             <div className='order-summary-btn'>
                  <Link to="/update-Profile"><button>Update Profile </button></Link>
             </div>
    
        </div>
    )
}

export default Profile