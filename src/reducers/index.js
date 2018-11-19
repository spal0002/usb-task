import { combineReducers } from 'redux';
import deviceReducer from './devicesReducer';

const ampleReducer = combineReducers({
    deviceData: deviceReducer
});

export default ampleReducer;