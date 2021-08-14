import { createStore, combineReducers, applyMiddleware} from "redux";
import thunkMiddleware from 'redux-thunk'
import authReducer from "../reducers/authReducer";
import alertReducer from "../reducers/alertReducer";
import productReducer from "../reducers/productReducer";

const rootReducer = combineReducers({
    auth: authReducer,
    alert: alertReducer,
    product: productReducer
});

const store = createStore(rootReducer, {}, applyMiddleware(thunkMiddleware));

export default store;
