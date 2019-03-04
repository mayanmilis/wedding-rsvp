export const signIn = (creds) =>{   
    return(dispatch,{getFirebase}) =>{  
        const firebase = getFirebase();
        firebase().auth().signInWithEmailAndPassword( 
            creds.email,
            creds.password
        ).then(() => { 
            dispatch({type: 'SIGNIN_SUCCESS'})
        }).catch((err) =>{  
            dispatch({type: 'SIGNIN_FAIL', err})
        })
    }
}