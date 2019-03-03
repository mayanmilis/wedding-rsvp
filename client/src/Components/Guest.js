import React from 'react'

const guest = (props) =>{   
    const {name,date,isComing,number} = props;
    return( 
        <div>   
            <table> 
                <thead> 
                    <th>    
                        <td>שם</td>
                        <td>האם מגיעים</td>
                        <td>מספר אורחים</td>
                        <td>תאריך אישור</td>
                    </th>
                </thead>
            </table>
        </div>
    )
}

export default guest