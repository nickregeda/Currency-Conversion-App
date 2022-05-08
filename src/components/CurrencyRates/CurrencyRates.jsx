import s from './HistoricalRates.module.css';
import {Formik} from "formik";
import moment from 'moment';
import {useState} from "react";
import RatesMap from "../../common/RatesMap";
import RatesForm from "../../common/RatesForm/RatesForm";

export const HistoricalRatesForm = (props) => {
    return (
        <RatesForm/>
    )
}

const HistoricalRates = (props) => {
    let current_date = (moment().format(moment.HTML5_FMT.DATE))

    const [base, setBase] = useState();

    let onSubmit = (values) => {
        let symbols_array = Object.values(values).map(s => s.substr(0, 3));
        let base = symbols_array[1];
        setBase(base);
        let symbols = symbols_array.slice(2).join();

        props.getHistoricalRates(values.date, base, symbols);

        // let symbols_array = Object.values(values).map(s => s.substr(0, 3));
        // let base = symbols_array[0];
        // setBase(base);
        // let symbols = symbols_array.slice(1).join();
        //
        // props.getLatestRates(base, symbols)
    }

    return (
        <div className={s.container}>
            <Formik
                initialValues={{date: current_date, base: '', symbol1: '', symbol2: '', symbol3: ''}}
                onSubmit={onSubmit}
            >
                {({values}) => {
                    return <HistoricalRatesForm supported_symbols={props.supported_symbols}/>
                }}
            </Formik>
            <div className={s.result_container}>
                <div className={s.result_label}>Results for {base}</div>
                <div className={s.result_currency_container}>
                    <div>
                        {base !== undefined && base !== '' ? base + ': 1' : base !== undefined && base === '' && 'EUR: 1'}
                        <RatesMap rates={props.symbols}/>
                    </div>
                </div>
                <div>EUR by default</div>
            </div>
        </div>
    )
}
export default HistoricalRates;