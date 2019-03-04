import React ,{Component} from 'react'
import './SignIn.css'
import {connect} from 'react-redux'
import {signIn} from '../Store/AuthActions'

class Signin extends Component{ 
    state = {   
        email:'',
        password: ''
    }

    onChangeHandler = (event) =>{ 
    this.setState({
        [event.target.id]: event.target.value
    })
    }

    onSubmitHandler = (event) =>{ 
        event.preventDefault();
        this.props.signIn(this.state)
    }
    render(){ 
        console.log(this.state)  
        return( 
            <div className='SigninContainer'>
                <div className='Signin'>   
                    <div className='Header'>
                            <h1>Sign-In</h1>
                        </div>
                        <div className='FormContainer'>   
                            <form onSubmit={this.onSubmitHandler}>  
                                <div>   
                                    <input type='text' id='email' placeholder='Enter Email' onChange={this.onChangeHandler} value={this.state.email}/>
                                </div>
                                <div>   
                                    <input type='password' id='password' placeholder='Enter Password' onChange={this.onChangeHandler} value={this.state.value}/>
                                </div>
                                <div className='Submit'>   
                                    <button>SUBMIT</button>
                                </div>
                            </form>
                        </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{ 
    console.log(state)
    return{ 
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) =>{   
    return{ 
        signIn: (creds) => dispatch(signIn(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signin)