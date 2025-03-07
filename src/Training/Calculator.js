import { useState } from "react";
import './Calculator.css'

function Calclator () {
    const[total,settotal]=useState('')

    const handleClick = (e) => {
        settotal(total.concat(e.target.name))
    }

    const clear = () => {
        settotal("")
    }
    function handleDelete(){
        settotal(total.slice(0,-1))
    }
    const calculate = () => {
        try{
            settotal(eval(total).toString())

        }
        catch{
            settotal("Error")
        }
    }

return(
    <div className="calc-header">
        <h1>Calculator</h1>

        <div className="calc-container">
        <form action="">
            <input type="text" value={total} />
        </form>
        <div className="calc-button">

        <button onClick={clear} id="clear" className="high">AC</button>
        <button onClick={handleDelete}className="high">DEL</button>
        <button name='/'onClick={handleClick}className="high">/</button>
        <button name='7'onClick={handleClick}>7</button>
        <button name='8'onClick={handleClick}>8</button>
        <button name='9'onClick={handleClick}>9</button>
        <button name='*'onClick={handleClick}className="high">x</button>
        <button name='4'onClick={handleClick}>4</button>
        <button name='5'onClick={handleClick}>5</button>
        <button name='6'onClick={handleClick}>6</button>
        <button name='-'onClick={handleClick}className="high">-</button>
        <button name='1'onClick={handleClick}>1</button>
        <button name='2'onClick={handleClick}>2</button>
        <button name='3'onClick={handleClick}>3</button>
        <button name='+'onClick={handleClick} className="high">+</button>
        <button name='0'onClick={handleClick}>0</button>
        <button name='.'onClick={handleClick}>.</button>
        <button onClick={calculate}id="equal" className="high">=</button>

        </div>
        </div>
    </div>
)
    
}

export default Calclator;