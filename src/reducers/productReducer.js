import * as actions from '../actions/types';


const initialState = {
    products: [],
    productDetail: {}
};

export default function errorReducer(state = initialState, action) {
    switch (action.type) {
        case actions.GET_PRODUCTS:
            return {
                ...state,
                products: action.payload
            }
        
        case actions.GET_PRODUCT_DETAIL: 
            return {
                ...state,
                productDetail: action.payload
            }

        case actions.DELETE_PRODUCT:
            return {
                ...state,
                products: state.products.filter(product => product.id !== action.payload)
            }

        default:
            return state;
    }
}