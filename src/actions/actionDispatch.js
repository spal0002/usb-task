import * as actionTypes from './actionTypes';


export const onLoadDevices = (devices) => {
    return {
        type: actionTypes.ON_LOAD_DEVICES,
        devices: devices
    };
};