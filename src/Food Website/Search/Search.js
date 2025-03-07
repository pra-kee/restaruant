import './Search.css'
import Data from '../Product.json'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Search({cart,setCart}){
    const navigation = useNavigate()
    function addToCart(item) {
        if (localStorage.getItem('email')){
            const existingItem = cart.find((cartItem)=> cartItem.id === item.id)
        
        if(existingItem){
            const existingItemUpdate = cart.map((cartItem)=> cartItem.id === item.id ? {...cartItem,quandiy : cartItem.quandiy+1} : cartItem)
            setCart(existingItemUpdate)
        }
        else{
            setCart([...cart,{...item,quandiy:1}])
        }
        }
        else{
                navigation('/register')
        }
    }

    const [search,setSearch1]=useState("")
    return(
        <div>
            <div className="search-bar">
                     <h1>Search</h1>
                <div className='search-input'>
                    
                <input type="text"
                       placeholder= "Search..."
                       onChange={(event)=>{setSearch1(event.target.value)}}
                />
                </div>
            </div>
            <div className="menu-products">
            {  
                Data.filter((item)=>{
                    if(search ===""){
                        return null
                    }
                    else if(item.name.toLowerCase().includes(search.toLowerCase())){
                        return item 
                    }
                })
                .map((item)=>{
                    return(
                    <div className="menu-main" key={item.id}>
                    <div className="menu-img">
                       <img src={item.img} alt="" />
                    </div>
                    <h3 className="menu-name">
                        {item.name}
                    </h3>
                    <p className="menu-price">Price : {item.price} /-</p>
                    <button className="menu-btn" onClick={() =>addToCart(item)}>Add to Cart</button>
                    </div>
                    
                    
                    )
                    
                })
            }
            </div>     
        </div>
    )
}

export default Search