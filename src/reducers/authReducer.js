import * as actions from '../actions/types';


/**
 * State'i güncelleyen olay.
 * Dispatch ile bir action fırlatıldığında, o action ile ilgili yapılması gereken state güncellemesi.
 */

const initialState = {
    user: null
}

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case actions.SIGNED_IN:
            return {
                user: action.payload.user
            }
        case actions.SIGNED_OUT:
            return {
                user: null
            }
        case actions.USER_STATE_CHANGED: 
            return {
                user: action.payload.user
            }
        default:
            return state;
    }
}