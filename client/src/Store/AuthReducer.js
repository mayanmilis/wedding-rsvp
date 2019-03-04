const initialState = {
    authError: null
}

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SIGNIN_SUCCESS':
        console.log('SIGNIN_SUCCESS');
        return state;
        case 'SIGNIN_FAIL':
        console.log('SIGNIN_FAIL');
        return state;
        default:
        return state;
    }
}

export default authReducer;