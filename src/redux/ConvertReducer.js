import {convertApi} from "../dal/api";

const SET_RATE = 'SET_RATE';

let initialState = {
    result_rate: 0,
}

let ConvertReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_RATE:
            return {
                ...state,
                result_rate: action.rate,
            }
        default:
            return state;
    }
}

export default ConvertReducer;

//action creators
export const setRate = (rate) => ({type: SET_RATE, rate});

//thunk creators
export const getConvertRate = (from, to, amount) => {
    return (dispatch) => {
        convertApi.getConvertRate(from, to, amount).then(
            response => {
                debugger
                dispatch(setRate(response.data.result))
            }
        )
    }
}
