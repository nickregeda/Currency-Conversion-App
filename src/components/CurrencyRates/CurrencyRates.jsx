import s from './CurrencyRates.module.css';
import {Formik} from "formik";
import {useState} from "react";
import RatesMap from "../../common/RatesMap";
import RatesForm from "../../common/RatesForm/RatesForm";

const CurrencyRates = (props) => {
    const [base, setBase] = useState();

    let onSubmit = (values, setFieldValue) => {
        debugger
        let symbols_array = Object.values(values).slice(2);
        symbols_array = symbols_array.map(s => s.substr(0, 3));
        let base = symbols_array[0];
        if (base === '') {
            base = 'EUR';
        }
        setBase(base);
        let symbols = symbols_array.slice(1).join();

        if (!values.date) {
            props.getLatestRates(base, symbols)
        } else {
            props.getHistoricalRates(values.date, base, symbols);
        }
    }

    return (
        <div className={s.container}>
            <div className={s.formik_container}>
                <Formik
                    initialValues={{date_checkbox: false, date: '', base: '', symbol1: '', symbol2: '', symbol3: ''}}
                    validate={values => {
                        const errors = {}
                        if (!values.symbol1 && !values.symbol2 && !values.symbol3) {
                            errors.symbol1 = 'Please select at least one currency'
                        }
                        return errors;
                    }}
                    onSubmit={onSubmit}
                >
                    {({values, setFieldValue}) => {
                        return <RatesForm setFieldValue={setFieldValue} date_option={values.date_checkbox}/>
                    }}
                </Formik>
            </div>
            <div className={s.result_container}>
                <div className={s.result_label}>Results for {base}</div>
                <div className={s.result_currency_container}>
                    <div>
                        {base !== undefined && base + ': 1'}
                        <RatesMap rates={props.rates}/>
                    </div>
                </div>
                <div>EUR by default</div>
            </div>
        </div>
    )
}
export default CurrencyRates;