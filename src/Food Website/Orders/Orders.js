import { Link } from "react-router-dom"
import './Orders.css'
function Orders({cart,setCart}){
    
    
    function removeFromCart(id) {
        setCart(cart.filter((item)=>item.id !==id ))
    }
    function updateQuantity(id,amount) {
        const updatedCart = cart.map(item =>{
            if(item.id === id){
                return {...item,quandiy: item.quandiy+amount}
            }
            return item 
        })
        const filterCart = updatedCart.filter(item => 
            item.quandiy > 0 
        )
        setCart(filterCart)
    }

    const totalItems = cart.reduce((sum,item)=>
        sum + item.quandiy,0)

    const totalPrice = cart.reduce((sum,item) =>
        sum + item.price *item.quandiy,0)
    
return(
    <div>
         <div className="order-container">
        <h1>Cart Products</h1>
            {cart.length === 0 && <p className="order-error">No Items in the cart </p>}

            {cart.length > 0 && (
                <div className="cart-main">
                    <div className="cart-list">
                    <ul>
                        {cart.map((item)=>(
                            <li key={item.id}>
                                <div className="cart-img">
                                    <img src={item.img}
                                    alt="" width="100px" height="100px"/>
                            <div className="cart-btn">
                                <p className="cart-qty">
                                    {item.name} - {item.price} /- Quantity : {item.
                                    quandiy}

                                </p>
                                <div className="baby">
                                    <button className="btnnPlus" onClick={()=>updateQuantity(item.id,1)}>+</button>
                                    <button className="btnnMin" onClick={()=>updateQuantity(item.id,-1)}>-</button>
                                    <button className="delete-btn-move" onClick={()=>removeFromCart(item.id)}>Remove</button>
                                </div>
                                </div>
                                </div>
                                
                            </li>
                        ))}
                    </ul>
                    </div>
                    <div className="map">
                    <h3 className="cart-tot">
                        Total Items : {totalItems}
                    </h3>
                    <h3 className="cart-amt">
                          
                        Total Amount : {totalPrice} /-
                        
                    </h3>
                
                    </div>
                </div>
            )}
        </div> 

        <div className={cart.length === 0 ? 'close':'open'}>
        <Link to="/orders-summary"><a href="/orders-summary"><button>Conform Order</button></a></Link>
        </div>
    </div>
)
}
export default Orders
