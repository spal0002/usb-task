import * as actionDispatch from './actionDispatch';
import * as services from '../services';


export const loadDevices = () => {
    let devices = services.getDevices();
    return dispatch => {
        dispatch(actionDispatch.onLoadDevices(devices));
    }

}
