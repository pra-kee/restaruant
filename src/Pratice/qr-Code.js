import { useState } from 'react';
import './qr-Code.css'
function QrCode(){

    const [img,setimg]=useState('')
    const [loading,setloading]=useState(false)
    const [qr,setqr]=useState('')
    const [size,setsize]=useState('150')

    function generateQr(){
        setloading(true)
        try{
            const url = `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(qr)}`;
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
        <div className="app-container">
            <div>
                <h1>
                    Qr-Code Generator
                </h1>
                
            </div>
                
            <div className="img">
                <img src={img} alt={loading && "Please wait..."}/>
            </div>
            
            <div className="input1">
            <label htmlFor="qr" className="">
                Data for Qr-Code : 
            </label>
            <input type="text" id="qr" value={qr} onChange={(e)=>setqr(e.target.value)}/>
            </div>
            <div className="input2">
            <label htmlFor="qr1" className="">
            Qr-Code size : 
            </label>
            <input type="text" id="qr1" value={size} onChange={(e)=>setsize(e.target.value)}/>
            </div>
            <div className="btn">
                <button className="qr-btn1"  disabled={loading} onClick={generateQr}>Generate QR code</button>
                <button className="qr-btn2" onClick={download}> Download QR code</button>
            </div>
        </div>
    )
}

export default QrCode;