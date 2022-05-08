import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk';
import ConvertReducer from "./ConvertReducer";
import RatesReducer from "./RatesReducer";

let reducers = combineReducers({
    RatesReducer,
    ConvertReducer,
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store;
export default store;