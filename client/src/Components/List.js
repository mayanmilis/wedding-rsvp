import React, {Component} from 'react'
import {connect} from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import {compose} from 'redux'
import './List.css'
import {Redirect} from 'react-router-dom'
import {signOut} from '../Store/AuthActions'
import './SignIn.css'

class List extends Component{   
    state = {   
        coming: '',
        notComing: '',
        totalComing: ''
    }

    signOutHandler = () =>{    
        this.props.signOut()
    }

    render(){   
        let {list, auth} = this.props;
        if(!auth.uid){   
           return <Redirect to='signin'/>
        }
        let coming = 0;
        let notComing = 0;
        let totalAmount = 0;
        for(let i=0; i<list.length; i++){   
            if(list[i].isComing==="כן"){    
                coming = coming+1
                totalAmount = totalAmount + list[i].number
            }
            if(list[i].isComing==="לא"){    
                notComing = notComing+1
            }
        }
        console.log(coming, notComing, totalAmount)
        return( 
            <div className='ListContainer'>  
                <div className='SummaryContainer'>   
                    <div className='Summary'>   
                            <div>{coming} :סה"כ אישרו הגעה</div>
                            <div>{notComing} :סה"כ לא אישרו הגעה</div>
                            <div>{totalAmount} :סה"כ אורחים</div>
                    </div> 
                    <div className='Submit'>   
                                    <button onClick={this.signOutHandler}>Sign Out</button>
                                </div>
                </div>

                <div className='Table'>   
                    <table> 
                            <thead> 
                                <tr>    
                                    <th>תאריך אישור</th>
                                    <th>כמות אורחים</th>
                                    <th>האם מגיעים</th>
                                    <th>שם האורח</th>
                                </tr>
                            </thead>
                            <tbody> 
                                {list&&list.map(item =>{    
                                    let style;
                                    if(item.isComing==='כן'){   
                                        style='rgb(103, 255, 97)'
                                    }else{  
                                        style = 'rgb(255, 52, 52)'
                                    }
                                return( 
                                    <tr key={item.id}>
                                        <td id='date'>{item.date}</td>
                                        <td id='number'>{item.number}</td>
                                        <td id='isComing' style={{backgroundColor:`${style}`}}>{item.isComing}</td>
                                        <td id='name'>{item.name}</td>
                                    </tr>
                                )
                            })}
                            </tbody>
                        </table>
                 </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {  
    console.log(state)  
    console.log(state.firebase.auth)
    let arr = state.firestore.ordered.list
    let list = [];
    if(arr){   
        for(let i=0; i<arr.length; i++){   
            list.push(arr[i])
        }
    }
    return{ 
        list: list,
        auth: state.firebase.auth

    }
}

const mapDispatchToProps = (dispatch) =>{   
    return{ 
        signOut: () => dispatch(signOut())
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
        { collection: 'list', orderBy: ['date', 'desc']}
    ])
)(List);