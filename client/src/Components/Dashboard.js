import React, {Component} from 'react'
import Video from '../Files/wedding.mp4'
import './Dashboard.css'
import {connect} from 'react-redux'
import {compose} from 'redux'
import {addGuest} from '../Store/Actions'
import moment from 'moment'
import { firestoreConnect } from 'react-redux-firebase'


class Invitation extends Component{ 
state = {   
    name: '',
    number: 0,
    isComing: '',
    notComingDisplay: false,
    comingDisplay: false,
    date: '',
    nameErr: false,
    numberErr: false
}

onChangeHandler = (event) =>{    
    this.setState({ 
        [event.target.id]: event.target.value
    })
}

addGuestHandler = (event) =>{    
    event.preventDefault()
    let number = this.state.number
    if(number<10){   
        this.setState({ 
            number: number+1
        })
    }
}

removeGuestHandler = (event) =>{    
    event.preventDefault()
    let number = this.state.number
    if(number>0){   
        this.setState({ 
            number: number-1
        })
    }else{  
        return null
    }
}

comingHandler = (event) =>{
    event.preventDefault();  
    let coming = "כן";
    let comingDisplay = true
    let name = this.state.name
    let number = this.state.number
    let date = new Date();
    date = moment(date).format('MMMM Do YYYY, h:mm:ss a');
    if(name===''){  
        this.setState({ 
            nameErr: true
        })
    }
    if(number===0){  
        this.setState({ 
            numberErr: true
        })
    }
    if(name!==''&&number>0){    
        this.setState({ 
            isComing: coming,
            comingDisplay: comingDisplay,
            date: date
        })
        let guest = {   
            name: this.state.name,
            isComing: coming,
            number: this.state.number,
            date: date
        }
        this.props.addGuest(guest)
        console.log(guest)
    }
}

notComingHandler = (event) =>{  
    event.preventDefault();  
    let coming = "לא";
    let notComingDisplay = true
    let date = new Date();
    date = moment(date).format('MMMM Do YYYY, h:mm:ss a');
    this.setState({ 
        isComing: coming,
        notComingDisplay: notComingDisplay,
        date: date
    })
    let guest = {   
        name: this.state.name,
        isComing: coming,
        number: 0,
        date: date
    }
    this.props.addGuest(guest)
    console.log(guest)
}

nameErrHandler = (event) =>{ 
    event.preventDefault();  
    let nameErr = !this.state.nameErr;

    this.setState({ 
        nameErr: nameErr
    })
}

numberErrHandler = (event) =>{ 
    event.preventDefault();  
    let numberErr = !this.state.numberErr;

    this.setState({ 
        numberErr: numberErr
    })
}

render(){   
    console.log(this.state)
    let video = Video
    let notComingDisplay = 'none';
    let comingDisplay = 'none';
    let nameErrDisplay = 'none';
    let numberErrDisplay = 'none';
    if(this.state.notComingDisplay){  
        notComingDisplay = ''
    }
    if(this.state.comingDisplay){  
        comingDisplay = ''
    }
    if(this.state.nameErr){  
        nameErrDisplay = ''
    }
    if(this.state.numberErr){  
        numberErrDisplay = ''
    }
    return( 
        <div className='Container'>
            <div className='Video-Wrapper'>   
                <video src={Video} autoPlay={true} loop={true} muted={true}></video>
            </div>
            <div className='Fade'></div>
            <div className='Overlay'>  
            <div className='Content'>   
                <div className='NotComingContainer' style={{display:`${notComingDisplay}`}}>   
                    <div className='NotComing'>   
                    <div>תשובתך נקלטה במערכת</div>
                    <div>תודה</div>
                    </div>
                </div> 
                <div className='ComingContainer' style={{display:`${comingDisplay}`}}>   
                    <div className='Coming'>   
                    <div>תשובתך נקלטה במערכת</div>
                    <div>!ניפגש באירוע</div>
                    </div>
                </div> 
                <div className='ErrContainer' style={{display:`${nameErrDisplay}`}}>   
                    <div className='Err'>   
                    <div>נא למלא שם מלא</div>
                    <button onClick={this.nameErrHandler}>אישור</button>
                    </div>
                </div> 
                <div className='ComingContainer' style={{display:`${numberErrDisplay}`}}>   
                    <div className='Err'>   
                    <div>נא למלא מספר אורחים</div>
                    <button onClick={this.numberErrHandler}>אישור</button>
                    </div>
                </div> 
            <div className='Header'>   
            <h1>!פינוקיו ובלה מתחתנים</h1>
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
                                <div className='CounterResult'>{this.state.number}</div>
                                <button id='Plus' onClick={this.addGuestHandler}>+</button>
                                </div>
                        </div>
                        </div>
                    </div>
                    <div className='SubmitContainer'>   
                        <div className='Submit'>   
                                <h5>?מגיעים לאירוע</h5>
                                <div className='Buttons'>   
                                <button onClick={this.notComingHandler} id='No'>לא מגיעים</button>
                                <button onClick={this.comingHandler} id='Yes'>אישור הגעה</button>
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

const mapDispatchToProps = (dispatch) => {  
    return  {   
        addGuest: (guest) => dispatch(addGuest(guest))
    }
}

const mapStateToProps = (state) => {    
    console.log(state)
    return{ 
       list: state.firestore.data.list
    }
}

    export default compose(
        connect(mapStateToProps,mapDispatchToProps),
        firestoreConnect([
            { collection: 'list' }
        ])
    )(Invitation);