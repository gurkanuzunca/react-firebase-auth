import * as actions from '../actions/types';


/**
 * State'i güncelleyen olay.
 * Dispatch ile bir action fırlatıldığında, o action ile ilgili yapılması gereken state güncellemesi.
 */

const initialState = {
    type: null,
    message: null,
    isOpen: false
}

export default function errorReducer(state = initialState, action) {
    switch (action.type) {
        case actions.SET_ERROR_ALERT:
            return {
                type: 'danger',
                message: action.payload.message,
                isOpen: true 
            }
        case actions.SET_SUCCESS_ALERT:
            return {
                type: 'success',
                message: action.payload.message,
                isOpen: true 
            }
        case actions.CLEAR_ALERT:
            return {
                type: null,
                message: null,
                isOpen: false
            }
        default:
            return state;
    }
}