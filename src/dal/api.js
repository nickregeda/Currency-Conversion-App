import * as axios from 'axios';
import moment from "moment";

const instance = axios.create({
    baseURL: 'https://fixer-fixer-currency-v1.p.rapidapi.com',
    headers: {
        'X-RapidAPI-Host': 'fixer-fixer-currency-v1.p.rapidapi.com',
        'X-RapidAPI-Key': '44fd4e9a03msh9b211683485df4cp182985jsn156a5906f237'
    }
})

export const latestRatesApi = {
    getLatestRates(base, symbols) {
        return instance.get(`/latest?base=${base}&symbols=${symbols}`)
    }
}

export const historicalRatesApi = {
    getHistoricalRates(date, base, symbols) {
        return instance.get(`/${date}?base=${base}&symbols=${symbols}`)
    }
}

const current_date = moment().format(moment.HTML5_FMT.DATE);
export const convertApi = {
    getConvertRate(from, to, amount, date = current_date) {
        return instance.get(`/convert?from=${from}&to=${to}&amount=${amount}&date=${date}`)
    }
}

export const currencySymbolsApi = {
    getSupportedSymbols() {
        return instance.get(`/symbols`)
    }
}