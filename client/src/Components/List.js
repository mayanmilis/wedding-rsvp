import React, {Component} from 'react'
import {connect} from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import {compose} from 'redux'
import './List.css'

class List extends Component{   
    state = {   
        coming: '',
        notComing: '',
        totalComing: ''
    }


    render(){   
        let {list} = this.props;
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
    let arr = state.firestore.ordered.list
    let list = [];
    if(arr){   
        for(let i=0; i<arr.length; i++){   
            list.push(arr[i])
        }
    }

    return{ 
        list: list
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'list' }
    ])
)(List);