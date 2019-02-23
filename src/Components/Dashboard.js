import React, {Component} from 'react'
import Video from '../Files/wedding.mp4'
import './Dashboard.css'


class Invitation extends Component{ 
state = {   

}

render(){   
    return( 
        <div className='Container'>
            <div className='Video-Wrapper'>   
                <video src={Video} autoPlay='true' loop='true'></video>
            </div>
            <div className='Fade'></div>
            <div className='Overlay'>   
            <div className='Content'>   
            <div className='Header'>   
            <h1>אישור הגעה לחתונה של</h1>
            </div>
            <div className='Form'>  
                <form>  
                    <div  className='Input'>  
                            <h5>:נא למלא את הפרטים הבאים</h5> 
                            <input type='text' id='name' placeholder=':שם מלא' required/>
                            <input type='number' id='number' placeholder=':מספר טלפון' required/>
                    </div>
                    <div className='Amount'>   
                            <h5>:כמות אורחים</h5>
                            <div className='Counter'>   
                            <button id='Minus'>-</button>
                            <div className='CounterResult'>6</div>
                            <button id='Plus'>+</button>
                            </div>
                    </div>
                    <div className='Submit'>   
                            <button>אישור הגעה</button>
                    </div>
                </form>
            </div>
            </div>
            </div>
        </div>
    )
}
}

export default Invitation