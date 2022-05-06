import {applyMiddleware, combineReducers, createStore} from "redux";
import LatestRatesReducer from "./LatestRatesReducer";
import thunkMiddleware from 'redux-thunk';
import ConvertReducer from "./ConvertReducer";

let reducers = combineReducers({
    LatestRatesReducer,
    ConvertReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store;
export default store;