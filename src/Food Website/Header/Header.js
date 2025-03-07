import './Header.css'
import { Link, useNavigate } from 'react-router-dom';
import { FiShoppingCart} from "react-icons/fi";
import { IoSearchOutline } from "react-icons/io5";
import { RxPerson } from "react-icons/rx";
import { TfiMenu } from "react-icons/tfi";
import { useState } from 'react';
import { BiX } from "react-icons/bi";
function Header({cart}){
    const [isOpen,setIsOpen] = useState(false)
    const [isOpen1,setIsOpen1] = useState(false)
    const navigation = useNavigate()

    function Menu(){
        setIsOpen(!isOpen)
        setIsOpen1(isOpen1)
    }
    function Menu1(){
        setIsOpen1(!isOpen1)
    }

    function handleLogout(){
        localStorage.clear()
        navigation('/home')
        window.location.reload()
    }

    function off(){

    setIsOpen1(!isOpen1)

    }
    
    return(
        <section className="home-section">
        <nav className=" home-nav ">
            <div className='container-1'>
            <span className='heading'>PRAKASH</span>
            </div>
            <div className='container-2'>
                    
            <ul className={isOpen?'love':' '} onClick={Menu}>
                <Link to="/"><li><a href='/'>Home</a> </li></Link>
                <Link to="/about"><li><a href='/about' >About</a></li></Link>
                <Link to="/menu"><li><a href='/menu' >Menu</a></li></Link>
                <Link to="/orders-summary"><li><a href='/orders-summary' >Orders</a></li></Link>
            </ul>
            </div>
            <div className='shopping-btn'>                       
                        <Link><a href="" onClick={Menu1}><RxPerson/></a></Link>
                        <Link to="/Cart"><a href="/orders"><FiShoppingCart/><span className='cart-count'>{cart.length===0?"":cart.length}</span></a></Link>
                        <Link to="/Search"><a href="/Search"><IoSearchOutline /></a></Link>
                        <Link ><a className='header-menu' href="" onClick={Menu}>{isOpen?<span className='cancel'><BiX/></span>:<TfiMenu/>}</a></Link>                  
            </div>
        </nav>
        {localStorage.length===0 ? <div className={isOpen1?'profile':'profile1'}>
            <p className="name">{localStorage.getItem('name')}</p>
                    <div className="flex">
                    <p className="account-error">Please Register First ! </p>
                       <Link to="/register" onClick={off} className="btnn">register</Link> 
                    </div>
        </div> : <div className={isOpen1?'profile':'profile1'}>
            <p className="name">{localStorage.getItem('name')}</p>
                    <div className="flex">
                       <Link to="profile" onClick={off} className="btnn">Profile</Link> 
                       <Link to="/" className="delete-btn" onClick={handleLogout}>Logout</Link> 
                    </div>
            <p onClick={off} className="account"><Link to="/login">login</Link>or <Link to="/register">register</Link></p>
        </div>}
        
    </section>
    )
}

export default Header