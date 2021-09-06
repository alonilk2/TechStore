import Axios from 'axios';
import { history } from '../history';
import {BEST_SELLER_FETCHED, BEST_SELLER_ERROR} from '../Constants/generalConstants';

function fetchBestSellers() {
    return dispatch => {
        Axios.get("http://localhost:5000/products/getbestsellers")
        .then(function(response) { 
            if(response.data){
                dispatch({type: BEST_SELLER_FETCHED, payload: response});
            }
            else {
                dispatch({type: BEST_SELLER_ERROR, payload: 0});
            }
        })
        .catch(function(error) {
            dispatch({type: BEST_SELLER_ERROR, payload: error});
        });
    };
}

export {fetchBestSellers}