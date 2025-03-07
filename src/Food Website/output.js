import About from './About/About';
import Home from './Home/Home';
import Orders from './Orders/Orders';
import Message from './Message/Message';
import {Routes,Route} from 'react-router-dom'
import Menu from './Menu/Menu';
import {useState} from 'react';
import Header from './Header/Header';
import OrdersSummary from './Order-Summary/Orders-Summary'
import COD from './Payment/COD';
import Gpay from './Payment/Gpay';
import Credit from './Payment/Credit';
import Debit from './Payment/Debit';
import Search from './Search/Search';
import Login from './Login/Login';
import Register from './Login/Register';
import Profile from './Login/Profile';
import UpdateProfile from './Login/Update';
import Forget from './Login/Forget';
import "react-toastify/dist/ReactToastify.css"
import { ToastContainer } from 'react-toastify';
import "./Header/Header.css"
function Output(){
    const [cart,setCart] = useState([])
    const [pass,setPass]=useState()
        return(<>
        <div>
            <Header cart={cart} pass={pass}/>
            <div className="noti">
            <ToastContainer 
            position='top-center'
            theme='dark'
            autoClose={3000}
            hideProgressBar={false}
            closeOnClick
            pauseOnHover
            draggable
            toastStyle={{color:'white',marginTop:'55px'}}/>
            </div>
           
        <Routes>
            <Route index element={<Home/>}>
            </Route>
            <Route path='/home' element={<Home/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/menu' element={<Menu cart={cart} setCart={setCart} />}></Route>
            <Route path='/orders-summary' element={<OrdersSummary cart={cart} setCart={setCart} pass={pass}/>}></Route>
            <Route path='/message' element={<Message/>}></Route>
            <Route path='/Gpay' element={<Gpay cart={cart}/>}></Route>
            <Route path='/Credit' element={<Credit/>}></Route>
            <Route path='/Debit' element={<Debit/>}></Route>
            <Route path='/Cash-On-Delivery' element={<COD/>}></Route>
            <Route path='/Payment-Successfull' element={<COD/>}></Route>
            <Route path='/Cart' element={<Orders cart={cart} setCart={setCart}/>}></Route>
            <Route path='/Search' element={<Search cart={cart} setCart={setCart}/>}></Route>
            <Route path='/profile' element={<Profile cart={cart}/>}></Route>
            <Route path='/register' element={<Register pass={setPass}/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/update-Profile' element={<UpdateProfile/>}></Route>
            <Route path='/forget-password' element={<Forget/>}></Route>
            
        </Routes>
        </div>
        </>
        )
}
export default Output;
