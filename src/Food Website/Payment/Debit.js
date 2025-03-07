import './Debit.css'
function Debit(){
    return(
        <div>

<div className="container">

    <form action="">

        <div className="row">

            <div className="col">

                <h3 className="title">Payment address</h3>

                <div className="inputBox">
                    <span>full name :</span>
                    <input type="text" placeholder="Enter Your Name "/>
                </div>
                <div className="inputBox">
                    <span>email :</span>
                    <input type="email" placeholder="Enter Your E-mail"/>
                </div>
                <div className="inputBox">
                    <span>address :</span>
                    <input type="text" placeholder="Your Address"/>
                </div>
                <div className="inputBox">
                    <span>city :</span>
                    <input type="text" placeholder="Chennai"/>
                </div>

                <div className="flex">
                    <div className="inputBox">
                        <span>state :</span>
                        <input type="text" placeholder="india"/>
                    </div>
                    <div className="inputBox">
                        <span>pin code :</span>
                        <input type="text" placeholder="600096"/>
                    </div>
                </div>

            </div>

            <div className="col">

                <h3 className="title">payment</h3>

                <div className="inputBox">
                    <span>cards accepted :</span>
                    <img src="image/card_img.png" alt="available cards"/>
                </div>
                <div className="inputBox">
                    <span>name on card :</span>
                    <input type="text" placeholder="Mr.Your Name "/>
                </div>
                <div className="inputBox">
                    <span>debit card number :</span>
                    <input type="number" placeholder="1111-2222-3333-4444"/>
                </div>
                <div className="inputBox">
                    <span>exp month :</span>
                    <input type="text" placeholder="january"/>
                </div>

                <div className="flex">
                    <div className="inputBox">
                        <span>exp year :</span>
                        <input type="number" placeholder="2024"/>
                    </div>
                    <div className="inputBox">
                        <span>CVV :</span>
                        <input type="text" placeholder="123"/>
                    </div>
                </div>

            </div>
    
        </div>

        
        
         <a href="/Payment-Successfull"> <button type="button" value="proceed to checkout" className="submit-btn"> proceed to checkout </button></a>
    </form>

</div>    
</div>
    )
}

export default Debit