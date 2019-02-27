// const initialState = {
//     list: [],
//     err: ''
// }

// const reducer = (state = initialState, action) => {
//     switch(action.type) {
//         case 'ADDED_GUEST':
//         let newList = state.list
//         newList.push(action.guest)
//         console.log('added guest secceed');
//         return {
//             ...state, 
//             list: newList 
//         }
//         case 'ADDED_GUEST_ERR':
//         console.log('added guest error', action.err);
//         return {
//             ...state,
//             authError: action.err
//         }
//         default:
//         return state;
//     }
// }

// export default reducer;

import { combineReducers } from 'redux'
import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore'

const reducer = combineReducers({   
    firestore: firestoreReducer,
    firebase: firebaseReducer
});

export default reducer