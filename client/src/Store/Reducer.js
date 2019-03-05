import { combineReducers } from 'redux'
import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore'
import authReducer from './AuthReducer'

const reducer = combineReducers({   
    firestore: firestoreReducer,
    firebase: firebaseReducer,
    auth: authReducer
});

export default reducer