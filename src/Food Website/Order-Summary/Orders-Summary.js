import {useNavigate} from 'react-router-dom';
import './Orders-Summary.css'
import { useState } from 'react';
function OrdersSummary({cart}){
        /* const totalItems = cart.reduce((sum,item)=>
        sum + item.quandiy,0) */
        const [User,setUser] = useState([])
        const addUser = (newUser) => {
          setUser([...User,{...newUser,id:User.length+1}])
        }
        const [paymentMethod, setPaymentMethod] = useState('');
        const history = useNavigate();

        const handleSubmit = (e) => {
          e.preventDefault();
          
          // Redirect based on the selected payment method
          if (paymentMethod === 'GPay') {
            history('/Gpay');
          } else if (paymentMethod === 'credit-card') {
            history('/Credit');
          } else if (paymentMethod === 'debit-card') {
            history('/Debit');
          } else if (paymentMethod === 'cash-on-delivery') {
            history('/Cash-On-Delivery');
          } else {
            alert('Please select a payment method!');
          }
        };

    const totalPrice = cart.reduce((sum,item) =>
        sum + item.price *item.quandiy,0)
    
    return(
      <div>
              {cart.length === 0 ? <p className="order-error2">No Items in the Orders Summary </p> : 
              <form onSubmit={handleSubmit} >
                            <h1 class="order-title">Order summary</h1>
                  <section class={cart.length===0  ? '' : "checkout"}>
                            <section action="" method="post">
                                  <div class="cart-items">
                                         <h3>order items</h3>
                                  {cart.map((items)=>(
                                          <p><span key={items.id} class="name"> <div className='prakash'>{items.name}</div> x <div className='prakash'>{items.quandiy}</div></span><span class="price">RS:{items.price * items.quandiy}</span></p> ))}
                                          <p class="grand-total"><span class="name">Total Amount :</span> <span className="price">RS:{totalPrice}</span></p>
                                  </div> 
                                  
                                <div class="user-info">
                                           <h3>your details</h3>
                                              <p><i class="fas fa-user"></i> <span> Name : {localStorage.getItem('name')}</span></p>
                                              <p><i class="fas fa-phone"></i><span>Email : {localStorage.getItem('email')}</span></p>
                                              <p><i class="fas fa-envelope"></i> <span>Contact No : {localStorage.getItem('number')}</span></p>
                                              
                                            <h3>delivery address</h3>
                                              <p class="address"><i class="fas fa-map-marker-alt"></i> <span>{localStorage.getItem('address')}</span></p>
                                        <div>
                                             <h3> Payment Method</h3>
                                              
                                        </div>
                                  </div>

                                       <>
                                            <select
                                              value={paymentMethod}
                                              onChange={(e) => setPaymentMethod(e.target.value)}>
                                                      <option value="">--Choose Payment Method--</option>
                                                      <option value="cash-on-delivery">Cash on Delivery</option>
                                                      <option value="GPay">GPay</option>
                                                      <option value="credit-card">Credit Card</option>
                                                      <option value="debit-card">Debit Card</option>
                                            </select>
                                      </>
                                  
                            </section>
                            
                  </section>
                                    <div className='order-summary-btn'>
                                    <button  type="submit">Submit</button>
                                    </div>
        
        
              </form>}
      </div>
        

    )
}

export default OrdersSummary