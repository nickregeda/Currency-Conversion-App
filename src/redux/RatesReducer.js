import {currencySymbolsApi, latestRatesApi, historicalRatesApi} from "../dal/api";

const SET_SUPPORTED_SYMBOLS = 'SET_SUPPORTED_SYMBOLS';
const SET_SYMBOLS = 'SET_SYMBOLS';

let initialState = {
    supported_symbols: {},
    rates: {},

}

let LatestRatesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SUPPORTED_SYMBOLS:
            return {
                ...state,
                supported_symbols: action.symbols,
            }
        case SET_RATES:
            return {
                ...state,
                rates: action.rates
            }
        default:
            return state;
    }
}

export default LatestRatesReducer;

//action creators
export const setSupportedSymbols = (symbols) => ({type: SET_SUPPORTED_SYMBOLS, symbols});
export const setRates = (rates) => ({type: SET_SYMBOLS, rates});

//thunk creators
export const getSupportedSymbols = () => {
    return (dispatch) => {
        currencySymbolsApi.getSupportedSymbols().then(
            response => {
                dispatch(setSupportedSymbols(response.data.symbols))
            }
        )
    }
}

export const getLatestRates = (base, symbols) => {
    return (dispatch) => {
        latestRatesApi.getLatestRates(base, symbols).then(
            response => {
                if (response.data.success) {
                    dispatch(setSymbols(response.data.rates))
                }
            }
        )
    }
}

export const getHistoricalRates = (date, base, symbols) => {
    return (dispatch) => {
        historicalRatesApi.getHistoricalRates(date, base, symbols).then(
            response => {
                debugger
                dispatch(setHistoricalRates(response.data.rates));
            }
        )
    }
}
