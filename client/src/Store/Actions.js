export const addGuest = (guest) => {    
    return (dispatch, getState, {getFirebase, getFirestore}) => {   
        const firestore = getFirestore();
        firestore.collection('list').add({  
            ...guest
        }).then(() => { 
            dispatch({type: 'ADDED_GUEST', guest: guest})
        }).catch((err) =>  {   
            dispatch({ type: 'ADDED_GUEST_ERR', err})
        })
    }
}