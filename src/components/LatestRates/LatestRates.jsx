import s from './LatestRates.module.css';
import {Form, Field, Formik, ErrorMessage} from "formik";
import {useState} from "react";

export const LatestRatesFrom = (props) => {
    let supported_symbols = [];
    for (let [key, value] of Object.entries(props.supported_symbols)) {
        supported_symbols.push(`${key}: ${value}`);
    }
    let supported_symbols_option = [<option style={{display: "none"}}></option>, supported_symbols.map(s =>
        <option key={s} value={s}>{s}</option>)];

    return (
        <Form className={s.form}>
            <div className={s.field_container}>
                <label htmlFor='base'>Base currency</label>
                <Field className={s.field} name={'base'} as={'select'}>
                    {supported_symbols_option}
                </Field>
                <ErrorMessage name={'base'} component={'div'}/>
            </div>
            <div>
                <div className={s.field_container}>
                    <label htmlFor='symbol1'>Currency №1</label>
                    <Field className={s.field} name={'symbol1'} as={'select'}>
                        {supported_symbols_option}
                    </Field>
                    <ErrorMessage name={'symbol1'} component={'div'}/>
                </div>
                <div className={s.field_container}>
                    <label htmlFor='symbol2'>Currency №2</label>
                    <Field className={s.field} name={'symbol2'} as={'select'}>
                        {supported_symbols_option}
                    </Field>
                    <ErrorMessage name={'symbol2'} component={'div'}/>
                </div>
                <div className={s.field_container}>
                    <label htmlFor='symbol3'>Currency №3</label>
                    <Field className={s.field} name={'symbol3'} as={'select'}>
                        {supported_symbols_option}
                    </Field>
                    <ErrorMessage name={'symbol3'} component={'div'}/>
                </div>
            </div>
            <button className={s.button}>Submit</button>
        </Form>
    )
}

const LatestRates = (props) => {
    let [base, setBase] = useState();

    let symbols = [];
    if (props.symbols) {
        for (let [key, value] of Object.entries(props.symbols)) {
            symbols.push(`${key}: ${value}`);
        }
    }
    let symbols_elements = symbols.map(s => <div key={s}>{s}</div>)

    let onSubmit = (values) => {
        let symbols_array = Object.values(values).map(s => s.substr(0, 3));
        let base = symbols_array[0];
        setBase(base);
        let symbols = symbols_array.slice(1).join();
        props.getLatestRates(base, symbols)
    }
    return (
        <div className={s.container}>
            <div className={s.form_container}>
                <Formik
                    initialValues={{
                        base: '', symbol1: '', symbol2: '', symbol3: ''
                    }}
                    onSubmit={onSubmit}
                >
                    {({values}) => {
                        return <LatestRatesFrom supported_symbols={props.supported_symbols}/>
                    }}
                </Formik>
            </div>
            <div className={s.result_container}>
                <div className={s.results_label}>Results for {base}</div>
                <div>
                    {base !== undefined && base !== '' ? base + ': 1' : base !== undefined && base === '' && 'EUR: 1'}
                </div>
                <div>
                    {symbols_elements}
                </div>
            </div>
        </div>
    )
}
export default LatestRates;