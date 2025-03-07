import { useState } from 'react';
import { FaRupeeSign } from "react-icons/fa";
import './Gpay.css'
import { Link, useNavigate } from 'react-router-dom';
function Gpay({cart}){
    /* function submit(){
        if(qrtext.value.length > 0) {
            qrimage.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrtext.value;
            imgbox.classList.add("show-img");
           

        }else{
            qrtext.classlist.add('error');
            setTimeout(()=>{
            qrtext.classlist.remove('error');
            },1000);

        }

         
   } */
       
        
    const totalPrice = cart.reduce((sum,item) =>
        sum + item.price *item.quandiy,0)
            const [open,setIsOpen] = useState(false)
            const [img,setimg]=useState('')
            const navigation = useNavigate()
            const [loading,setloading]=useState(false)
            const [qr,setqr]=useState()
            const [size,setsize]=useState()
        
            function Menu(){
                setIsOpen(!open)
            }
            function Continue(){
                navigation("/Payment-Successfull")
            }
            function generateQr(){
                setloading(true)
                try{
                    const url = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(`${totalPrice}`)}`;
                    setimg(url)
                }
                catch(error){
                    console.error("Error",error)
                }
                finally{
                    setloading(false)
                }
            }
            
            function download(){
                    fetch(img)
                    .then((Response)=>Response.blob())
                    .then((blob)=>{
                        const link = document.createElement("a");
                        link.href = URL.createObjectURL(blob);
                        link.download = "qrcode.png";
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                    })
            }

            
    return(
        <div>
            {cart.length===0?<p className='order-error2'>Server Problem in Gpay Please Try in Another Payment Method </p> : <div>
            <h1>
                Gpay 
            </h1>
            <div className="app-container24">
                
        <div className="img">
            <img src={img} alt={loading && "Please wait..."}/>
        </div>
        
        <div className="input1">
        <label htmlFor="qr" className="">
            <h3>Total Price : <span className='rupees'><FaRupeeSign/></span><span className="price">{totalPrice}</span></h3>
        </label>
        <input type="hidden" id="qr" value={qr} onChange={(e)=>setqr(e.target.value)}/>
        </div>
        <div className="input2">
        <label htmlFor="qr1" className="">
            <h3>Scan and pay with any BHIM UPI app</h3>
        </label>
        <input type="hidden" id="qr1" value={size} onChange={(e)=>setsize(e.target.value)}/>
        </div>
        <div>
            <img src="payment.png" alt="" width={"230px"} />
        </div>
            </div>
            <div className="btn1" onClick={Menu}>
                {open ?   <button className="qr-btn1" onClick={Continue} >Continue</button> : <button className="qr-btn1"  disabled={loading} onClick={generateQr}>Generate QR code</button> }
            <button className="qr-btn2" onClick={download}> Download QR code</button>
        </div> 

        </div>}
    </div>
    )
}

export default Gpay