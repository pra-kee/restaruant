import './Module.css'
function Module (){
    return(
        <section className='main-section'>
            <div className='content-main'>
                <div className='main-module1'>
                    <img src="prakash.png" alt="" width="200px"  />
                    <p className='para1'>
                    Win Daily Stack Bonus <br/>
                    <div className='main-small'>

                    <span className='main-span'>upto</span>
                    100 Coins 
                    </div>
                </p>
                </div>
                
            </div>
            
            <main className='main-module2'>
            <div className='main-para2'>
                <p>
                    Get Started 
                </p>
            </div>
            <div className='main-label'>
                
            <label>        
                    <select className='main-select'>
                        <optgroup className='grp'>
                            <option value="">
                            </option>
                            <option value="">
                            +91
                            </option>
                            <option value="">
                            +93
                            </option>
                            <option value="">
                            +62
                            </option>
                            <option value="">
                            +82
                            </option>
                        </optgroup>
                    </select>
                    <input type="number"/>
                </label>
                
                
            </div>
            <div>
            </div>
            <div className='main-check'>
                
                <p> <input type="checkbox" /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus obcaecati pariatur, natus a maxime ullam possimus? Aut adipisci odit minus quod, necessitatibus vero ab fugit maxime numquam non quasi ut.</p>
            </div>
            <div className='main-btn'>
                <button>Continue</button>
            </div>
            </main>
        </section>
    )
}

export default Module;