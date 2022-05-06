import {currencyApi} from "../dal/api";

const SET_SUPPORTED_SYMBOLS = 'SET_SUPPORTED_SYMBOLS';
const SET_SYMBOLS = 'SET_SYMBOLS';

let initialState = {
    supported_symbols: {},
    symbols: {},
}

let Reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SUPPORTED_SYMBOLS:
            return {
                ...state,
                supported_symbols: action.symbols,
            }
        case SET_SYMBOLS:
            return {
                ...state,
                symbols: action.symbols
            }
        default:
            return state;
    }
}

export default Reducer;

//action creators
export const setSupportedSymbols = (symbols) => ({type: SET_SUPPORTED_SYMBOLS, symbols});
export const setSymbols = (symbols) => ({type: SET_SYMBOLS, symbols});

//thunk creators
export const getSupportedSymbols = () => {
    return (dispatch) => {
        currencyApi.getSupportedSymbols().then(
            response => {
                dispatch(setSupportedSymbols(response.data.symbols))
            }
        )
    }
}

export const getLatestRates = (base, symbols) => {
    return (dispatch) => {
        currencyApi.getLatestRates(base, symbols).then(
            response => {
                dispatch(setSymbols(response.data.rates))
            }
        )
    }
}
