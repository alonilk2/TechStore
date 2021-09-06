import {BEST_SELLER_FETCHED, BEST_SELLER_ERROR} from '../Constants/generalConstants';

function authReducer(state = {}, action) {
    switch (action.type) {
        case BEST_SELLER_FETCHED:{
            return {
                bestsellerarr: action.payload
            }
        }
        case BEST_SELLER_ERROR:{
            return {
                error: action.payload
            }
        }
        default: return state;
    }
}
export {authReducer};