import React, {Component} from 'react'
import Video from '../Files/wedding.mp4'
import './Dashboard.css'


class Invitation extends Component{ 
state = {   
    name: '',
    number: '',
    isComing: 0,
    video: ''
}
componentDidMount(){    
    this.mountVideo()
}

async mountVideo () {   
    let video;
    try{    
        let mountVideo = Video
        video = mountVideo
    } catch(err){    
        console.log('something went wrong')
    }
    this.setState({ 
        video: video
    })
}

onChangeHandler = (event) =>{    
    this.setState({ 
        [event.target.id]: event.target.value
    })
}

addGuestHandler = (event) =>{    
    event.preventDefault()
    let isComing = this.state.isComing
    if(isComing<10){   
        this.setState({ 
            isComing: isComing+1
        })
    }
}

removeGuestHandler = (event) =>{    
    event.preventDefault()
    let isComing = this.state.isComing
    if(isComing>0){   
        this.setState({ 
            isComing: isComing-1
        })
    }else{  
        return null
    }
}

comingHandler = () =>{  
    let coming = true;
    this.setState({ 
        isComing: coming
    })
}

notComingHandler = () =>{  
    let coming = false;
    this.setState({ 
        isComing: coming
    })
}
render(){   
    console.log(this.state.name)
    let video = Video
    return( 
        <div className='Container'>
            <div className='Video-Wrapper'>   
                <video src={this.state.video} autoPlay={true} loop={true} muted={true}></video>
            </div>
            <div className='Fade'></div>
            <div className='Overlay'>   
            <div className='Content'>   
            <div className='Header'>   
            <h1>אישור הגעה לחתונה של</h1>
            </div>
            <div className='Form'>  
                <form>  
                    <div className='DetailsContainer'>   
                        <div  className='Details'>  
                                <h5>:נא למלא את הפרטים הבאים</h5> 
                                <div className='Input'>   
                                <input type='text' id='name' placeholder=':שם מלא' onChange={this.onChangeHandler} value={this.state.name} required/>
                                </div>
                                <div className='Amount'>   
                                <h5>:כמות אורחים</h5>
                                <div className='Counter'>   
                                <button onClick={this.removeGuestHandler}>-</button>
                                <div className='CounterResult'>{this.state.isComing}</div>
                                <button id='Plus' onClick={this.addGuestHandler}>+</button>
                                </div>
                        </div>
                        </div>
                    </div>
                    <div className='SubmitContainer'>   
                        <div className='Submit'>   
                                <h5>?מגיעים לאירוע</h5>
                                <div className='Buttons'>   
                                <button id='No'>לא מגיעים</button>
                                <button id='Yes'>אישור הגעה</button>
                                </div>
                        </div>
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