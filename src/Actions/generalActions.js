import Axios from 'axios';
import { history } from '../history';
import {BEST_SELLER_FETCHED, BEST_SELLER_ERROR, PRODUCT_FETCHED, PRODUCT_FETCH_ERROR} from '../Constants/generalConstants';

function fetchBestSellers() {
    return dispatch => {
        Axios.get("https://techstore1.herokuapp.com/products/getbestsellers")
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
function fetchProduct(productId) {
    return dispatch => {
        console.log(productId)
        Axios.get("https://techstore1.herokuapp.com/products/getproduct/"+productId)
        .then(function(response) { 
                dispatch({type: PRODUCT_FETCHED, payload: response});
        }).catch(function(error) {
            // dispatch({type: PRODUCT_FETCH_ERROR, payload: error});
        });
    };
}
export {fetchBestSellers, fetchProduct}