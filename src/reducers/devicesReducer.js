import * as actionTypes from '../actions/actionTypes';

const intialState = {
    devices: []   
}

const loginReducer = function (currentState = intialState, action) {
    switch (action.type) {
        case actionTypes.ON_LOAD_DEVICES:
            return {
                ...currentState,
                devices: action.devices
            }
        
        default:
            return currentState
    }
}

export default loginReducer;