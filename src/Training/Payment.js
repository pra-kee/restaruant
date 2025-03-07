
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
function Payment(){
    // src/components/PaymentPage.js

  const [paymentMethod, setPaymentMethod] = useState('');
  const Navigate= useNavigate
  ();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Redirect based on the selected payment method
    if (paymentMethod === 'GPay') {
      Navigate.push('/gpay');
    } else if (paymentMethod === 'credit-card') {
        Navigate.push('/credit-card');
    } else if (paymentMethod === 'debit-card') {
        Navigate.push('/debit-card');
    } else if (paymentMethod === 'cash-on-delivery') {
      alert('Cash on delivery selected!');
    } else {
      alert('Please select a payment method!');
    }
}
    return(  <div>
        <h2>Select a Payment Method</h2>
        <form onSubmit={handleSubmit}>
          <select
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <option value="">--Choose Payment Method--</option>
            <option value="cash-on-delivery">Cash on Delivery</option>
            <option value="GPay"><Link to="/Gpay"><a href="/Gpay">Gpay</a></Link></option>
            <option value="credit-card">Credit Card</option>
            <option value="debit-card">Debit Card</option>
          </select>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
}

export default Payment